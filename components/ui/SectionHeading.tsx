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
    <motion.header {...fadeUp(reduce)} className="mb-10 text-center md:mb-12">
      <h2 className={textSectionTitle}>{title}</h2>
      <div className="mx-auto mt-4 h-0.5 w-10 rounded-full" style={{ background: "var(--gradient-accent)" }} aria-hidden />
      {description ? (
        <p className="mx-auto mt-5 max-w-lg text-[var(--text-secondary)]">{description}</p>
      ) : null}
    </motion.header>
  );
}
