"use client";

import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { fadeUp } from "@/lib/motion";

export function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="about" title="About Me" overline="Background">
      <motion.div {...fadeUp(reduce)} className="mx-auto max-w-2xl">
        <p className="about-accent text-lg leading-relaxed text-[var(--text)]">{about.bio}</p>
      </motion.div>
    </SectionShell>
  );
}
