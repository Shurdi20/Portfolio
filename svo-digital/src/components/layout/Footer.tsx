import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  { label: "Websites", href: "#services" },
  { label: "Automation", href: "#services" },
  { label: "AI Solutions", href: "#services" },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X / Twitter", href: "https://x.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="container-site py-16 lg:py-20">
        <Reveal y={20}>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <a
                href="#top"
                className="font-display text-2xl font-semibold tracking-tight"
              >
                SVO<span className="text-accent">.</span>Digital
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-secondary">
                Helping businesses grow through beautiful websites, intelligent
                automation and AI-powered solutions.
              </p>
            </div>

            <div className="lg:col-span-2">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-secondary">
                Navigation
              </p>
              <ul className="space-y-3">
                {nav.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-primary/80 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-secondary">
                Services
              </p>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-primary/80 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-secondary">
                Contact
              </p>
              <a
                href="mailto:hello@svodigital.com"
                className="group inline-flex items-center gap-1 text-sm text-primary/80 transition-colors hover:text-accent"
              >
                hello@svodigital.com
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <ul className="mt-6 flex flex-wrap gap-4">
                {socials.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-secondary transition-colors hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SVO Digital. All rights reserved.</p>
          <p>Websites · Automation · AI Solutions</p>
        </div>
      </div>
    </footer>
  );
}
