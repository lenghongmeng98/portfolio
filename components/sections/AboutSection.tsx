"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { fadeUp } from "@/lib/motion";

export function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="about" title="About">
      <motion.div {...fadeUp(reduce)} className="mx-auto max-w-2xl space-y-5">
        <p className="about-accent text-lg leading-relaxed text-[var(--text)]">{about.bio}</p>
        <div className="panel panel-interactive panel-accent p-6">
          <p className="text-sm font-semibold text-[var(--text)]">Education</p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{about.education}</p>
        </div>
      </motion.div>
    </SectionShell>
  );
}
