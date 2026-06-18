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

const BANNER_GRADIENTS = [
  "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
  "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
  "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
];

const MAX_TAGS = 5;

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

  return (
    <motion.li {...fadeUp(reduce, index * 0.07)} className="group">
      <article
        ref={artRef}
        onMouseMove={onMouseMove}
        className="gradient-border-card relative overflow-hidden p-0"
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
          className="project-banner mx-4 mt-4 md:mx-6 md:mt-5"
          style={{ background: BANNER_GRADIENTS[index % BANNER_GRADIENTS.length] }}
        >
          <div className="project-banner-grid" aria-hidden />
          <span className="project-banner-num" aria-hidden>{num}</span>
          {/* Blurred orb */}
          <div
            className="pointer-events-none absolute left-4 top-3 h-16 w-16 rounded-full opacity-30 blur-2xl"
            style={{ background: "rgba(255,255,255,0.5)" }}
            aria-hidden
          />
        </div>

        {/* Content */}
        <div className="relative p-4 md:p-6">
          {/* Meta row */}
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs text-[var(--text-tertiary)]">
              {project.stack.length} technologies
            </span>
            <div className="flex items-center gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring link flex items-center gap-1 text-xs font-medium"
              >
                Live demo <UIIcon name="externalLink" className="h-3 w-3" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-1 text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
              >
                <UIIcon name="github" className="h-3.5 w-3.5" />
                Source
              </a>
            </div>
          </div>

          {/* Title */}
          <h3 className={`mt-3 ${textCardTitle}`}>{project.title}</h3>

          {/* Description */}
          <p className={`mt-2 ${textBody}`}>{project.description}</p>

          {/* Stack tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {visibleStack.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
            {extraCount > 0 && <span className="tag">+{extraCount}</span>}
          </div>
        </div>

        {/* Hover bottom bar */}
        <div
          className="h-[2px] w-0 transition-all duration-500 group-hover:w-full"
          style={{ background: BANNER_GRADIENTS[index % BANNER_GRADIENTS.length] }}
          aria-hidden
        />
      </article>
    </motion.li>
  );
}
