"use client";

import { contact, site } from "@/data/site";

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-subtle)] py-6">
      <div className="layout-shell flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--text-tertiary)]">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => go("home")} className="focus-ring btn-ghost !px-2 !text-xs">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
