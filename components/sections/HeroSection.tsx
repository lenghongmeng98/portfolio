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
      className="section relative overflow-hidden border-b border-[var(--border)] pt-8 md:pt-14"
      style={{ "--sx": `${spotlight.x}%`, "--sy": `${spotlight.y}%` } as React.CSSProperties}
    >
      {/* Mouse spotlight */}
      <div className="hero-spotlight" aria-hidden />

      {/* Floating gradient blobs */}
      {!reduce && (
        <>
          <div className="hero-blob hero-blob-1" aria-hidden />
          <div className="hero-blob hero-blob-2" aria-hidden />
          <div className="hero-blob hero-blob-3" aria-hidden />
        </>
      )}

      <Container className="layout-shell relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* Left: Content stagger */}
          <motion.div
            variants={staggerContainer(reduce, 0.09)}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem(reduce)}>
              <span className="status-pill">
                <span className="status-dot" aria-hidden />
                {site.availability}
              </span>
            </motion.div>

            <motion.h1 variants={staggerItem(reduce)} className={`mt-6 ${textHero}`}>
              {firstName}
              <br />
              <span className="gradient-text-animate">{lastName}</span>
            </motion.h1>

            <motion.p variants={staggerItem(reduce)} className="mt-3 text-lg font-medium tracking-tight text-[var(--text-secondary)]">
              {site.role}
            </motion.p>

            <motion.div variants={staggerItem(reduce)} className="mt-4 flex flex-wrap gap-2">
              {TECH_TAGS.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </motion.div>

            <motion.p variants={staggerItem(reduce)} className={`mt-5 ${textLead}`}>
              {site.summary}
            </motion.p>

            <motion.p variants={staggerItem(reduce)} className="mt-4 flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
              <UIIcon name="location" className="h-4 w-4 shrink-0 text-[var(--accent)]" />
              {site.location}
            </motion.p>

            <motion.div variants={staggerItem(reduce)} className="mt-8 flex flex-wrap gap-3">
              <a href={site.resume.href} download className="btn-primary focus-ring">
                <UIIcon name="arrowRight" className="h-4 w-4" />
                {site.resume.label}
              </a>
              <a href="#contact" className="btn-secondary focus-ring">
                Get in touch
              </a>
            </motion.div>

            <motion.div variants={staggerItem(reduce)} className="mt-5 flex flex-wrap gap-1">
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
          </motion.div>

          {/* Right: Photo + Stats */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE_OUT }}
            className="mx-auto w-full max-w-[20rem] lg:max-w-none"
          >
            <div className="photo-wrap">
              <div className="hero-glow" aria-hidden />
              <motion.div
                className="photo-frame"
                whileHover={reduce ? undefined : { y: -6, scale: 1.015 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="photo-frame-inner relative aspect-[4/5]">
                  <Image
                    src={site.photo}
                    alt={site.photoAlt}
                    fill
                    className="object-cover object-[center_18%]"
                    sizes="(max-width: 1024px) 80vw, 400px"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.62, ease: EASE_OUT }}
              className="mt-4 flex gap-2"
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={reduce ? {} : { opacity: 0, scale: 0.82 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.68 + i * 0.07, ease: EASE_OUT }}
                  className="glass-card hero-stat"
                >
                  <p className="text-mono-label">{s.label}</p>
                  <p className="mt-1 text-base font-bold text-[var(--text)]">{s.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
