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
  { label: "Experience", value: "2+ Yrs" },
  { label: "Students", value: "50+" },
  { label: "Projects", value: "10+" },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 30 });
  const nameParts = site.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || reduce) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setSpotlight({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="section relative overflow-hidden border-b border-[var(--border)] py-20 md:py-28"
      style={{ "--sx": `${spotlight.x}%`, "--sy": `${spotlight.y}%` } as React.CSSProperties}
    >
      {/* Spotlight */}
      <div className="hero-spotlight" aria-hidden />

      {/* Floating blobs */}
      {!reduce && (
        <>
          <div className="hero-blob hero-blob-1" aria-hidden />
          <div className="hero-blob hero-blob-2" aria-hidden />
          <div className="hero-blob hero-blob-3" aria-hidden />
        </>
      )}

      <Container className="layout-narrow relative z-10">
        <motion.div
          variants={staggerContainer(reduce, 0.08)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Avatar */}
          <motion.div variants={staggerItem(reduce)}>
            <motion.div
              className="hero-avatar"
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
                    sizes="160px"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Availability badge */}
          <motion.div variants={staggerItem(reduce)} className="mt-5">
            <span className="status-pill">
              <span className="status-dot" aria-hidden />
              {site.availability}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={staggerItem(reduce)} className={`mt-4 ${textHero}`}>
            {firstName}{" "}
            <span className="gradient-text-animate">{lastName}</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={staggerItem(reduce)}
            className="mt-3 text-lg font-medium tracking-tight text-[var(--text-secondary)]"
          >
            {site.role}
          </motion.p>

          {/* Tech tags */}
          <motion.div
            variants={staggerItem(reduce)}
            className="mt-4 flex flex-wrap justify-center gap-2"
          >
            {TECH_TAGS.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={staggerItem(reduce)}
            className={`mt-6 max-w-xl ${textLead} text-center`}
          >
            {site.summary}
          </motion.p>

          {/* Location */}
          <motion.p
            variants={staggerItem(reduce)}
            className="mt-3 flex items-center gap-1.5 text-sm text-[var(--text-tertiary)]"
          >
            <UIIcon name="location" className="h-4 w-4 shrink-0 text-[var(--accent)]" />
            {site.location}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={staggerItem(reduce)}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <a href={site.resume.href} download className="btn-primary focus-ring">
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
            className="mt-4 flex flex-wrap justify-center gap-1"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="btn-ghost focus-ring"
              >
                <UIIcon name={socialIconFor(link.label)} className="h-4 w-4" />
                <span className="text-sm">{link.label}</span>
              </a>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={staggerItem(reduce)}
            className="mt-10 flex w-full max-w-sm justify-center gap-3"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={reduce ? {} : { opacity: 0, scale: 0.82 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.38, delay: 0.7 + i * 0.07, ease: EASE_OUT }}
                className="glass-card hero-stat flex-1"
              >
                <p className="text-mono-label">{s.label}</p>
                <p className="mt-1 text-base font-bold text-[var(--text)]">{s.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
