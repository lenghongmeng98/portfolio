"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { about, site } from "@/data/site";
import { UIIcon } from "@/components/icons/UIIcon";
import { SectionShell } from "@/components/ui/SectionShell";
import { blurFadeUp, springUp } from "@/lib/motion";

const HIGHLIGHTS = [
  {
    icon: "graduation" as const,
    accent: "#2563EB",
    metric: "B.Sc.",
    label: "Computer Science",
    sub: "Norton University of Cambodia",
  },
  {
    icon: "briefcase" as const,
    accent: "#F59E0B",
    metric: "2+",
    label: "Years Teaching",
    sub: "Java, Spring Boot & Microservices",
  },
  {
    icon: "focus" as const,
    accent: "#7C3AED",
    metric: "API",
    label: "Backend Specialist",
    sub: "Microservices, REST & Cloud",
  },
  {
    icon: "certificate" as const,
    accent: "#10B981",
    metric: "Web3",
    label: "Blockchain Instructor",
    sub: "Hyperledger Fabric & Smart Contracts",
  },
];

const FACTS = [
  { icon: "location" as const,  key: "Based in",  value: site.location },
  { icon: "briefcase" as const, key: "Role",       value: "IT Instructor · Software Engineer" },
  { icon: "focus" as const,     key: "Focus",      value: "Backend · Microservices · APIs" },
  { icon: "mail" as const,      key: "Status",     value: site.availability },
];

function HighlightCard({
  h, index, reduce,
}: {
  h: typeof HIGHLIGHTS[number];
  index: number;
  reduce: boolean | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || reduce) return;
    const r = ref.current.getBoundingClientRect();
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.div
      ref={ref}
      {...springUp(reduce, index * 0.08)}
      onMouseMove={onMouseMove}
      className="about-stat-card"
      style={{ "--card-accent": h.accent } as React.CSSProperties}
    >
      {/* Spotlight */}
      {!reduce && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(220px circle at ${spot.x}px ${spot.y}px, ${h.accent}14, transparent 70%)`,
          }}
          aria-hidden
        />
      )}

      {/* Accent top bar */}
      <div
        className="absolute inset-x-0 top-0 h-[2.5px] rounded-t-[inherit]"
        style={{ background: h.accent }}
        aria-hidden
      />

      <div className="relative">
        {/* Icon badge */}
        <span
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: h.accent + "18", color: h.accent }}
          aria-hidden
        >
          <UIIcon name={h.icon} className="h-5 w-5" />
        </span>

        {/* Metric */}
        <p
          className="mt-3 font-display text-2xl font-extrabold leading-none tracking-tight"
          style={{ color: h.accent }}
        >
          {h.metric}
        </p>

        {/* Label + sub */}
        <p className="mt-1.5 text-sm font-semibold text-[var(--text)]">{h.label}</p>
        <p className="mt-0.5 text-xs leading-snug text-[var(--text-tertiary)]">{h.sub}</p>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="about" title="About Me" overline="Background">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">

        {/* ── Left: Bio + facts ── */}
        <motion.div {...blurFadeUp(reduce)} className="space-y-8">
          {/* Decorative quote + bio */}
          <div className="relative pl-5">
            <span
              className="pointer-events-none absolute -top-3 left-0 font-display text-5xl font-black leading-none text-[var(--accent)] opacity-25 select-none"
              aria-hidden
            >
              "
            </span>
            <p className="text-[1.0625rem] leading-[1.8] text-[var(--text-secondary)]">
              {about.bio}
            </p>
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3">
            <a href={site.resume.href} download className="btn-primary focus-ring gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" aria-hidden>
                <path d="M12 15V3M8 11l4 4 4-4M3 19h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {site.resume.label}
            </a>
            <a href="#contact" className="btn-secondary focus-ring">Get in touch</a>
          </div>

          {/* Quick facts */}
          <div className="divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] overflow-hidden">
            {FACTS.map((f) => (
              <div key={f.key} className="flex items-start gap-3 px-5 py-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--accent-muted)] text-[var(--accent)]">
                  <UIIcon name={f.icon} className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.09em] text-[var(--text-tertiary)]">
                    {f.key}
                  </span>
                  <span className="block text-sm font-medium text-[var(--text)]">
                    {f.value}
                    {f.key === "Status" && (
                      <span className="ml-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 align-middle" />
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Stat cards 2×2 ── */}
        <div className="grid grid-cols-2 gap-4">
          {HIGHLIGHTS.map((h, i) => (
            <HighlightCard key={h.label} h={h} index={i} reduce={reduce} />
          ))}
        </div>

      </div>
    </SectionShell>
  );
}
