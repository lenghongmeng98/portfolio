"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { UIIcon } from "@/components/icons/UIIcon";
import { textBody, textCardTitle } from "@/components/ui/typography";
import { fadeUp } from "@/lib/motion";

type Project = {
  title: string;
  description: string;
  stack: readonly string[];
  demo: string;
  github: string;
};

type Props = { project: Project; index: number };

const MAX_TAGS = 4;

export function ProjectCard({ project, index }: Props) {
  const reduce = useReducedMotion();
  const num = String(index + 1).padStart(2, "0");
  const visibleStack = project.stack.slice(0, MAX_TAGS);
  const extraCount = project.stack.length - MAX_TAGS;
  const artRef = useRef<HTMLElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!artRef.current || reduce) return;
    const rect = artRef.current.getBoundingClientRect();
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.li {...fadeUp(reduce, index * 0.07)} className="group">
      <article
        ref={artRef}
        onMouseMove={handleMouseMove}
        className="gradient-border-card relative flex h-full flex-col overflow-hidden p-6 md:p-8"
      >
        {/* Mouse spotlight */}
        {!reduce && (
          <div
            className="card-spotlight"
            style={{
              background: `radial-gradient(220px circle at ${spot.x}px ${spot.y}px, rgba(37,99,235,0.07), transparent 68%)`,
            }}
            aria-hidden
          />
        )}

        {/* Index + tech count */}
        <div className="relative flex items-center justify-between">
          <span className="project-index">{num}</span>
          <span className="text-mono-label">{project.stack.length} technologies</span>
        </div>

        {/* Title */}
        <h3 className={`relative mt-3 ${textCardTitle}`}>{project.title}</h3>

        {/* Description */}
        <p className={`relative mt-3 flex-1 ${textBody}`}>{project.description}</p>

        {/* Stack */}
        <div className="relative mt-5 flex flex-wrap gap-2">
          {visibleStack.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
          {extraCount > 0 && (
            <span className="tag">+{extraCount} more</span>
          )}
        </div>

        {/* Links */}
        <div className="relative mt-6 flex items-center gap-5 border-t border-[var(--border)] pt-5">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring link flex items-center gap-1.5 text-sm font-medium"
          >
            Live demo
            <UIIcon name="externalLink" className="h-3.5 w-3.5" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-1.5 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
          >
            <UIIcon name="github" className="h-3.5 w-3.5" />
            Source
          </a>
          <span className="ml-auto flex items-center gap-1 text-sm text-[var(--text-tertiary)] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
            View
            <UIIcon name="arrowRight" className="h-3.5 w-3.5 text-[var(--accent)]" />
          </span>
        </div>
      </article>
    </motion.li>
  );
}
