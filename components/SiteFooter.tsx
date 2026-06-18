"use client";

import { contact, site, socialLinks } from "@/data/site";
import { socialIconFor, UIIcon } from "@/components/icons/UIIcon";

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-subtle)] py-10">
      <div className="layout-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold tracking-tight text-[var(--text)]">{site.name}</p>
          <p className="mt-1 text-sm text-[var(--text-tertiary)]">{site.role}</p>
        </div>

        <nav aria-label="Social profiles" className="flex flex-wrap gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="focus-ring btn-ghost rounded-full border border-[var(--border)] !px-3"
            >
              <UIIcon name={socialIconFor(link.label)} className="h-4 w-4" />
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="layout-shell mt-8 flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--text-tertiary)]">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${contact.email}`} className="focus-ring text-xs text-[var(--text-secondary)] hover:text-[var(--accent)]">
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
