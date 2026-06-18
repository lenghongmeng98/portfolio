# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint (Next.js + TypeScript rules)
```

No test suite is configured.

## Architecture

**Single-page portfolio** built on Next.js App Router. Everything renders from one route (`app/page.tsx`) that composes section components in order.

### Content

All CV data lives in **`data/site.ts`** — the only file that needs editing for content changes (name, bio, jobs, projects, skills, nav links). It uses `as const` throughout, so TypeScript enforces exhaustiveness in components that switch on its values.

### Styling

**Tailwind CSS v4** with no `tailwind.config.js`. Design tokens are CSS custom properties defined in `app/globals.css` under `:root` (light) and `html.dark` (dark). The `@theme inline` block maps those variables into Tailwind's token system. Use CSS variables (`var(--accent)`, `var(--bg)`, etc.) rather than raw colour values.

Semantic surface classes (`.panel`, `.panel-interactive`, `.panel-accent`) and button variants (`.btn-primary`, `.btn-secondary`, `.btn-ghost`) are defined in `globals.css` — prefer these over one-off Tailwind utilities.

### Theme

Dark/light mode is managed by `components/theme/ThemeProvider.tsx` (React context + `localStorage`). It toggles the `dark` class on `<html>`. Components read the reduced-motion preference via `window.matchMedia('(prefers-reduced-motion: reduce)')` and pass it into the animation helpers.

### Animations

All Framer Motion config comes from **`lib/motion.ts`**. Use the exported helpers (`fadeIn`, `fadeUp`, `staggerContainer`, `staggerItem`) rather than inline variants — they handle reduced-motion automatically.

### Component layers

| Layer | Path | Purpose |
|-------|------|---------|
| Sections | `components/sections/` | Full-width page sections, each with a matching `id` for scroll-nav |
| UI primitives | `components/ui/` | `Card`, `Reveal`, `SectionShell`, `SectionHeading`, etc. |
| Icons | `components/icons/UIIcon.tsx`, `SkillIcon.tsx` | SVG icon sets; both use exhaustive TypeScript `never` checks |
| Shell | `components/ClientShell.tsx` | Client boundary wrapping `ThemeProvider` + `PageLoader` |

### Navigation

`SiteHeader.tsx` uses `IntersectionObserver` to track which section is in view and highlights the active nav link. Smooth-scroll targets section `id` values defined in `data/site.ts → nav[]`.

### SEO / meta

- `app/layout.tsx` — `<Metadata>` with OG + Twitter cards
- `app/robots.ts` / `app/sitemap.ts` — auto-generated at build time
- `components/JsonLd.tsx` — schema.org `Person` structured data

### Known gaps

- `public/resume.pdf` is missing — `data/site.ts` references it for the CV download button.
- `components/AmbientGlow.tsx` is imported in `ClientShell` but not rendered.
- `components/ui/Bento.tsx` is defined but unused.
