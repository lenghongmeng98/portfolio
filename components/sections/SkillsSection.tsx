"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { DiJava, DiCss3, DiMysql, DiAws } from "react-icons/di";
import {
  SiSpring, SiReact, SiNextdotjs, SiHtml5, SiJavascript, SiBootstrap,
  SiPostgresql, SiRedis, SiDocker, SiGit, SiKeycloak,
  SiJsonwebtokens, SiFlyway, SiLiquibase, SiOpenapiinitiative, SiAnthropic,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { skillGroups } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { staggerContainer, staggerItem } from "@/lib/motion";

type Brand = { icon: IconType; color: string; bg: string };

const SKILL_BRAND: Record<string, Brand> = {
  "Java":                        { icon: DiJava,              color: "#ED8B00", bg: "rgba(237,139,0,0.12)"     },
  "Spring Boot":                 { icon: SiSpring,            color: "#6DB33F", bg: "rgba(109,179,63,0.12)"    },
  "Spring Data JPA":             { icon: SiSpring,            color: "#6DB33F", bg: "rgba(109,179,63,0.12)"    },
  "Spring Security":             { icon: SiSpring,            color: "#6DB33F", bg: "rgba(109,179,63,0.12)"    },
  "Spring Cloud Microservices":  { icon: SiSpring,            color: "#6DB33F", bg: "rgba(109,179,63,0.12)"    },
  "REST APIs":                   { icon: SiOpenapiinitiative, color: "#6BA539", bg: "rgba(107,165,57,0.12)"    },
  "JWT":                         { icon: SiJsonwebtokens,     color: "#D63AFF", bg: "rgba(214,58,255,0.10)"    },
  "Keycloak":                    { icon: SiKeycloak,          color: "#00B8E3", bg: "rgba(0,184,227,0.12)"     },
  "Flyway":                      { icon: SiFlyway,            color: "#CC0200", bg: "rgba(204,2,0,0.10)"       },
  "Liquibase":                   { icon: SiLiquibase,         color: "#2962FF", bg: "rgba(41,98,255,0.10)"     },
  "ReactJS":                     { icon: SiReact,             color: "#61DAFB", bg: "rgba(97,218,251,0.14)"    },
  "NextJS":                      { icon: SiNextdotjs,         color: "#171717", bg: "rgba(0,0,0,0.07)"         },
  "HTML":                        { icon: SiHtml5,             color: "#E34F26", bg: "rgba(227,79,38,0.12)"     },
  "CSS":                         { icon: DiCss3,              color: "#1572B6", bg: "rgba(21,114,182,0.12)"    },
  "JavaScript":                  { icon: SiJavascript,        color: "#B8A800", bg: "rgba(247,223,30,0.14)"    },
  "Bootstrap":                   { icon: SiBootstrap,         color: "#7952B3", bg: "rgba(121,82,179,0.12)"    },
  "PostgreSQL":                  { icon: SiPostgresql,        color: "#336791", bg: "rgba(51,103,145,0.12)"    },
  "MySQL":                       { icon: DiMysql,             color: "#4479A1", bg: "rgba(68,121,161,0.12)"    },
  "Redis":                       { icon: SiRedis,             color: "#DC382D", bg: "rgba(220,56,45,0.12)"     },
  "Docker":                      { icon: SiDocker,            color: "#2496ED", bg: "rgba(36,150,237,0.12)"    },
  "Docker Compose":              { icon: SiDocker,            color: "#2496ED", bg: "rgba(36,150,237,0.12)"    },
  "Cloud Services":              { icon: DiAws,               color: "#FF9900", bg: "rgba(255,153,0,0.12)"     },
  "Git":                         { icon: SiGit,               color: "#F05032", bg: "rgba(240,80,50,0.12)"     },
  "Claude Code":                 { icon: SiAnthropic,         color: "#D97757", bg: "rgba(217,119,87,0.12)"    },
};

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
      overline="Technical Skills"
      description="Technologies I use to design, build, and ship production-ready systems."
    >
      {/* Tab strip */}
      <div className="flex justify-center">
        <div className="tab-list w-full max-w-md" role="tablist" aria-label="Skill categories">
          {skillGroups.map((group) => (
            <button
              key={group.label}
              role="tab"
              aria-selected={activeTab === group.label}
              onClick={() => setActiveTab(group.label)}
              className="tab-btn focus-ring flex-1"
            >
              {group.label === "AI-Assisted Dev" ? "AI Dev" : group.label}
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
          className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
        >
          {activeGroup.skills.map((skill) => {
            const brand = SKILL_BRAND[skill as string];
            return (
              <motion.div
                key={skill}
                variants={staggerItem(reduce)}
                whileHover={reduce ? undefined : { y: -4, scale: 1.05 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className={`skill-tile${isAI ? " skill-tile-ai" : ""}`}
                title={skill}
              >
                {brand ? (
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ background: brand.bg }}
                    aria-hidden
                  >
                    <brand.icon size={22} style={{ color: brand.color }} />
                  </span>
                ) : (
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-[0.8rem] font-bold"
                    style={{
                      background: isAI ? "var(--accent-2-muted)" : "var(--accent-muted)",
                      color: isAI ? "var(--accent-2)" : "var(--accent)",
                      fontFamily: "var(--font-mono), monospace",
                    }}
                    aria-hidden
                  >
                    {getMonogram(skill)}
                  </span>
                )}
                <span className="line-clamp-2 text-center text-xs font-medium leading-snug text-[var(--text-secondary)]">
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <p className="mt-5 text-center text-xs text-[var(--text-tertiary)]">
        {activeGroup.skills.length} technologies · {activeGroup.label}
      </p>
    </SectionShell>
  );
}
