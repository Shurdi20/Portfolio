"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "SVO Digital heeft onze website opnieuw gebouwd en ons hele intakeproces geautomatiseerd. Binnen drie maanden verdubbelde het aantal gekwalificeerde leads — en we zijn de helft minder tijd kwijt aan administratie.",
    name: "Laura Bennett",
    role: "Oprichter, Bloom Retail",
    initials: "LB",
    hue: "from-lime-300/30 to-emerald-500/20",
  },
  {
    quote:
      "Het afwerkingsniveau is van een andere planeet. Iedereen die op de nieuwe site komt, denkt dat we een veel groter bedrijf zijn — en onze demo-aanvragen bewijzen het.",
    name: "Marc de Vries",
    role: "CEO, Mira Finance",
    initials: "MV",
    hue: "from-sky-300/30 to-indigo-500/20",
  },
  {
    quote:
      "Hun AI-assistent beantwoordt patiëntvragen dag en nacht in onze eigen tone of voice. Het voelde als sciencefiction, tot ze het in drie weken opleverden.",
    name: "Dr. Sofia Ramos",
    role: "Directeur, Solstice Health",
    initials: "SR",
    hue: "from-fuchsia-300/30 to-purple-500/20",
  },
  {
    quote:
      "Heldere communicatie, nul verrassingen en een resultaat waarvan onze concurrenten vroegen wie het gebouwd had. De beste investering die we dit jaar deden.",
    name: "Jonas Kade",
    role: "Partner, Kade Architecten",
    initials: "JK",
    hue: "from-amber-300/30 to-orange-500/20",
  },
];

const AUTOPLAY_MS = 6000;

export function Testimonials() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const go = useCallback((dir: number) => {
    setIndex(([i]) => [
      (i + dir + testimonials.length) % testimonials.length,
      dir,
    ]);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, reduce, go]);

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="py-28 lg:py-40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Referenties"
          title="Wat onze klanten zeggen"
          align="center"
        />

        <Reveal className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-card p-8 sm:p-12 lg:p-16">
            <Quote
              aria-hidden
              className="absolute right-8 top-8 h-10 w-10 text-accent/15 sm:h-14 sm:w-14"
            />

            <div className="relative min-h-[260px] sm:min-h-[220px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.figure
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 48, filter: "blur(6px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: direction * -48, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="text-lg leading-relaxed text-primary/90 sm:text-xl lg:text-2xl">
                    “{current.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span
                      className={cn(
                        "grid h-12 w-12 place-items-center rounded-full border border-line bg-gradient-to-br font-display text-sm font-semibold text-white",
                        current.hue
                      )}
                      aria-hidden
                    >
                      {current.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">
                        {current.name}
                      </span>
                      <span className="block text-sm text-secondary">
                        {current.role}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* controls */}
            <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
              <div className="flex gap-2" role="tablist" aria-label="Referenties">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Referentie van ${t.name}`}
                    onClick={() => setIndex([i, i > index ? 1 : -1])}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-400",
                      i === index
                        ? "w-8 bg-accent"
                        : "w-3 bg-white/15 hover:bg-white/30"
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => go(-1)}
                  aria-label="Vorige referentie"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-secondary transition-all duration-300 hover:border-accent/40 hover:text-accent"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Volgende referentie"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-secondary transition-all duration-300 hover:border-accent/40 hover:text-accent"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
