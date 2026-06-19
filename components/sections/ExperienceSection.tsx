"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { textBody, textCardTitle } from "@/components/ui/typography";
import { springUp } from "@/lib/motion";

type Job = typeof experience[number];

function ExpCard({ job, index, reduce }: { job: Job; index: number; reduce: boolean | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const isCurrent = index === 0;

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || reduce) return;
    const r = ref.current.getBoundingClientRect();
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.li {...springUp(reduce, index * 0.09)} className="timeline timeline-item">
      <span className={`timeline-dot${isCurrent ? " timeline-dot-current" : ""}`} aria-hidden />

      <div ref={ref} onMouseMove={onMouseMove} className="spotlight-card exp-card p-6 md:p-7">
        {/* Radial spotlight overlay */}
        {!reduce && (
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background: `radial-gradient(300px circle at ${spot.x}px ${spot.y}px, rgba(37,99,235,0.07), transparent 70%)`,
            }}
            aria-hidden
          />
        )}

        <div className="relative z-10">
          {isCurrent && (
            <span className="badge-current mb-3 inline-flex">
              <span className="badge-current-dot" aria-hidden />
              Current Role
            </span>
          )}

          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className={textCardTitle}>{job.title}</h3>
              <p className="mt-0.5 text-sm text-[var(--text-secondary)]">
                {job.company} &middot; {job.location}
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs text-[var(--text-tertiary)]">{job.period}</span>
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

          <div className="mt-5 flex flex-wrap gap-1.5">
            {job.tech.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export function ExperienceSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="experience" title="Experience" overline="Work History" alt>
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <div className="timeline-rail-premium" aria-hidden />
          <ol className="space-y-6">
            {experience.map((job, i) => (
              <ExpCard key={job.company + job.period} job={job} index={i} reduce={reduce} />
            ))}
          </ol>
        </div>
      </div>
    </SectionShell>
  );
}
