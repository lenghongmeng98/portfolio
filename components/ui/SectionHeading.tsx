"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { textSectionTitle } from "@/components/ui/typography";
import { fadeUp } from "@/lib/motion";

type Props = {
  title: ReactNode;
  description?: ReactNode;
  overline?: string;
};

export function SectionHeading({ title, description, overline }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.header {...fadeUp(reduce)} className="mb-12 flex flex-col items-center text-center md:mb-14">
<h2 className={textSectionTitle}>{title}</h2>
      <div
        className="mx-auto mt-4 h-[2px] w-10 rounded-full"
        style={{ background: "var(--gradient-accent)" }}
        aria-hidden
      />
      {description && (
        <p className="mx-auto mt-5 max-w-lg text-[var(--text-secondary)]">{description}</p>
      )}
    </motion.header>
  );
}
