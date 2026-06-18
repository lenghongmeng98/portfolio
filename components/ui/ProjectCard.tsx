"use client";

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

  return (
    <motion.li {...fadeUp(reduce, index * 0.06)} className="group">
      <article className="panel panel-interactive relative flex h-full flex-col overflow-hidden p-6 md:p-8">

        {/* Hover sweep overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "linear-gradient(135deg, var(--accent-muted) 0%, transparent 55%)" }}
          aria-hidden
        />

        {/* Index + stack count */}
        <div className="relative flex items-center justify-between">
          <span className="project-index">{num}</span>
          <span className="text-mono-label">{project.stack.length} technologies</span>
        </div>

        {/* Title */}
        <h3 className={`relative mt-3 ${textCardTitle}`}>{project.title}</h3>

        {/* Description */}
        <p className={`relative mt-3 flex-1 ${textBody}`}>{project.description}</p>

        {/* Stack tags */}
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
            className="focus-ring link flex items-center gap-1.5 text-sm"
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
          <span className="ml-auto flex items-center gap-1 text-sm text-[var(--text-tertiary)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            View
            <UIIcon name="arrowRight" className="h-3.5 w-3.5 text-[var(--accent)]" />
          </span>
        </div>

      </article>
    </motion.li>
  );
}
