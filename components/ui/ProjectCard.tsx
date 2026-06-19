"use client";

import { useRef, useState } from "react";
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

const BANNER_GRADIENTS = [
  "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
  "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
  "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
];

const MAX_TAGS = 4;

export function ProjectCard({ project, index }: Props) {
  const reduce = useReducedMotion();
  const num = String(index + 1).padStart(2, "0");
  const visibleStack = project.stack.slice(0, MAX_TAGS);
  const extraCount = project.stack.length - MAX_TAGS;
  const artRef = useRef<HTMLElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!artRef.current || reduce) return;
    const r = artRef.current.getBoundingClientRect();
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const gradient = BANNER_GRADIENTS[index % BANNER_GRADIENTS.length]!;

  return (
    <motion.li {...fadeUp(reduce, index * 0.07)} className="group flex h-full flex-col">
      <article
        ref={artRef}
        onMouseMove={onMouseMove}
        className="gradient-border-card relative flex flex-1 flex-col overflow-hidden p-0"
      >
        {/* Card spotlight */}
        {!reduce && (
          <div
            className="card-spotlight"
            style={{
              background: `radial-gradient(260px circle at ${spot.x}px ${spot.y}px, rgba(37,99,235,0.06), transparent 70%)`,
            }}
            aria-hidden
          />
        )}

        {/* Visual banner */}
        <div
          className="project-banner mx-4 mt-4"
          style={{ background: gradient }}
        >
          <div className="project-banner-grid" aria-hidden />
          <div className="project-banner-shine" aria-hidden />
          <span className="project-banner-num" aria-hidden>{num}</span>
          <div
            className="pointer-events-none absolute left-4 top-3 h-14 w-14 rounded-full opacity-30 blur-2xl"
            style={{ background: "rgba(255,255,255,0.5)" }}
            aria-hidden
          />
          {/* Top-right links in banner */}
          <div className="absolute right-3 top-3 flex items-center gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/35"
            >
              <UIIcon name="externalLink" className="h-3.5 w-3.5" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub source"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/35"
            >
              <UIIcon name="github" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Content — flex-col to push tags + links down */}
        <div className="relative flex flex-1 flex-col p-5">
          {/* Title */}
          <h3 className="font-display text-base font-bold leading-snug tracking-tight text-[var(--text)]">
            {project.title}
          </h3>

          {/* Description — clamped to 3 lines */}
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)]">
            {project.description}
          </p>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Stack tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {visibleStack.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
            {extraCount > 0 && (
              <span className="tag text-[var(--text-tertiary)]">+{extraCount} more</span>
            )}
          </div>

          {/* Footer links */}
          <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
            <span className="font-mono text-[0.68rem] text-[var(--text-tertiary)]">
              {project.stack.length} technologies
            </span>
            <div className="flex items-center gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring link flex items-center gap-1 text-xs font-medium"
              >
                Demo <UIIcon name="externalLink" className="h-3 w-3" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-1 text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
              >
                <UIIcon name="github" className="h-3.5 w-3.5" />
                Code
              </a>
            </div>
          </div>
        </div>

        {/* Hover bottom bar */}
        <div
          className="h-[2px] w-0 transition-all duration-500 group-hover:w-full"
          style={{ background: gradient }}
          aria-hidden
        />
      </article>
    </motion.li>
  );
}
