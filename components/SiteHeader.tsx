"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { EASE_OUT } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";

const go = scrollToSection;

export function SiteHeader() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string>(nav[0].id);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? y / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.4;
      const current = nav.reduce<string>((acc, item) => {
        const el = document.getElementById(item.id);
        if (!el) return acc;
        const top = el.getBoundingClientRect().top;
        return top <= threshold ? item.id : acc;
      }, nav[0].id);
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const initials = site.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <motion.header
        initial={reduce ? {} : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: EASE_OUT }}
        className={[
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? [
                "border-b border-[var(--border)]",
                "bg-[var(--bg)]/85 backdrop-blur-2xl",
                "shadow-[0_1px_0_rgba(37,99,235,0.06),0_8px_32px_rgba(15,23,42,0.08)]",
              ].join(" ")
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        {/* Scroll progress bar */}
        {!reduce && (
          <div
            className="accent-line pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left"
            style={{ transform: `scaleX(${scrollProgress})` }}
            aria-hidden
          />
        )}

        <div className="layout-shell flex h-16 items-center justify-between gap-4">

          {/* ── Logo ── */}
          <button
            type="button"
            onClick={() => go("home")}
            aria-label="Back to top"
            className="focus-ring group flex cursor-pointer items-center gap-2.5 select-none"
          >
            <span className="nav-monogram" aria-hidden>{initials}</span>
          </button>

          {/* ── Desktop nav ── */}
          <nav
            className="hidden items-center gap-0.5 md:flex"
            aria-label="Sections"
          >
            {nav.map((item) => {
              const on = active === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => { setActive(item.id); go(item.id); }}
                  className={[
                    "cursor-pointer rounded-full px-3.5 py-1.5 text-sm font-medium",
                    "focus-ring select-none transition-colors duration-200",
                    on ? "text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text)]",
                  ].join(" ")}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden cursor-pointer sm:flex" />

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="nav-hamburger focus-ring flex cursor-pointer md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.svg
                    key="x"
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" aria-hidden
                    initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
                    transition={{ duration: 0.2, ease: EASE_OUT }}
                  >
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="lines"
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" aria-hidden
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.18, ease: EASE_OUT }}
                  >
                    <path d="M4 7h16M4 12h10M4 17h16" strokeLinecap="round" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-overlay"
            initial={reduce ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? {} : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="mobile-nav-overlay md:hidden"
          >
            {/* Backdrop — click to close */}
            <div className="mobile-nav-backdrop" onClick={() => setOpen(false)} aria-hidden />

            {/* Floating card */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? {} : { opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className="mobile-nav-card"
            >
              {/* Card header */}
              <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="nav-monogram text-[0.6rem]!" aria-hidden>{initials}</span>
                  <span className="text-sm font-semibold text-[var(--text)]">{site.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="focus-ring flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[var(--bg-subtle)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--border)] hover:text-[var(--text)]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <nav className="space-y-0.5 px-3 py-3" aria-label="Mobile sections">
                {nav.map((item, i) => {
                  const on = active === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      type="button"
                      onClick={() => { go(item.id); setOpen(false); }}
                      initial={reduce ? {} : { opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.045, duration: 0.22, ease: EASE_OUT }}
                      className={[
                        "flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left",
                        "text-sm font-medium transition-colors duration-150",
                        on
                          ? "bg-[var(--accent-muted)] font-semibold text-[var(--accent)]"
                          : "text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text)]",
                      ].join(" ")}
                    >
                      {on ? (
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--gradient-accent)" }}
                          aria-hidden
                        />
                      ) : (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--border)]" aria-hidden />
                      )}
                      {item.label}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Bottom CTA */}
              <div className="border-t border-[var(--border)] p-3 pt-2.5">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary focus-ring flex w-full cursor-pointer items-center justify-center gap-2"
                >
                  Get in touch
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
