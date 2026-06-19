"use client";

import { contact, site } from "@/data/site";

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-subtle)] py-10">
      <div className="layout-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <button type="button" onClick={() => go("home")} className="focus-ring group flex items-center gap-0.5">
            <span className="font-display text-lg font-bold tracking-tight">
              <span className="gradient-text">{site.name.split(" ")[0]}</span>
              <span className="text-[var(--accent)] transition-colors group-hover:text-[var(--accent-2)]">.</span>
            </span>
          </button>
          <p className="mt-1 text-sm text-[var(--text-tertiary)]">{site.role}</p>
        </div>

      </div>

      <div className="layout-shell mt-8 flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--text-tertiary)]">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${contact.email}`} className="focus-ring text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">
            {contact.email}
          </a>
          <button type="button" onClick={() => go("home")} className="focus-ring btn-ghost !px-2 !text-xs">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
