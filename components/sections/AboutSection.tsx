"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { fadeUp } from "@/lib/motion";

export function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="about" title="About">
      <motion.div {...fadeUp(reduce)} className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <p className="about-accent max-w-2xl text-lg leading-relaxed text-[var(--text)]">{about.bio}</p>
        <div className="panel panel-interactive panel-accent p-6 md:p-7">
          <p className="text-sm font-semibold text-[var(--text)]">Education</p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{about.education}</p>
        </div>
      </motion.div>
    </SectionShell>
  );
}
