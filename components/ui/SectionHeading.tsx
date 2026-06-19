"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { blurFadeUp } from "@/lib/motion";

type Props = {
  title: ReactNode;
  description?: ReactNode;
  overline?: string;
};

export function SectionHeading({ title, description }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.header {...blurFadeUp(reduce)} className="mb-12 flex flex-col items-center text-center md:mb-14">
      <h2 className="heading-gradient font-display text-[1.875rem] font-bold leading-tight tracking-[-0.03em] sm:text-[2.5rem]">
        {title}
      </h2>
      <div className="accent-line mx-auto mt-4 h-[3px] w-12 rounded-full" aria-hidden />
      {description && (
        <p className="mx-auto mt-5 max-w-lg text-[var(--text-secondary)]">{description}</p>
      )}
    </motion.header>
  );
}
