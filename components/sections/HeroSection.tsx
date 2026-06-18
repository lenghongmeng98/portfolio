"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { site } from "@/data/site";
import { UIIcon } from "@/components/icons/UIIcon";
import { Container } from "@/components/ui/Container";
import { textHero, textLead } from "@/components/ui/typography";
import { fadeUp } from "@/lib/motion";

export function HeroSection() {
  const reduce = useReducedMotion();
  const [first, ...rest] = site.name.split(" ");

  return (
    <section id="home" className="section border-b border-[var(--border)] pt-8 md:pt-12">
      <Container className="layout-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div {...fadeUp(reduce)}>
            <span className="status-pill">
              <span className="status-dot" aria-hidden />
              {site.availability}
            </span>
            <h1 className={`mt-6 ${textHero}`}>
              {first}
              {rest.length > 0 ? (
                <>
                  <br />
                  <span className="text-accent">{rest.join(" ")}</span>
                </>
              ) : null}
            </h1>
            <p className="mt-4 text-lg tracking-tight text-[var(--text-secondary)]">{site.role}</p>
            <p className={`mt-5 ${textLead}`}>{site.summary}</p>
            <p className="mt-5 flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
              <UIIcon name="location" className="h-4 w-4 shrink-0 text-[var(--accent)]" />
              {site.location}
            </p>
            <motion.div {...fadeUp(reduce, 0.08)} className="mt-9 flex flex-wrap gap-3">
              <a href={site.resume.href} download className="btn-primary focus-ring">
                {site.resume.label}
              </a>
              <a href="#contact" className="btn-secondary focus-ring">
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div {...fadeUp(reduce, 0.06)} className="photo-wrap mx-auto w-full max-w-[22rem] lg:max-w-none">
            <div className="hero-glow" aria-hidden />
            <motion.div
              className="photo-frame"
              whileHover={reduce ? undefined : { y: -3 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
