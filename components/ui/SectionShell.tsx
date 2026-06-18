"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = {
  id: string;
  title: string;
  overline?: string;
  description?: string;
  alt?: boolean;
  children: ReactNode;
};

export function SectionShell({ id, title, overline, description, alt, children }: Props) {
  return (
    <section id={id} className={`section ${alt ? "section-alt" : ""}`}>
      <Container className="layout-shell">
        <SectionHeading title={title} overline={overline} description={description} />
        {children}
      </Container>
    </section>
  );
}
