"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: Compass,
    title: "Ontdekken",
    description:
      "We brengen je doelen, doelgroep en knelpunten in kaart in een gerichte strategiesessie — zodat elke beslissing daarna gebaseerd is op jouw bedrijf, niet op giswerk.",
  },
  {
    icon: PenTool,
    title: "Ontwerpen",
    description:
      "Concept, art direction en pixel-perfect UI. Je ziet vroeg en vaak interactieve previews, en niets gaat verder zonder jouw akkoord.",
  },
  {
    icon: Code2,
    title: "Ontwikkelen",
    description:
      "Schone, snelle en schaalbare techniek. Websites, automatiseringen en AI-integraties gebouwd op moderne fundamenten en getest op elk apparaat.",
  },
  {
    icon: Rocket,
    title: "Lanceren",
    description:
      "We gaan live, meten en verfijnen. Analytics, performancemonitoring en een groeiplan maken de lancering het startpunt — niet de finish.",
  },
];

/** Timeline where the accent line draws itself as you scroll through the steps. */
export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-28 lg:py-40">
      <div className="container-site">
        <SectionHeading
          eyebrow="Werkwijze"
          title="Van eerste gesprek tot livegang"
          description="Een bewezen proces in vier stappen dat jou de controle geeft en je project op schema houdt."
        />

        <ol ref={listRef} className="relative mx-auto max-w-3xl">
          {/* track + animated draw line */}
          <div
            aria-hidden
            className="absolute left-[27px] top-2 bottom-2 w-px bg-line sm:left-[31px]"
          />
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute left-[27px] top-2 bottom-2 w-px origin-top bg-accent shadow-[0_0_12px_var(--color-accent-glow)] sm:left-[31px]"
          />
          <motion.div
            aria-hidden
            style={{ top: glowY }}
            className="absolute left-[27px] h-16 w-px -translate-y-full bg-gradient-to-b from-transparent to-accent blur-[2px] sm:left-[31px]"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative pb-14 pl-20 last:pb-0 sm:pl-24">
                {/* icon sits outside the Reveal: its transform would otherwise
                    become the containing block and drag the icon over the copy */}
                <span className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-2xl border border-line bg-card text-accent sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6" />
                </span>
                <Reveal delay={i * 0.08}>
                  <p className="mb-1 text-xs font-medium tracking-[0.24em] text-secondary">
                    STAP 0{i + 1}
                  </p>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-secondary">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
