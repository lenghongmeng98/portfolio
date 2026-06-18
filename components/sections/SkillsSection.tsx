"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";

function getMonogram(name: string): string {
  const words = name.split(/[\s\-()/]+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

export function SkillsSection() {
  const reduce = useReducedMotion();
  const [activeTab, setActiveTab] = useState(skillGroups[0].label);
  const activeGroup = skillGroups.find((g) => g.label === activeTab) ?? skillGroups[0];
  const isAI = activeGroup.label === "AI-Assisted Dev";

  return (
    <SectionShell
      id="skills"
      title="Skills & Stack"
      description="Technologies I use to design, build, and ship production-ready systems."
    >
      <div className="tab-list" role="tablist" aria-label="Skill categories">
        {skillGroups.map((group) => (
          <button
            key={group.label}
            role="tab"
            aria-selected={activeTab === group.label}
            onClick={() => setActiveTab(group.label)}
            className="tab-btn focus-ring"
          >
            {group.label}
            {group.label === "AI-Assisted Dev" && (
              <span className="badge-new ml-1.5">New</span>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          role="tabpanel"
          initial={reduce ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? {} : { opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
        >
          {activeGroup.skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={reduce ? {} : { opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: reduce ? 0 : i * 0.028, ease: "easeOut" }}
              className={`skill-tile${isAI ? " skill-tile-ai" : ""}`}
              title={skill}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[0.8rem] font-bold"
                style={{
                  background: isAI ? "var(--accent-2-muted)" : "var(--accent-muted)",
                  color: isAI ? "var(--accent-2)" : "var(--accent)",
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                }}
                aria-hidden
              >
                {getMonogram(skill)}
              </span>
              <span className="line-clamp-2 text-center text-xs font-medium leading-snug text-[var(--text-secondary)]">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <p className="mt-5 text-xs text-[var(--text-tertiary)]">
        {activeGroup.skills.length} technologies in {activeGroup.label}
      </p>
    </SectionShell>
  );
}
