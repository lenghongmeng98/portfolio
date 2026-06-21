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
    value: contact.email,
    href: `mailto:${contact.email}`,
    action: "Send message",
    external: false,
  },
  {
    icon: "linkedin" as UIIconName,
    accent: "#0A66C2",
    label: "LinkedIn",
    value: "leng-hongmeng",
    href: "www.linkedin.com/in/leng-hongmeng-07a2a8287",
    action: "View profile",
    external: true,
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
    <SectionShell id="contact" title="Get in Touch" overline="Contact">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">

        {/* ── Left: Headline + CTAs ── */}
        <motion.div {...blurFadeUp(reduce)} className="space-y-8">
          <div>
            <h3 className="font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
              Let&apos;s build<br />
              <span className="gradient-text">something great.</span>
            </h3>
            <blockquote className="mt-5 border-l-2 border-[var(--accent)] pl-4">
              <p className="max-w-[38ch] text-[1.0625rem] italic leading-relaxed text-[var(--text-secondary)]">
                &ldquo;The best way to predict the future is to invent it together.&rdquo;
              </p>
              <cite className="mt-2 block text-sm font-medium not-italic text-[var(--text-tertiary)]">
                — Alan Kay
              </cite>
            </blockquote>
          </div>
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
