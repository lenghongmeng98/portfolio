"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, animate } from "framer-motion";
import Image from "next/image";
import { site, socialLinks } from "@/data/site";
import { UIIcon, socialIconFor } from "@/components/icons/UIIcon";
import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem, EASE_OUT } from "@/lib/motion";

const TECH_TAGS = ["Java", "Spring Boot", "Microservices", "Blockchain", "AI-Native Dev"];
const STATS = [
  { label: "Years Exp.", num: 2,  suffix: "+" },
  { label: "Students",  num: 50, suffix: "+" },
  { label: "Projects",  num: 10, suffix: "+" },
];

function CountUp({ to, suffix, reduce }: { to: number; suffix: string; reduce: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (reduce || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) { node.textContent = Math.round(v) + suffix; },
    });
    return () => controls.stop();
  }, [to, suffix, reduce]);
  return <span ref={ref}>{reduce ? `${to}${suffix}` : `0${suffix}`}</span>;
}

export function HeroSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 40 });
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || reduce) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setSpotlight({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-saas-bg relative flex min-h-[92vh] items-center overflow-hidden border-b border-[var(--border)]"
      style={{ "--sx": `${spotlight.x}%`, "--sy": `${spotlight.y}%` } as React.CSSProperties}
    >
      <div className="hero-spotlight" aria-hidden />
      {!reduce && (
        <>
          <div className="hero-blob hero-blob-1" aria-hidden />
          <div className="hero-blob hero-blob-2" aria-hidden />
          <div className="hero-blob hero-blob-3" aria-hidden />
        </>
      )}

      <Container className="layout-shell relative z-10 py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: Text ── */}
          <motion.div
            variants={staggerContainer(reduce, 0.08)}
            initial="hidden"
            animate="visible"
          >
            {/* Availability badge */}
            <motion.div variants={staggerItem(reduce)}>
              <span className="status-pill">
                <span className="status-dot" aria-hidden />
                {site.availability}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={staggerItem(reduce)}
              className="mt-6 text-5xl font-extrabold tracking-tight text-[var(--text)] sm:text-6xl lg:text-[5.25rem] leading-[1.02]"
            >
              {site.name.split(" ")[0]}
              <br />
              <span className="gradient-text-animate">
                {site.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={staggerItem(reduce)}
              className="mt-4 text-lg font-semibold text-[var(--text-secondary)]"
            >
              {site.role}
            </motion.p>

            {/* Accent rule */}
            <motion.div variants={staggerItem(reduce)} className="mt-5 section-rule" />

            {/* Summary */}
            <motion.p
              variants={staggerItem(reduce)}
              className="mt-5 max-w-lg text-base leading-relaxed text-[var(--text-secondary)]"
            >
              {site.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={staggerItem(reduce)}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href={site.resume.href} download className="btn-primary focus-ring gap-2">
                <UIIcon name="arrowRight" className="h-4 w-4" />
                {site.resume.label}
              </a>
              <a href="#contact" className="btn-secondary focus-ring">
                Get in touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={staggerItem(reduce)}
              className="mt-4 flex flex-wrap gap-1"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="btn-ghost focus-ring"
                >
                  <UIIcon name={socialIconFor(link.label)} className="h-4 w-4" />
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={staggerItem(reduce)}
              className="mt-8 flex gap-8 border-t border-[var(--border)] pt-6"
            >
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="hero-inline-stat-value">
                    <CountUp to={s.num} suffix={s.suffix} reduce={!!reduce} />
                  </span>
                  <span className="hero-inline-stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Photo + floating badges ── */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="hero-photo-wrap">
              {/* Ambient glow */}
              <div className="hero-photo-glow" aria-hidden />

              {/* Photo frame */}
              <div className="hero-photo-frame">
                <div className="hero-photo-inner">
                  <Image
                    src={site.photo}
                    alt={site.photoAlt}
                    fill
                    className="object-cover object-[center_18%]"
                    sizes="(max-width: 1024px) 260px, 320px"
                    priority
                  />
                </div>
              </div>

              {/* Floating: location */}
              <motion.div
                className="hero-float-card hero-float-bottom"
                initial={reduce ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.45, ease: EASE_OUT }}
              >
                <UIIcon name="location" className="h-3.5 w-3.5 shrink-0 text-[#60A5FA]" />
                <span>{site.location}</span>
              </motion.div>

              {/* Floating: top tech tags */}
              <motion.div
                className="hero-float-card hero-float-top"
                initial={reduce ? {} : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.45, ease: EASE_OUT }}
              >
                {TECH_TAGS.slice(0, 3).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        {!reduce && (
          <motion.div
            className="scroll-hint mx-auto mt-16 w-fit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Scroll
          </motion.div>
        )}
      </Container>
    </section>
  );
}
