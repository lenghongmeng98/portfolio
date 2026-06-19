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

const MAX_TAGS = 4;

export function ProjectCard({ project, index }: Props) {
  const reduce = useReducedMotion();
  const visibleStack = project.stack.slice(0, MAX_TAGS);
  const extraCount = project.stack.length - MAX_TAGS;

  return (
    <motion.li {...fadeUp(reduce, index * 0.07)} className="group flex h-full flex-col">
      <article className="gradient-border-card relative flex flex-1 flex-col overflow-hidden p-0">
        {/* Content */}
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

      </article>
    </motion.li>
  );
}
