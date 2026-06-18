"use client";

import { motion, useReducedMotion } from "framer-motion";
import { contact, site, socialLinks } from "@/data/site";
import { socialIconFor, UIIcon } from "@/components/icons/UIIcon";
import { SectionShell } from "@/components/ui/SectionShell";
import { fadeUp } from "@/lib/motion";

export function ContactSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell
      id="contact"
      title="Get in Touch"
      overline="Contact"
      description="Reach out for roles, teaching opportunities, or collaborations."
    >
      <motion.div {...fadeUp(reduce)} className="mx-auto max-w-xl">
        <div className="gradient-border-card relative overflow-hidden p-8 text-center md:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.08), transparent 65%)",
            }}
            aria-hidden
          />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--text)]">
              Let&apos;s connect
            </h3>
            <p className="mt-3 text-[var(--text-secondary)]">
              Email is the fastest way to reach me.
            </p>
            <a href={`mailto:${contact.email}`} className="focus-ring link mt-6 inline-block text-lg font-medium">
              {contact.email}
            </a>
            <p className="mt-2 text-sm text-[var(--text-tertiary)]">{site.phone}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${contact.email}`} className="btn-primary focus-ring">
                <UIIcon name="mail" className="h-4 w-4" />
                Send email
              </a>
              <a href={site.resume.href} download className="btn-secondary focus-ring">
                {site.resume.label}
              </a>
            </div>
            <nav aria-label="Social profiles" className="mt-8 flex flex-wrap justify-center gap-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  whileHover={reduce ? undefined : { y: -2, scale: 1.04 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="focus-ring btn-ghost rounded-full border border-[var(--border)] !px-4"
                >
                  <UIIcon name={socialIconFor(link.label)} className="h-4 w-4" />
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
