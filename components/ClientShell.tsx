"use client";

import type { ReactNode } from "react";
import { PageLoader } from "@/components/PageLoader";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export function ClientShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="page-bg" aria-hidden />
      <PageLoader />
      {children}
    </ThemeProvider>
  );
}
