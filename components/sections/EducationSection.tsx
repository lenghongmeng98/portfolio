"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { education } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { springUp } from "@/lib/motion";

const CARD_META = [
  {
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)",
    tag: "Degree",
    tagColor: "#818cf8",
  },
  {
    gradient: "linear-gradient(135deg, #047857 0%, #0369a1 100%)",
    tag: "Intensive",
    tagColor: "#34d399",
  },
  {
    gradient: "linear-gradient(135deg, #b45309 0%, #b91c1c 100%)",
    tag: "Foundation",
    tagColor: "#fbbf24",
  },
] as const;

function getMonogram(name: string) {
  return name
    .split(/[\s(]/)[0]!
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);
}

function EduCard({
  entry,
  index,
  reduce,
}: {
  entry: typeof education[number];
  index: number;
  reduce: boolean | null;
}) {
  const meta = CARD_META[index] ?? CARD_META[0]!;
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || reduce) return;
    const r = ref.current.getBoundingClientRect();
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.li
      {...springUp(reduce, index * 0.1)}
      className="group flex list-none flex-col"
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        className="edu-card relative flex flex-1 flex-col overflow-hidden"
      >
        {/* Mouse spotlight */}
        {!reduce && (
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(280px circle at ${spot.x}px ${spot.y}px, rgba(37,99,235,0.055), transparent 70%)`,
            }}
            aria-hidden
          />
        )}

        {/* Gradient banner */}
        <div className="edu-banner" style={{ background: meta.gradient }}>
          {/* Grid overlay */}
          <div className="edu-banner-grid" aria-hidden />
          {/* Shine */}
          <div className="project-banner-shine" aria-hidden />
          {/* Glow orb */}
          <div
            className="pointer-events-none absolute left-4 top-3 h-12 w-12 rounded-full opacity-25 blur-xl"
            style={{ background: "rgba(255,255,255,0.7)" }}
            aria-hidden
          />
          {/* Monogram watermark */}
          <span className="edu-banner-mono" aria-hidden>
            {getMonogram(entry.institution)}
          </span>
          {/* Type tag — top left */}
          <span
            className="absolute left-4 top-4 rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em]"
            style={{
              background: "rgba(0,0,0,0.28)",
              color: meta.tagColor,
              backdropFilter: "blur(6px)",
            }}
          >
            {meta.tag}
          </span>
          {/* Period — bottom right */}
          <span className="edu-banner-period">{entry.period}</span>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col p-5">
          {/* Degree */}
          <h3 className="font-display text-[0.9375rem] font-bold leading-snug tracking-tight text-[var(--text)]">
            {entry.degree}
          </h3>

          {/* Institution + location */}
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            {entry.institution}
            <span className="mx-1.5 text-[var(--text-tertiary)]">·</span>
            {entry.location}
          </p>

          {/* Divider */}
          <div className="my-4 h-px bg-[var(--border)]" />

          {/* Highlights */}
          <ul className="flex-1 space-y-2">
            {entry.highlights.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                <span
                  className="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: meta.gradient }}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Hover bottom accent bar */}
        <div
          className="h-[2.5px] w-0 transition-all duration-500 group-hover:w-full"
          style={{ background: meta.gradient }}
          aria-hidden
        />
      </div>
    </motion.li>
  );
}

export function EducationSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="education" title="Education" overline="Academic Background">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {education.map((entry, i) => (
          <EduCard
            key={entry.institution + entry.period}
            entry={entry}
            index={i}
            reduce={reduce}
          />
        ))}
      </ul>
    </SectionShell>
  );
}
