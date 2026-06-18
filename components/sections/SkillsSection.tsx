"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { staggerContainer, staggerItem } from "@/lib/motion";

function getMonogram(name: string): string {
  const words = name.split(/[\s\-()/]+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

export function SkillsSection() {
  const reduce = useReducedMotion();
  const [activeTab, setActiveTab] = useState<string>(skillGroups[0].label);
  const activeGroup = skillGroups.find((g) => g.label === activeTab) ?? skillGroups[0];
  const isAI = activeGroup.label === "AI-Assisted Dev";

  return (
    <SectionShell
      id="skills"
      title="Skills & Stack"
      description="Technologies I use to design, build, and ship production-ready systems."
    >
      {/* Centered scrollable tab strip */}
      <div className="flex justify-center">
        <div className="tab-list w-full max-w-lg" role="tablist" aria-label="Skill categories">
          {skillGroups.map((group) => (
            <button
              key={group.label}
              role="tab"
              aria-selected={activeTab === group.label}
              onClick={() => setActiveTab(group.label)}
              className="tab-btn focus-ring flex-1"
            >
              {group.label}
              {group.label === "AI-Assisted Dev" && (
                <span className="badge-new ml-1.5">New</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Skill grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          role="tabpanel"
          variants={staggerContainer(reduce, 0.022)}
          initial="hidden"
          animate="visible"
          exit={reduce ? {} : { opacity: 0, y: -6, transition: { duration: 0.12 } }}
          className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5"
        >
          {activeGroup.skills.map((skill) => (
            <motion.div
              key={skill}
              variants={staggerItem(reduce)}
              whileHover={reduce ? undefined : { y: -3, scale: 1.04 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
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

      <p className="mt-5 text-center text-xs text-[var(--text-tertiary)]">
        {activeGroup.skills.length} technologies in {activeGroup.label}
      </p>
    </SectionShell>
  );
}
