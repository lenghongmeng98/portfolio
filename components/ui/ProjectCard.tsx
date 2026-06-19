"use client";

import { motion, useReducedMotion } from "framer-motion";
import { UIIcon } from "@/components/icons/UIIcon";
import { fadeUp } from "@/lib/motion";

type Project = {
  title: string;
  description: string;
  stack: readonly string[];
  demo: string;
  github: string;
};

type Props = { project: Project; index: number };

const CARD_META = [
  { tag: "Open Source",     accent: "#2563EB" },
  { tag: "Healthcare",      accent: "#059669" },
  { tag: "Infrastructure",  accent: "#EA580C" },
] as const;


export function ProjectCard({ project, index }: Props) {
  const reduce = useReducedMotion();
  const meta = CARD_META[index] ?? CARD_META[0]!;
  const { accent } = meta;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.li {...fadeUp(reduce, index * 0.07)} className="group flex h-full flex-col">
      <div
        className="relative flex flex-1 flex-col overflow-hidden rounded-2xl bg-[var(--bg-elevated)] transition-all duration-300"
        style={{ boxShadow: "0 0 0 1px rgba(15,23,42,0.07), var(--shadow-sm)" }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.boxShadow = `0 0 0 1px ${accent}35, 0 12px 36px -6px ${accent}22, var(--shadow-md)`;
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
          {/* Accent top stripe */}
          <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: accent }} />

          {/* Faded number watermark */}
          <span
            className="pointer-events-none absolute right-4 top-2 select-none font-mono font-black leading-none text-[var(--text)]"
            style={{ fontSize: "4.5rem", opacity: 0.05 }}
            aria-hidden
          >
            {num}
          </span>

          {/* Tag + number row */}
          <div className="relative mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: accent }} aria-hidden />
              <span
                className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em]"
                style={{ color: accent }}
              >
                {meta.tag}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="relative text-[0.9375rem] font-bold leading-snug tracking-tight text-[var(--text)]">
            {project.title}
          </h3>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
          {/* Description */}
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            {project.description}
          </p>

          <div className="flex-1 min-h-[0.75rem]" />

          {/* Footer */}
          <div
            className="mt-5 flex items-center justify-between border-t pt-4"
            style={{ borderColor: `${accent}20` }}
          >
            <span
              className="font-mono text-[0.65rem] font-semibold"
              style={{ color: `${accent}80` }}
            >
            </span>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.72rem] font-semibold transition-all duration-200"
              style={{
                background: `${accent}12`,
                color: accent,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = `${accent}22`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = `${accent}12`;
              }}
            >
              <UIIcon name="github" className="h-3 w-3" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
