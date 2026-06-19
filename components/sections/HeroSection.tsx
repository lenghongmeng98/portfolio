"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { site, socialLinks } from "@/data/site";
import { UIIcon, socialIconFor } from "@/components/icons/UIIcon";
import { Container } from "@/components/ui/Container";
import { ConstellationCanvas } from "@/components/ui/ConstellationCanvas";
import { staggerContainer, staggerItem, EASE_OUT } from "@/lib/motion";

const HERO_BIO =
  "Software Engineer and IT Instructor specializing in scalable backend systems with Java and Spring Boot. Passionate about clean architecture and technical mentorship.";
const TECH_STACK = ["Java", "Spring Boot", "Microservices", "REST APIs", "Docker"];

const SOCIAL_ICONS = socialLinks.filter(
  (l) => !l.label.toLowerCase().includes("website"),
);


export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex items-center border-b border-[var(--border)] bg-[var(--bg)] py-20 md:py-28"
      style={{ minHeight: "92vh" }}
    >
      <ConstellationCanvas reduce={!!reduce} />

      <Container className="layout-shell relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ── Left: Text ── */}
          <motion.div
            variants={staggerContainer(reduce, 0.08)}
            initial="hidden"
            animate="visible"
          >
            {/* Name */}
            <motion.h1
              variants={staggerItem(reduce)}
              className="mt-6 font-extrabold tracking-[-0.035em] text-[var(--text)]"
              style={{ fontSize: "clamp(2.8rem, 8vw, 5rem)", lineHeight: 0.95 }}
            >
              Leng<br />
              <span className="gradient-text">Hongmeng</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={staggerItem(reduce)}
              className="mt-5 text-[0.8rem] font-semibold uppercase tracking-[0.13em] text-[var(--accent)]"
            >
              {site.role}
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={staggerItem(reduce)}
              className="mt-3 max-w-[44ch] text-[0.9375rem] leading-[1.75] text-[var(--text-secondary)]"
            >
              {HERO_BIO}
            </motion.p>

            {/* Tech tags */}
            <motion.div
              variants={staggerItem(reduce)}
              className="mt-5 flex flex-wrap gap-1.5"
            >
              {TECH_STACK.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={staggerItem(reduce)}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href={site.resume.href} download className="btn-primary focus-ring gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2" aria-hidden>
                  <path d="M12 15V3M8 11l4 4 4-4M3 19h18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {site.resume.label}
              </a>
              <a href="#contact" className="btn-secondary focus-ring">Get in touch</a>
            </motion.div>

            {/* Social + location */}
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
                  whileHover={reduce ? undefined : { y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <UIIcon name={socialIconFor(link.label)} className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>

          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: EASE_OUT }}
            className="flex justify-center lg:justify-end"
          >
            {/* Wrapper gives space for the floating shapes */}
            <div style={{ position: "relative", padding: "44px 52px 44px 44px", flexShrink: 0 }}>

              {/* Dashed ring — slightly larger than the circle */}
              <div
                style={{
                  position: "absolute",
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 284, height: 284,
                  borderRadius: "50%",
                  border: "2px dashed rgba(37,99,235,0.22)",
                  pointerEvents: "none",
                }}
                aria-hidden
              />

              {/* Circle photo */}
              <div
                style={{
                  position: "relative",
                  width: 256,
                  height: 256,
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "var(--bg-elevated)",
                  boxShadow: "0 8px 40px rgba(37,99,235,0.14), 0 2px 8px rgba(0,0,0,0.06)",
                  zIndex: 1,
                }}
              >
                <Image
                  src={site.photo}
                  alt={site.photoAlt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="256px"
                  priority
                />
              </div>

              {/* Floating shape: violet square — top left */}
              <motion.div
                initial={reduce ? {} : { opacity: 0, scale: 0.6, rotate: 8 }}
                animate={{ opacity: 1, scale: 1, rotate: 18 }}
                transition={{ delay: 0.6, duration: 0.5, ease: EASE_OUT }}
                style={{
                  position: "absolute",
                  top: 8, left: 8,
                  width: 44, height: 44,
                  borderRadius: 10,
                  background: "#7C3AED",
                  zIndex: 2,
                }}
                aria-hidden
              />

              {/* Floating shape: cyan square — right */}
              <motion.div
                initial={reduce ? {} : { opacity: 0, scale: 0.6, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -12 }}
                transition={{ delay: 0.75, duration: 0.5, ease: EASE_OUT }}
                style={{
                  position: "absolute",
                  top: "42%", right: 6,
                  width: 26, height: 26,
                  borderRadius: 7,
                  background: "#06B6D4",
                  zIndex: 2,
                }}
                aria-hidden
              />

              {/* Floating shape: small blue dot — bottom left */}
              <motion.div
                initial={reduce ? {} : { opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4, ease: EASE_OUT }}
                style={{
                  position: "absolute",
                  bottom: 24, left: 18,
                  width: 16, height: 16,
                  borderRadius: "50%",
                  background: "#2563EB",
                  opacity: 0.55,
                  zIndex: 2,
                }}
                aria-hidden
              />
            </div>
          </motion.div>

        </div>

        {/* Scroll hint */}
        {!reduce && (
          <motion.div
            className="scroll-hint mx-auto mt-16 w-fit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
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
