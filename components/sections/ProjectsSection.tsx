"use client";

import { projects } from "@/data/site";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionShell } from "@/components/ui/SectionShell";

export function ProjectsSection() {
  return (
    <SectionShell id="projects" title="Selected work">
      <ul className="grid list-none gap-5 lg:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </ul>
    </SectionShell>
  );
}
