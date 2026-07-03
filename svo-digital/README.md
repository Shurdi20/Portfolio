# SVO Digital — Agency Website

Premium one-page digital agency site for **SVO Digital** (Websites · Automation · AI Solutions), built to generate qualified leads and booked strategy calls.

## Tech stack

- **Next.js 15** (App Router, Turbopack, fully static output)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens via `@theme`)
- **Framer Motion 12** — all motion design
- **Lucide** icons, **Inter** + **Space Grotesk** via `next/font`

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Structure

```
src/
  app/            # layout (fonts, SEO metadata), page, global theme
  components/
    layout/       # Navbar, Footer, Cursor, Preloader, ScrollProgress
    sections/     # Hero, TrustedBy, Services, Work, Process, WhyUs,
                  # Testimonials, Faq, FinalCta
    ui/           # Button, Magnetic, Reveal, TextReveal, Counter, SectionHeading
  lib/            # cn() utility
```

## Design system

| Token       | Value                  |
| ----------- | ---------------------- |
| Background  | `#080808`              |
| Surface     | `#111111`              |
| Card        | `#151515`              |
| Border      | `rgba(255,255,255,.08)`|
| Accent      | `#B8FF00`              |
| Secondary   | `#9E9E9E`              |

## Motion & 3D

3D is implemented with GPU-accelerated CSS 3D transforms driven by Framer Motion (no three.js — keeps the bundle small and Lighthouse fast): mouse-tracked perspective tilt on the hero dashboard, z-depth floating satellite cards, 3D tilt service cards with cursor-tracked glow, scroll-drawn process timeline, magnetic buttons, masked text reveals, animated counters, custom cursor, marquee, scroll progress bar and preloader. All animations respect `prefers-reduced-motion`.
