# SVO Digital

A premium digital agency marketing site — Websites, Automation, AI Solutions.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Structure

- `src/app` — routing, layout, global styles
- `src/components/sections` — one component per landing page section (hero, services, portfolio, process, testimonials, FAQ, final CTA)
- `src/components/layout` — navbar and footer
- `src/components/ui` — shared primitives (button, reveal/text-reveal animations, counter, cursor, scroll progress, etc.)
- `src/lib` — site copy/data (`data.ts`, `constants.ts`) and the `cn` class-merge utility

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
