import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FOOTER_NAV, FOOTER_SERVICES, SITE } from "@/lib/constants";

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
              Een premium digital agency die bedrijven helpt groeien met prachtige websites,
              slimme automatisering en AI-oplossingen.
            </p>
          </div>

          <nav aria-label="Footer navigatie">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Navigatie
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
          </nav>

          <nav aria-label="Footer diensten">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Diensten
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
          </nav>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
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
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {SITE.name}. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-muted">Websites · Automatisering · AI-oplossingen</p>
        </div>
      </Container>
    </footer>
  );
}
