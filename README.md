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

Everything (bio, roles, achievements, skills, projects, contacts, UI labels) lives
in [`lib/content.ts`](lib/content.ts) as a bilingual dictionary `content.en` /
`content.ru`. No need to touch components for copy changes.

## AI Digital Twin (chat)

A floating chat that answers as Kirill, grounded in the career data in `lib/content.ts`.

- **Server proxy:** [`app/api/chat/route.ts`](app/api/chat/route.ts) — streams from
  OpenRouter (model `openai/gpt-oss-120b:free`). The API key stays server-side and
  is **never** sent to the browser.
- **Widget:** [`components/DigitalTwin.tsx`](components/DigitalTwin.tsx) — reads the
  streamed tokens and renders them live.
- Replies in the same language as the question (RU/EN).
- Requires `OPENROUTER_API_KEY` in `.env` (gitignored). Example:

  ```
  OPENROUTER_API_KEY=sk-or-...
  ```

- Guards: history capped to the last 12 messages, 2000 chars/message, 700 max output tokens.
- For production, set `HTTP-Referer` in the route to your real domain.

## Languages (RU / EN)

The site is fully bilingual with a toggle in the navbar.

- State + persistence live in [`lib/i18n.tsx`](lib/i18n.tsx) (React context).
- Choice is saved to `localStorage`; first-time visitors are auto-detected from
  the browser language (`ru*` → Russian, otherwise English).
- To change the default, edit the initial `useState` in `LanguageProvider`.

## Notes

- `NEXT_PUBLIC_STATIC=1` disables entrance animations (used for static rendering / screenshots).
- Entrance animations respect `prefers-reduced-motion`.
