import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FOOTER_NAV, FOOTER_SERVICES, SITE, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] pb-10 pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="#top" className="font-display text-2xl font-semibold tracking-tight">
              SVO<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A premium digital agency helping businesses grow through beautiful websites,
              intelligent automation and AI-powered solutions.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted/70">
              Navigation
            </p>
            <ul className="mt-5 flex flex-col gap-3.5">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted/70">
              Services
            </p>
            <ul className="mt-5 flex flex-col gap-3.5">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted/70">
              Contact
            </p>
            <ul className="mt-5 flex flex-col gap-3.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors duration-300 hover:text-accent"
                >
                  {SITE.email}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="text-xs text-muted/70">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted/70">Websites · Automation · AI Solutions</p>
        </div>
      </Container>
    </footer>
  );
}
