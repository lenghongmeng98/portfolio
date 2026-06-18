"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = {
  id: string;
  title: string;
  description?: string;
  alt?: boolean;
  children: ReactNode;
};

export function SectionShell({ id, title, description, alt, children }: Props) {
  return (
    <section id={id} className={`section ${alt ? "section-alt" : ""}`}>
      <Container className="layout-shell">
        <SectionHeading title={title} description={description} />
        {children}
      </Container>
    </section>
  );
}
