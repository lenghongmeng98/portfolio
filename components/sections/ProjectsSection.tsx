"use client";

import { projects } from "@/data/site";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionShell } from "@/components/ui/SectionShell";

export function ProjectsSection() {
  return (
    <SectionShell id="projects" title="Selected Work" overline="Projects" alt>
      <div className="mx-auto max-w-2xl">
        <ul className="grid list-none gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
