"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { site, socialLinks } from "@/data/site";
import { UIIcon, socialIconFor } from "@/components/icons/UIIcon";
import { Container } from "@/components/ui/Container";
import { textHero, textLead } from "@/components/ui/typography";
import { staggerContainer, staggerItem, EASE_OUT } from "@/lib/motion";

const TECH_TAGS = ["Java", "Spring Boot", "Microservices", "Blockchain", "AI-Native Dev"];
const STATS = [
  { label: "Experience", value: "2+", unit: "Years" },
  { label: "Students", value: "50+", unit: "Taught" },
  { label: "Projects", value: "10+", unit: "Built" },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 40 });
  const nameParts = site.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

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
      className="hero-saas-bg relative flex min-h-[88vh] items-center overflow-hidden border-b border-[var(--border)]"
      style={{ "--sx": `${spotlight.x}%`, "--sy": `${spotlight.y}%` } as React.CSSProperties}
    >
      {/* Mouse spotlight */}
      <div className="hero-spotlight" aria-hidden />

      {/* Animated blobs */}
      {!reduce && (
        <>
          <div className="hero-blob hero-blob-1" aria-hidden />
          <div className="hero-blob hero-blob-2" aria-hidden />
          <div className="hero-blob hero-blob-3" aria-hidden />
        </>
      )}

      <Container className="layout-narrow relative z-10 py-16 md:py-24">
        <motion.div
          variants={staggerContainer(reduce, 0.08)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Avatar */}
          <motion.div variants={staggerItem(reduce)}>
            <motion.div
              className="hero-avatar mx-auto"
              style={{ width: "10.5rem", height: "10.5rem" }}
              whileHover={reduce ? undefined : { scale: 1.04 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="hero-avatar-glow" aria-hidden />
              <div className="hero-avatar-frame">
                <div className="hero-avatar-inner">
                  <Image
                    src={site.photo}
                    alt={site.photoAlt}
                    fill
                    className="object-cover object-[center_18%]"
                    sizes="180px"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Availability badge */}
          <motion.div variants={staggerItem(reduce)} className="mt-6">
            <span className="status-pill">
              <span className="status-dot" aria-hidden />
              {site.availability}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={staggerItem(reduce)}
            className={`mt-4 ${textHero} leading-[1.04]`}
          >
            {firstName}{" "}
            <span className="gradient-text-animate">{lastName}</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={staggerItem(reduce)}
            className="mt-3 text-xl font-medium text-[var(--text-secondary)]"
          >
            {site.role}
          </motion.p>

          {/* Tech tags */}
          <motion.div
            variants={staggerItem(reduce)}
            className="mt-5 flex flex-wrap justify-center gap-2"
          >
            {TECH_TAGS.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={staggerItem(reduce)}
            className={`mt-6 ${textLead} mx-auto max-w-xl text-center`}
          >
            {site.summary}
          </motion.p>

          {/* Location */}
          <motion.p
            variants={staggerItem(reduce)}
            className="mt-3 flex items-center justify-center gap-1.5 text-sm text-[var(--text-tertiary)]"
          >
            <UIIcon name="location" className="h-4 w-4 text-[var(--accent)]" />
            {site.location}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem(reduce)}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <a href={site.resume.href} download className="btn-primary focus-ring gap-2">
              <UIIcon name="arrowRight" className="h-4 w-4" />
              {site.resume.label}
            </a>
            <a href="#contact" className="btn-secondary focus-ring">
              Get in touch
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            variants={staggerItem(reduce)}
            className="mt-4 flex flex-wrap justify-center gap-1"
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

          {/* Stat cards */}
          <motion.div
            variants={staggerItem(reduce)}
            className="mt-10 flex w-full max-w-xs justify-center gap-3 sm:max-w-sm"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-card"
                initial={reduce ? {} : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.07, ease: EASE_OUT }}
              >
                <p className="stat-card-value">{s.value}</p>
                <p className="stat-card-label">{s.unit}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll hint */}
          {!reduce && (
            <motion.div
              className="scroll-hint mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Scroll
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
