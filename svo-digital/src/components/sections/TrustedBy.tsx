import { Reveal } from "@/components/ui/Reveal";

const brands = [
  "Northwind Studio",
  "Atlas & Co",
  "Novum Legal",
  "Bloom Retail",
  "Vertex Logistics",
  "Kade Architects",
  "Solstice Health",
  "Mira Finance",
];

/** Infinite wordmark marquee with edge fade — social proof without visual noise. */
export function TrustedBy() {
  return (
    <section aria-label="Vertrouwd door" className="border-y border-line bg-surface/30 py-10">
      <div className="container-site">
        <Reveal y={12} blur={false}>
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.3em] text-secondary">
            Vertrouwd door ambitieuze bedrijven
          </p>
        </Reveal>
      </div>
      <div
        className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]"
        aria-hidden
      >
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="whitespace-nowrap font-display text-lg font-medium text-white/25 transition-colors duration-300 hover:text-white/60"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
