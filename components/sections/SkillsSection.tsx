"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { fadeUp } from "@/lib/motion";

export function SkillsSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell id="skills" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div key={group.label} {...fadeUp(reduce, i * 0.05)} className="panel panel-interactive p-6 md:p-7">
            <h3 className="skill-label text-sm font-semibold text-[var(--text)]">{group.label}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
