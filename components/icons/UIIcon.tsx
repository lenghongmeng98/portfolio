type Props = { name: UIIconName; className?: string };

export type UIIconName =
  | "location"
  | "mail"
  | "phone"
  | "arrowRight"
  | "externalLink"
  | "briefcase"
  | "graduation"
  | "certificate"
  | "folder"
  | "focus"
  | "globe"
  | "send"
  | "github"
  | "linkedin";

const defaults = "h-4 w-4 shrink-0";

export function UIIcon({ name, className = defaults }: Props) {
  const cn = [defaults, className].filter(Boolean).join(" ");

  switch (name) {
    case "location":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <path
            d="M8.5 4h2l1.2 4.8-1.8 1.2a11 11 0 005.3 5.3l1.2-1.8L21 16v2a2 2 0 01-2 2C10.6 20 4 13.4 4 4.5A2 2 0 016 2.5h2.5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrowRight":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "externalLink":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <path d="M14 5h5v5M10 14L19 5M19 10v8a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2M12 12v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "graduation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <path d="M3 9l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M21 10v5M6 12.5V17a6 6 0 0012 0v-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "certificate":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9.5 14L8 22l4-2 4 2-1.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "folder":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <path d="M3 7a2 2 0 012-2h5l2 2h7a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "focus":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 12h18M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9c-2.5-2.8-4-6-4-9s1.5-6.2 4-9z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "send":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <path d="M4 12l16-7-7 16-2-7-7-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <path
            d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .4-1.4 1-2-3.2-.4-6.5-1.6-6.5-7.1 0-1.6.6-2.9 1.6-3.9-.2-.4-.7-2 .2-4.1 0 0 1.3-.4 4.3 1.5a14.8 14.8 0 018 0c3-1.9 4.3-1.5 4.3-1.5.9 2.1.4 3.7.2 4.1 1 1 1.6 2.3 1.6 3.9 0 5.5-3.3 6.7-6.5 7.1.5.5 1 1.2 1 2.2V21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cn} aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 11v6M8 8v.01M12 17v-4c0-1.1.9-2 2-2s2 .9 2 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

/** Map social link labels to icons */
export function socialIconFor(label: string): UIIconName {
  const lower = label.toLowerCase();
  if (lower.includes("linkedin")) return "linkedin";
  if (lower.includes("email") || lower.includes("mail")) return "mail";
  if (lower.includes("github")) return "github";
  return "globe";
}
