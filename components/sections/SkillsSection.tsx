"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DiJava, DiCss3, DiMysql, DiAws } from "react-icons/di";
import {
  SiSpring, SiReact, SiNextdotjs, SiHtml5, SiJavascript, SiBootstrap,
  SiPostgresql, SiRedis, SiDocker, SiGit, SiKeycloak,
  SiJsonwebtokens, SiFlyway, SiLiquibase, SiOpenapiinitiative, SiAnthropic,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { skillGroups } from "@/data/site";
import { SectionShell } from "@/components/ui/SectionShell";
import { blurFadeUp } from "@/lib/motion";

type Brand = { icon: IconType; color: string };

const SKILL_BRAND: Record<string, Brand> = {
  "Java":                       { icon: DiJava,              color: "#ED8B00" },
  "Spring Boot":                { icon: SiSpring,            color: "#6DB33F" },
  "Spring Data JPA":            { icon: SiSpring,            color: "#6DB33F" },
  "Spring Security":            { icon: SiSpring,            color: "#6DB33F" },
  "Spring Cloud Microservices": { icon: SiSpring,            color: "#6DB33F" },
  "REST APIs":                  { icon: SiOpenapiinitiative, color: "#6BA539" },
  "JWT":                        { icon: SiJsonwebtokens,     color: "#D63AFF" },
  "Keycloak":                   { icon: SiKeycloak,          color: "#00B8E3" },
  "Flyway":                     { icon: SiFlyway,            color: "#CC0200" },
  "Liquibase":                  { icon: SiLiquibase,         color: "#2962FF" },
  "ReactJS":                    { icon: SiReact,             color: "#61DAFB" },
  "NextJS":                     { icon: SiNextdotjs,         color: "#555"    },
  "HTML":                       { icon: SiHtml5,             color: "#E34F26" },
  "CSS":                        { icon: DiCss3,              color: "#1572B6" },
  "JavaScript":                 { icon: SiJavascript,        color: "#B8A800" },
  "Bootstrap":                  { icon: SiBootstrap,         color: "#7952B3" },
  "PostgreSQL":                 { icon: SiPostgresql,        color: "#336791" },
  "MySQL":                      { icon: DiMysql,             color: "#4479A1" },
  "Redis":                      { icon: SiRedis,             color: "#DC382D" },
  "Docker":                     { icon: SiDocker,            color: "#2496ED" },
  "Docker Compose":             { icon: SiDocker,            color: "#2496ED" },
  "Cloud Services":             { icon: DiAws,               color: "#FF9900" },
  "Git":                        { icon: SiGit,               color: "#F05032" },
  "Claude Code":                { icon: SiAnthropic,         color: "#D97757" },
};

const GROUP_META = {
  "Backend":        { accent: "#2563EB", speed: 55, reverse: false },
  "Web":            { accent: "#F59E0B", speed: 44, reverse: true  },
  "Data & Tools":   { accent: "#7C3AED", speed: 52, reverse: false },
  "AI-Assisted Dev":{ accent: "#10B981", speed: 40, reverse: true  },
} as const;

function SkillPill({ skill, accent }: { skill: string; accent: string }) {
  const brand = SKILL_BRAND[skill];
  const iconBg = brand ? brand.color + "1e" : accent + "1e";
  const iconColor = brand ? brand.color : accent;

  return (
    <span className="marquee-pill" style={{ "--pill-accent": accent } as React.CSSProperties}>
      <span className="marquee-pill-icon" style={{ background: iconBg }} aria-hidden>
        {brand ? (
          <brand.icon size={15} style={{ color: iconColor }} />
        ) : (
          <span
            className="text-[0.55rem] font-black leading-none"
            style={{ color: iconColor }}
          >
            {skill.slice(0, 2).toUpperCase()}
          </span>
        )}
      </span>
      {skill}
    </span>
  );
}

function MarqueeTrack({
  skills, accent, speed, reverse, reduce,
}: {
  skills: readonly string[];
  accent: string;
  speed: number;
  reverse: boolean;
  reduce: boolean | null;
}) {
  const [hovered, setHovered] = useState(false);
  const repeated = [...skills, ...skills, ...skills, ...skills];

  return (
    <div
      className="marquee-wrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`marquee-inner${reverse ? " marquee-reverse" : ""}`}
        style={{
          "--marquee-speed": `${speed}s`,
          animationPlayState: reduce || hovered ? "paused" : "running",
        } as React.CSSProperties}
      >
        {repeated.map((skill, i) => (
          <SkillPill key={`${skill}-${i}`} skill={skill} accent={accent} />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const reduce = useReducedMotion();

  return (
    <SectionShell
      id="skills"
      title="Skills & Stack"
      overline="Technical Skills"
      description="Technologies I use to design, build, and ship production-ready systems."
    >
      <div className="space-y-5">
        {skillGroups.map((group, gi) => {
          const meta = GROUP_META[group.label as keyof typeof GROUP_META]
            ?? { accent: "#2563EB", speed: 50, reverse: false };
          const isAI = group.label === "AI-Assisted Dev";

          return (
            <motion.div
              key={group.label}
              {...blurFadeUp(reduce, gi * 0.08)}
              className="marquee-section"
              style={{ "--s-accent": meta.accent } as React.CSSProperties}
            >
              {/* Category label row */}
              <div className="mb-2.5 flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: meta.accent }}
                    aria-hidden
                  />
                  <span
                    className="text-[0.75rem] font-bold uppercase tracking-[0.1em]"
                    style={{ color: meta.accent }}
                  >
                    {group.label}
                  </span>
                 
                </div>
                <span className="text-[0.7rem] font-medium text-[var(--text-tertiary)]">
                  {group.skills.length} skills
                  <span
                    className="ml-1.5 inline-block h-[1px] w-4 align-middle rounded-full"
                    style={{ background: meta.accent + "50" }}
                    aria-hidden
                  />
                  {meta.reverse ? "←" : "→"}
                </span>
              </div>

              <MarqueeTrack
                skills={group.skills as unknown as string[]}
                accent={meta.accent}
                speed={meta.speed}
                reverse={meta.reverse}
                reduce={reduce}
              />
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
