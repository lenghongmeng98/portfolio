"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { textBody, textCardTitle } from "@/components/ui/typography";
import { fadeUp } from "@/lib/motion";

export function ExperienceSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="experience" title="Experience" alt>
      <div className="relative">
        <div className="timeline-rail" aria-hidden />
        <ol className="space-y-8">
          {experience.map((job, i) => (
            <motion.li
              key={job.company + job.period}
              {...fadeUp(reduce, i * 0.06)}
              className="timeline timeline-item"
            >
              <span className="timeline-dot" aria-hidden />
              <div className="panel panel-interactive p-6 md:p-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className={textCardTitle}>{job.title}</h3>
                    <p className="mt-1 text-[var(--text-secondary)]">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className="font-mono text-sm text-[var(--text-tertiary)]">{job.period}</p>
                </div>
                <p className={`mt-4 max-w-2xl ${textBody}`}>{job.summary}</p>
                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-[var(--text-secondary)] sm:text-base">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
