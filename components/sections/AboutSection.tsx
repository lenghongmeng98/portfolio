"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/data/site";
import { UIIcon } from "@/components/icons/UIIcon";
import { SectionShell } from "@/components/ui/SectionShell";
import { blurFadeUp, springUp } from "@/lib/motion";

type UIIconName = Parameters<typeof UIIcon>[0]["name"];

const TRAITS: { icon: UIIconName; accent: string; title: string; sub: string }[] = [
  {
    icon: "graduation",
    accent: "#2563EB",
    title: "Bachelor's Degree of Software Development",
    sub: "Norton University of Cambodia",
  },
  {
    icon: "briefcase",
    accent: "#F59E0B",
    title: "2+ Years IT Instructor",
    sub: "KSHRD · Java, Spring Boot & Cloud",
  },
  {
    icon: "code",
    accent: "#2563EB",
    title: "4+ Years Software Development",
    sub: "Full-Stack · Backend · System Design",
  },
  {
    icon: "focus",
    accent: "#7C3AED",
    title: "Backend Specialist",
    sub: "Microservices · REST APIs · Docker",
  },
  {
    icon: "certificate",
    accent: "#10B981",
    title: "Blockchain Instructor",
    sub: "Hyperledger Fabric & Smart Contracts",
  },
];

export function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="about" title="About Me" overline="Background">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">

        {/* ── Left: Bio + CTAs ── */}
        <motion.div {...blurFadeUp(reduce)} className="space-y-7">
          <blockquote className="relative rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
            {/* Large quote icon */}
            <svg
              width="36" height="36" viewBox="0 0 24 24" fill="currentColor"
              className="mb-3 text-[var(--accent)] opacity-20"
              aria-hidden
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-[1.0625rem] leading-[1.85] text-[var(--text-secondary)]">
              {about.bio}
            </p>
          </blockquote>

        </motion.div>

        {/* ── Right: Trait rows ── */}
        <div className="divide-y divide-[var(--border)]">
          {TRAITS.map((t, i) => (
            <motion.div
              key={t.title}
              {...springUp(reduce, i * 0.08)}
              className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
            >
              <span
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                style={{ background: t.accent + "18", color: t.accent }}
              >
                <UIIcon name={t.icon} className="h-4 w-4" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[0.9375rem] font-semibold leading-snug text-[var(--text)]">
                  {t.title}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {t.sub}
                </p>
              </div>

              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full opacity-60"
                style={{ background: t.accent }}
                aria-hidden
              />
            </motion.div>
          ))}
        </div>

      </div>
    </SectionShell>
  );
}
