"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, animate } from "framer-motion";
import Image from "next/image";
import { site, socialLinks } from "@/data/site";
import { UIIcon, socialIconFor } from "@/components/icons/UIIcon";
import { Container } from "@/components/ui/Container";
import { ConstellationCanvas } from "@/components/ui/ConstellationCanvas";
import { staggerContainer, staggerItem, EASE_OUT } from "@/lib/motion";

const HERO_HEADLINE = ["Building Scalable", "Backend Systems"];
const HERO_BIO =
  "Software Engineer and IT Instructor specializing in building scalable backend systems with Java and Spring Boot. Passionate about clean architecture and technical mentorship.";
const TECH_STACK = ["Java", "Spring Boot", "Microservices", "REST APIs"];
const STATS = [
  { label: "Years Exp.", num: 2,  suffix: "+" },
  { label: "Students",  num: 50, suffix: "+" },
  { label: "Projects",  num: 10, suffix: "+" },
];

// Show LinkedIn + Email only — no redundant website link
const SOCIAL_ICONS = socialLinks.filter(
  (l) => !l.label.toLowerCase().includes("website"),
);

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

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-[var(--border)] bg-[var(--bg)]"
    >
      <ConstellationCanvas reduce={!!reduce} />

      <Container className="layout-shell relative z-10 py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ── Left: Text column ── */}
          <motion.div
            variants={staggerContainer(reduce, 0.08)}
            initial="hidden"
            animate="visible"
          >
            {/* Name label */}
            <motion.div variants={staggerItem(reduce)}>
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
                {site.name}
              </span>
            </motion.div>

            {/* Availability badge */}
            <motion.div variants={staggerItem(reduce)} className="mt-3">
              <span className="status-pill">
                <span className="status-dot" aria-hidden />
                {site.availability}
              </span>
            </motion.div>

            {/* H1 headline */}
            <motion.h1
              variants={staggerItem(reduce)}
              className="mt-5 text-[2.5rem] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]"
            >
              <span className="text-[var(--text)]">{HERO_HEADLINE[0]}</span>
              <br />
              <span className="gradient-text-animate">{HERO_HEADLINE[1]}</span>
            </motion.h1>

            {/* Role subtitle */}
            <motion.p
              variants={staggerItem(reduce)}
              className="mt-3 text-[0.8125rem] font-semibold uppercase tracking-widest text-[var(--accent)]"
            >
              {site.role}
            </motion.p>

            {/* Punchy bio */}
            <motion.p
              variants={staggerItem(reduce)}
              className="mt-5 max-w-[42ch] text-base leading-relaxed text-[var(--text-secondary)]"
            >
              {HERO_BIO}
            </motion.p>

            {/* CTAs — primary + ghost outline */}
            <motion.div
              variants={staggerItem(reduce)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={site.resume.href}
                download
                className="btn-primary focus-ring gap-2"
              >
                {/* Download icon */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2" aria-hidden>
                  <path d="M12 15V3M8 11l4 4 4-4M3 19h18"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {site.resume.label}
              </a>
              <a href="#contact" className="btn-secondary focus-ring">
                Get in touch
              </a>
            </motion.div>

            {/* Icon-only social links */}
            <motion.div
              variants={staggerItem(reduce)}
              className="mt-5 flex items-center gap-2"
            >
              {SOCIAL_ICONS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={reduce ? undefined : { y: -2, scale: 1.1 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="focus-ring flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] transition-colors duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <UIIcon name={socialIconFor(link.label)} className="h-[1.0625rem] w-[1.0625rem]" />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats — no divider line */}
            <motion.div
              variants={staggerItem(reduce)}
              className="mt-8 flex gap-8"
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

          {/* ── Right: Photo column ── */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
            className="relative flex flex-col items-center lg:items-end"
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

              {/* Location badge — bottom left */}
              <motion.div
                className="hero-float-card hero-float-bottom"
                initial={reduce ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.45, ease: EASE_OUT }}
              >
                <UIIcon name="location" className="h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />
                <span>{site.location}</span>
              </motion.div>

              {/* Role badge — top right, outside frame */}
              <motion.div
                className="hero-float-card hero-badge-tr"
                initial={reduce ? {} : { opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.45, ease: EASE_OUT }}
              >
                <span className="hero-badge-live-dot" aria-hidden />
                Backend Dev
              </motion.div>
            </div>

            {/* Tech stack pills — below photo, clean & light */}
            <motion.div
              className="mt-5 flex flex-wrap justify-center gap-2"
              initial={reduce ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5, ease: EASE_OUT }}
            >
              {TECH_STACK.map((t) => (
                <span key={t} className="hero-tech-pill">{t}</span>
              ))}
            </motion.div>
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Scroll
          </motion.div>
        )}
      </Container>
    </section>
  );
}
