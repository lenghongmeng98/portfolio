"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { textSectionTitle } from "@/components/ui/typography";
import { fadeUp } from "@/lib/motion";

type Props = {
  title: ReactNode;
  description?: ReactNode;
};

export function SectionHeading({ title, description }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.header {...fadeUp(reduce)} className="mb-10 md:mb-12">
      <h2 className={textSectionTitle}>{title}</h2>
      <motion.div className="section-rule" aria-hidden />
      {description ? <p className="mt-5 max-w-xl text-[var(--text-secondary)]">{description}</p> : null}
    </motion.header>
  );
}
