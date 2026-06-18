# ai-portfolio

Personal portfolio site for **Kirill Lebedev** — Python Engineer (AI & Automation).
Dark, "enterprise-meets-edgy" design with an animated hero, an interactive career
timeline, a categorized tech stack and a future-work section. Built to grow into an
AI chat that answers "as me".

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for scroll/entrance animation
- Self-hosted fonts via **@fontsource** (Inter + JetBrains Mono) — no external font fetch

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        # metadata, viewport, fonts, root html
  page.tsx          # section composition
  globals.css       # tokens, utilities (glass, gradient, grid bg)
components/
  Nav, Hero, About, Journey, Stack, Work, Contact
  Section.tsx       # shared section header
  Reveal.tsx        # scroll-reveal wrapper (respects reduced motion)
  Background.tsx    # ambient grid + gradient orbs
lib/
  content.ts        # ALL site copy/data — edit here to update the site
public/
  resume.pdf        # served résumé (gitignored — personal)
```

## Editing content

Everything (bio, roles, achievements, skills, projects, contacts) lives in
[`lib/content.ts`](lib/content.ts). No need to touch components for copy changes.

## Notes

- `NEXT_PUBLIC_STATIC=1` disables entrance animations (used for static rendering / screenshots).
- Entrance animations respect `prefers-reduced-motion`.
