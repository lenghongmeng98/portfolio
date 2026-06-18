"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { site, socialLinks } from "@/data/site";
import { UIIcon, socialIconFor } from "@/components/icons/UIIcon";
import { Container } from "@/components/ui/Container";
import { textHero, textLead } from "@/components/ui/typography";
import { fadeUp } from "@/lib/motion";

const TECH_TAGS = ["Java", "Spring Boot", "Microservices", "Blockchain", "AI-Native Dev"];

const STATS = [
  { label: "Experience", value: "2+ Yrs" },
  { label: "Students", value: "50+" },
  { label: "Projects", value: "10+" },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const nameParts = site.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <section id="home" className="section border-b border-[var(--border)] pt-8 md:pt-14">
      <Container className="layout-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          <motion.div {...fadeUp(reduce)}>
            <span className="status-pill">
              <span className="status-dot" aria-hidden />
              {site.availability}
            </span>

            <h1 className={`mt-6 ${textHero}`}>
              {firstName}
              <br />
              <span className="gradient-text">{lastName}</span>
            </h1>

            <p className="mt-3 text-lg font-medium tracking-tight text-[var(--text-secondary)]">
              {site.role}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {TECH_TAGS.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <p className={`mt-5 ${textLead}`}>{site.summary}</p>

            <p className="mt-4 flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
              <UIIcon name="location" className="h-4 w-4 shrink-0 text-[var(--accent)]" />
              {site.location}
            </p>

            <motion.div {...fadeUp(reduce, 0.08)} className="mt-8 flex flex-wrap gap-3">
              <a href={site.resume.href} download className="btn-primary focus-ring">
                <UIIcon name="arrowRight" className="h-4 w-4" />
                {site.resume.label}
              </a>
              <a href="#contact" className="btn-secondary focus-ring">
                Get in touch
              </a>
            </motion.div>

            <motion.div {...fadeUp(reduce, 0.12)} className="mt-5 flex flex-wrap gap-1">
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

          <motion.div {...fadeUp(reduce, 0.06)} className="mx-auto w-full max-w-[20rem] lg:max-w-none">
            <div className="photo-wrap">
              <div className="hero-glow" aria-hidden />
              <motion.div
                className="photo-frame"
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
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

            <motion.div {...fadeUp(reduce, 0.16)} className="mt-4 flex gap-2">
              {STATS.map((s) => (
                <div key={s.label} className="hero-stat">
                  <p className="text-mono-label">{s.label}</p>
                  <p className="mt-1 text-base font-bold text-[var(--text)]">{s.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
