import type { SkillIconId } from "@/data/site";

export function SkillIcon({ id, className = "h-6 w-6" }: { id: SkillIconId; className?: string }) {
  const cn = ["shrink-0", className].filter(Boolean).join(" ");
  switch (id) {
    case "java":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <path
            d="M8 4c4 1 8 4 8 8s-4 7-8 8M16 4c-4 1-8 4-8 8s4 7 8 8"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            className="text-[var(--accent)]"
          />
          <path d="M12 8v8" stroke="currentColor" strokeWidth="1.25" className="text-[var(--text-muted)]" />
        </svg>
      );
    case "spring":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <path
            d="M12 3c-2 4-6 5-6 9 0 3 2.5 5 6 9 3.5-4 6-6 6-9 0-4-4-5-6-9z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
            className="text-[var(--accent)]"
          />
          <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" className="text-[var(--text-muted)]" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <circle cx="12" cy="12" r="2" fill="currentColor" className="text-[var(--accent-bright)]" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.25" className="text-[var(--accent)]" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.25" className="text-[var(--accent)]" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.25" className="text-[var(--accent)]" transform="rotate(120 12 12)" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.25" className="text-[var(--accent)]" />
          <path d="M8 12h3M9.5 10.5V15M14 10.5c1.5 0 2.5 1 2.5 2.25S15.5 15 14 15h-1v-4.5H14z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" className="text-[var(--text-subtle)]" />
        </svg>
      );
    case "postgres":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.25" className="text-[var(--accent)]" />
          <path d="M5 6v4c0 1.7 3 3 7 3s7-1.3 7-3V6" stroke="currentColor" strokeWidth="1.25" className="text-[var(--accent)]" />
          <path d="M5 10v4c0 1.7 3 3 7 3s7-1.3 7-3v-4" stroke="currentColor" strokeWidth="1.25" className="text-[var(--text-muted)]" />
          <path d="M5 14v4c0 1.7 3 3 7 3s7-1.3 7-3v-4" stroke="currentColor" strokeWidth="1.25" className="text-[var(--text-subtle)]" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <path
            d="M4 14c0-2.5 2-4 5-4s5 1.5 5 4-2 4-5 4-5-1.5-5-4z"
            stroke="currentColor"
            strokeWidth="1.25"
            className="text-[var(--text-muted)]"
          />
          <path d="M9 10c0-2 1.8-3.5 5-3.5s5 1.5 5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" className="text-[var(--accent)]" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.25" className="text-[var(--accent)]" />
          <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="1.25" className="text-[var(--accent)]" />
          <path d="M10 9l4 4M14 9l-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" className="text-[var(--text-muted)]" />
          <path d="M16 8v4M8 16v-4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" className="text-[var(--text-subtle)]" />
        </svg>
      );
    default: {
      const _exhaustive: never = id;
      return _exhaustive;
    }
  }
}
