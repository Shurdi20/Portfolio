# SVO Digital

A premium digital agency marketing site — Websites, Automation, AI Solutions.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
cp .env.example .env.local # fill in RESEND_API_KEY to enable the contact form
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Contact form

The "Book a Free Strategy Call" form posts to `src/app/api/contact/route.ts`, which sends
email via [Resend](https://resend.com). Until `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are
set (see `.env.example`), the form will show a friendly error asking visitors to email
directly — it will not silently pretend to succeed.

## Structure

- `src/app` — routing, layout, global styles, `sitemap.ts`/`robots.ts`, dynamic OG image and icons
- `src/app/api/contact` — contact form submission handler
- `src/components/sections` — one component per landing page section (hero, services, portfolio, process, why-choose-us, FAQ, contact)
- `src/components/layout` — navbar and footer
- `src/components/ui` — shared primitives (button, reveal/text-reveal animations, cursor, scroll progress, etc.)
- `src/lib` — site copy/data (`data.ts`, `constants.ts`) and the `cn` class-merge utility

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
