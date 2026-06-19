"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { contact, site, socialLinks } from "@/data/site";
import { socialIconFor, UIIcon } from "@/components/icons/UIIcon";
import type { UIIconName } from "@/components/icons/UIIcon";
import { SectionShell } from "@/components/ui/SectionShell";
import { blurFadeUp, springUp } from "@/lib/motion";

const METHODS = [
  {
    icon: "mail" as UIIconName,
    accent: "#2563EB",
    label: "Email",
    value: "lenghongmeng98@gmail.com",
    href: `mailto:${contact.email}`,
    action: "Send message",
    external: false,
  },
  {
    icon: "linkedin" as UIIconName,
    accent: "#0A66C2",
    label: "LinkedIn",
    value: "leng-hongmeng",
    href: "https://www.linkedin.com/in/leng-hongmeng",
    action: "View profile",
    external: true,
  },
  {
    icon: "globe" as UIIconName,
    accent: "#7C3AED",
    label: "Website",
    value: "lenghongmeng.site",
    href: site.url,
    action: "Visit site",
    external: true,
  },
  {
    icon: "phone" as UIIconName,
    accent: "#10B981",
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    action: "Call",
    external: false,
  },
] as const;

function MethodCard({
  method,
  index,
  reduce,
}: {
  method: typeof METHODS[number];
  index: number;
  reduce: boolean | null;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);
  const [spot, setSpot] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || reduce) return;
    const r = ref.current.getBoundingClientRect();
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.a
      ref={ref}
      {...springUp(reduce, index * 0.07)}
      href={method.href}
      target={method.external ? "_blank" : undefined}
      rel={method.external ? "noopener noreferrer" : undefined}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="contact-method-card group focus-ring"
      style={{ "--m-accent": method.accent } as React.CSSProperties}
    >
      {/* Spotlight */}
      {!reduce && hovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background: `radial-gradient(240px circle at ${spot.x}px ${spot.y}px, ${method.accent}18, transparent 70%)`,
          }}
          aria-hidden
        />
      )}

      {/* Left accent bar */}
      <div
        className="absolute inset-y-0 left-0 w-[3px] rounded-l-[inherit] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{ background: method.accent }}
        aria-hidden
      />

      <div className="relative flex items-center gap-4">
        {/* Icon badge */}
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
          style={{ background: method.accent + "18", color: method.accent }}
        >
          <UIIcon name={method.icon} className="h-5 w-5" />
        </span>

        {/* Label + value */}
        <div className="min-w-0 flex-1">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.09em] text-[var(--text-tertiary)]">
            {method.label}
          </p>
          <p className="truncate text-sm font-semibold text-[var(--text)]">
            {method.value}
          </p>
        </div>

        {/* Action arrow */}
        <span
          className="flex items-center gap-1 whitespace-nowrap text-xs font-medium transition-all duration-200"
          style={{ color: method.accent }}
        >
          <span className="hidden opacity-0 transition-all duration-200 group-hover:opacity-100 sm:inline">
            {method.action}
          </span>
          <UIIcon
            name="arrowRight"
            className="h-3.5 w-3.5 translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </motion.a>
  );
}

export function ContactSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell
      id="contact"
      title="Get in Touch"
      overline="Contact"
    >
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">

        {/* ── Left: CTA copy ── */}
        <motion.div {...blurFadeUp(reduce)} className="space-y-7">
          {/* Status */}
          <span className="status-pill inline-flex">
            <span className="status-dot" aria-hidden />
            {site.availability}
          </span>

          {/* Headline */}
          <div>
            <h3 className="font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
              Let&apos;s build<br />
              <span className="gradient-text-animate">something great.</span>
            </h3>
            <p className="mt-5 max-w-[42ch] text-[1.0625rem] leading-relaxed text-[var(--text-secondary)]">
              I&apos;m open to software engineering roles, IT instructor positions,
              and collaborative projects. Drop me a message — I usually reply within a day.
            </p>
          </div>

          {/* Primary contact info */}
          <div className="space-y-2">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-2 text-[var(--accent)] transition-colors hover:text-[var(--accent-dark,var(--accent))]"
            >
              <UIIcon name="mail" className="h-4 w-4 shrink-0" />
              <span className="text-base font-semibold underline-offset-4 group-hover:underline">
                {contact.email}
              </span>
            </a>
            <p className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
              <UIIcon name="phone" className="h-3.5 w-3.5 shrink-0" />
              {site.phone}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${contact.email}`} className="btn-primary focus-ring gap-2">
              <UIIcon name="send" className="h-4 w-4" />
              Send email
            </a>
            <a href={site.resume.href} download className="btn-secondary focus-ring gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" aria-hidden>
                <path d="M12 15V3M8 11l4 4 4-4M3 19h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {site.resume.label}
            </a>
          </div>

          {/* Social links */}
          <nav aria-label="Social profiles" className="flex flex-wrap gap-2 pt-1">
            {socialLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                whileHover={reduce ? undefined : { y: -2 }}
                transition={{ duration: 0.15 }}
                className="focus-ring flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <UIIcon name={socialIconFor(link.label)} className="h-3.5 w-3.5" />
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>

        {/* ── Right: Contact method cards ── */}
        <div className="space-y-3">
          {METHODS.map((method, i) => (
            <MethodCard key={method.label} method={method} index={i} reduce={reduce} />
          ))}
        </div>

      </div>
    </SectionShell>
  );
}
