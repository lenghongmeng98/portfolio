"use client";

import { motion, useReducedMotion } from "framer-motion";
import { education } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { springUp } from "@/lib/motion";

const CARD_META = [
  {
    tag: "Degree",
    accent: "#059669",
    skills: ["Software Engineering", "Algorithms", "Full-Stack Dev", "OOP", "Data Structures"],
  },
  {
    tag: "Training",
    accent: "#6366F1",
    skills: ["Java", "Spring Boot", "ReactJS", "PostgreSQL", "Hyperledger Fabric", "Docker"],
  },
  {
    tag: "Foundation",
    accent: "#F59E0B",
    skills: ["C", "C++", "Memory Management", "Systems Programming"],
  },
] as const;

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
  const { accent } = meta;

  return (
    <motion.li
      {...springUp(reduce, index * 0.1)}
      className="group flex list-none flex-col"
    >
      <div
        className="relative flex flex-1 flex-col overflow-hidden rounded-2xl bg-[var(--bg-elevated)] transition-all duration-300"
        style={{ boxShadow: "0 0 0 1px rgba(15,23,42,0.07), var(--shadow-sm)" }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.boxShadow = `0 0 0 1px ${accent}35, 0 12px 36px -6px ${accent}20, var(--shadow-md)`;
          el.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.boxShadow = "0 0 0 1px rgba(15,23,42,0.07), var(--shadow-sm)";
          el.style.transform = "translateY(0)";
        }}
      >
        {/* Colored header band */}
        <div
          className="relative overflow-hidden px-6 py-5"
          style={{ background: `${accent}0e` }}
        >
          {/* Accent top line */}
          <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: accent }} />

          {/* Tag */}
          <span
            className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em]"
            style={{ color: accent }}
          >
            {meta.tag}
          </span>

          {/* Degree */}
          <h3 className="mt-2 text-[0.9375rem] font-bold leading-snug tracking-tight text-[var(--text)]">
            {entry.degree}
          </h3>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
          {/* Institution */}
          <p className="text-sm font-semibold" style={{ color: accent }}>
            {entry.institution}
          </p>

          {/* Skill tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {meta.skills.map((s) => (
              <span
                key={s}
                className="rounded-md px-2 py-0.5 text-[0.7rem] font-medium"
                style={{ background: `${accent}12`, color: accent }}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex-1 min-h-[1rem]" />

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
            <span className="text-xs text-[var(--text-tertiary)]">{entry.location}</span>
            <span
              className="font-mono text-[0.65rem] font-semibold"
              style={{ color: accent }}
            >
              {entry.period}
            </span>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export function EducationSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="education" title="Education" overline="Academic Background">
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
