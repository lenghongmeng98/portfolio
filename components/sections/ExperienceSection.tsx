"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { textBody, textCardTitle } from "@/components/ui/typography";
import { fadeUp } from "@/lib/motion";

export function ExperienceSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="experience" title="Experience" overline="Work History" alt>
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <div className="timeline-rail" aria-hidden />
          <ol className="space-y-6">
            {experience.map((job, i) => (
              <motion.li
                key={job.company + job.period}
                {...fadeUp(reduce, i * 0.07)}
                className="timeline timeline-item"
              >
                <span
                  className={`timeline-dot${i === 0 ? " timeline-dot-current" : ""}`}
                  aria-hidden
                />
                <div className={`panel panel-interactive exp-card p-6 md:p-7${i === 0 ? " panel-accent" : ""}`}>
                  {i === 0 && (
                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-muted)] px-2.5 py-1 text-xs font-semibold text-[var(--accent)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
                      Current
                    </span>
                  )}
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className={textCardTitle}>{job.title}</h3>
                      <p className="mt-0.5 text-sm text-[var(--text-secondary)]">
                        {job.company} &middot; {job.location}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-xs text-[var(--text-tertiary)]">{job.period}</p>
                  </div>
                  <p className={`mt-4 ${textBody}`}>{job.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-[var(--text-secondary)]">
                        <span
                          className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--gradient-accent)" }}
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tech.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </SectionShell>
  );
}
