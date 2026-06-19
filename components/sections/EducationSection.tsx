"use client";

import { motion, useReducedMotion } from "framer-motion";
import { education } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { textBody, textCardTitle } from "@/components/ui/typography";
import { fadeUp } from "@/lib/motion";

export function EducationSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="education" title="Education" overline="Academic Background">
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <div className="timeline-rail" aria-hidden />
          <ol className="space-y-6">
            {education.map((entry, i) => (
              <motion.li
                key={entry.institution + entry.period}
                {...fadeUp(reduce, i * 0.07)}
                className="timeline timeline-item"
              >
                <span className="timeline-dot" aria-hidden />
                <div className={`panel panel-interactive p-6 md:p-7${i === 0 ? " panel-accent" : ""}`}>
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className={textCardTitle}>{entry.degree}</h3>
                      <p className="mt-0.5 text-sm text-[var(--text-secondary)]">
                        {entry.institution} &middot; {entry.location}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-xs text-[var(--text-tertiary)]">{entry.period}</p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {entry.highlights.map((item) => (
                      <li key={item} className={`flex gap-2.5 text-sm ${textBody}`}>
                        <span
                          className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--gradient-accent)" }}
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </SectionShell>
  );
}
