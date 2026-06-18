"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { textNav } from "@/components/ui/typography";
import { EASE_OUT } from "@/lib/motion";

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteHeader() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string>(nav[0].id);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const v = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (v?.target.id) setActive(v.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.15, 0.35] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
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

  const nameParts = site.name.split(" ");

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-[var(--border)] bg-[var(--bg)]/80 shadow-[0_1px_12px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="layout-shell flex h-14 items-center justify-between gap-4">

        {/* Logo */}
        <button
          type="button"
          onClick={() => go("home")}
          className="focus-ring group flex items-center gap-0.5 text-sm font-bold tracking-tight"
        >
          <span className="gradient-text">{nameParts[0]}</span>
          <span className="text-[var(--accent)] transition-colors group-hover:text-[var(--accent-2)]">.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Sections">
          {nav.map((item) => {
            const on = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={[
                  "focus-ring relative rounded-md px-3 py-2",
                  textNav,
                  on ? "nav-active" : "",
                ].join(" ")}
              >
                {item.label}
                {on && !reduce && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full"
                    style={{ background: "var(--gradient-accent)" }}
                    transition={{ duration: 0.25, ease: EASE_OUT }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <ThemeToggle className="hidden sm:flex" />
          <a href="#contact" className="focus-ring btn-primary hidden !py-2 !text-sm sm:inline-flex">
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              {open
                ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="menu"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-xl md:hidden"
          >
            <nav className="layout-shell space-y-0.5 py-3" aria-label="Mobile sections">
              {nav.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    go(item.id);
                    setOpen(false);
                  }}
                  className={[
                    "w-full rounded-md px-2 py-2.5 text-left text-sm font-medium transition-colors",
                    active === item.id
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text)]",
                  ].join(" ")}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
