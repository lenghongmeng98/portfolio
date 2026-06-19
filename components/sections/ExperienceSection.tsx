"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { springUp } from "@/lib/motion";

type Job = typeof experience[number];

const JOB_ACCENT = ["#2563EB", "#10B981", "#F59E0B"] as const;

function ExpCard({
  job,
  index,
  reduce,
}: {
  job: Job;
  index: number;
  reduce: boolean | null;
}) {
  const accent = JOB_ACCENT[index] ?? JOB_ACCENT[0];
  const num = String(index + 1).padStart(2, "0");
  const isCurrent = index === 0;

  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || reduce) return;
    const r = ref.current.getBoundingClientRect();
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.li
      {...springUp(reduce, index * 0.1)}
      className="exp-num-card group list-none"
      style={{ "--e-accent": accent } as React.CSSProperties}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative h-full overflow-hidden rounded-[inherit]"
      >
        {/* Mouse spotlight */}
        {!reduce && hovered && (
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background: `radial-gradient(380px circle at ${spot.x}px ${spot.y}px, ${accent}0d, transparent 65%)`,
            }}
            aria-hidden
          />
        )}

        {/* Left accent bar */}
        <div
          className="absolute inset-y-0 left-0 w-1 rounded-l-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `linear-gradient(to bottom, ${accent}, ${accent}60)` }}
          aria-hidden
        />

        <div className="relative z-10 p-7 md:p-8">
          {/* Number row */}
          <div className="mb-5 flex items-center gap-4">
            <span
              className="exp-num font-mono"
              style={{ color: accent }}
              aria-hidden
            >
              {num}
            </span>
            <div
              className="h-px flex-1 rounded-full"
              style={{
                background: `linear-gradient(to right, ${accent}50, transparent)`,
              }}
              aria-hidden
            />
            {isCurrent && (
              <span className="badge-current shrink-0 inline-flex">
                <span className="badge-current-dot" aria-hidden />
                Current Role
              </span>
            )}
          </div>

          {/* Title + period */}
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="font-display text-xl font-bold tracking-tight text-[var(--text)]">
              {job.title}
            </h3>
            <span
              className="shrink-0 self-start rounded-full border px-3 py-0.5 font-mono text-[0.68rem] font-medium"
              style={{
                color: accent,
                borderColor: accent + "38",
                background: accent + "0e",
              }}
            >
              {job.period}
            </span>
          </div>

          {/* Company */}
          <p className="mt-1.5 text-sm font-medium" style={{ color: accent }}>
            {job.company}
            <span className="mx-1.5 text-[var(--text-tertiary)]">·</span>
            <span className="font-normal text-[var(--text-secondary)]">{job.location}</span>
          </p>

          {/* Divider */}
          <div className="my-5 h-px bg-[var(--border)]" />

          {/* Summary */}
          <p className="text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
            {job.summary}
          </p>

          {/* Highlights or structured courses */}
          {'courses' in job ? (
            <div className="mt-4 space-y-4">
              {job.courses.map((course) => (
                <div key={course.name}>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-sm font-semibold text-[var(--text)]">
                      {course.name}:
                    </span>
                    <span className="text-xs text-[var(--text-tertiary)]">
                      ({course.period})
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1.5 pl-1">
                    {course.items.map((item) => (
                      <li key={item.label} className="flex gap-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                        <span
                          className="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full opacity-60"
                          style={{ background: accent }}
                          aria-hidden
                        />
                        <span>
                          <span className="font-semibold text-[var(--text)]">{item.label}:</span>{" "}
                          {item.content}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="mt-4 space-y-2.5">
              {job.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  <span
                    className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: accent }}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </motion.li>
  );
}

export function ExperienceSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="experience" title="Experiences" overline="Work History" alt>
      <ol className="space-y-5">
        {experience.map((job, i) => (
          <ExpCard
            key={job.company + job.period}
            job={job}
            index={i}
            reduce={reduce}
          />
        ))}
      </ol>
    </SectionShell>
  );
}
