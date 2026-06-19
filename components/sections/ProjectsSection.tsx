"use client";

import { projects } from "@/data/site";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionShell } from "@/components/ui/SectionShell";

export function ProjectsSection() {
  return (
    <SectionShell id="projects" title="My Projects" overline="Projects" alt>
      <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </ul>
    </SectionShell>
  );
}
