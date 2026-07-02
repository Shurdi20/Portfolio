import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";

const LOGOS = [
  "Northgate", "Velvary", "Orbital Labs", "Lumen & Co", "Fjord Studio",
  "Meridian", "Kaira", "Northwind", "Alto Group", "Solace",
];

export function TrustedBy() {
  const loop = [...LOGOS, ...LOGOS];

  return (
    <section className="border-y border-white/[0.06] py-14">
      <Container>
        <Reveal type="fade">
          <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-muted/70">
            Trusted by ambitious teams
          </p>
        </Reveal>
      </Container>

      <div className="relative mt-10 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-48" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-48" />

        <div className="flex w-max animate-marquee items-center gap-16">
          {loop.map((name, i) => (
            <span
              key={i}
              className="font-display text-xl font-medium tracking-tight text-white/25 transition-colors duration-300 hover:text-white/60 sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
