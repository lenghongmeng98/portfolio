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

export function ProjectCard({ project, index }: Props) {
  const reduce = useReducedMotion();
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.li {...fadeUp(reduce, index * 0.06)}>
      <article className="panel panel-interactive flex h-full flex-col p-6 md:p-8">
        <span className="project-index">{num}</span>
        <h3 className={`mt-3 ${textCardTitle}`}>{project.title}</h3>
        <p className={`mt-3 flex-1 ${textBody}`}>{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-5 border-t border-[var(--border)] pt-5">
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="focus-ring link text-sm">
            Live demo
            <UIIcon name="externalLink" className="ml-1 inline h-3.5 w-3.5" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
          >
            Source
          </a>
        </div>
      </article>
    </motion.li>
  );
}
