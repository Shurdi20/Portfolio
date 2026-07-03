"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowScale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden py-32 lg:py-48"
    >
      {/* breathing accent glow that grows as the section enters */}
      <motion.div
        aria-hidden
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(184,255,0,0.12),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]"
      />

      <div className="container-site relative text-center">
        <Reveal y={12}>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Klaar om je bedrijf te laten groeien?
          </p>
        </Reveal>

        <h2 className="mx-auto max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">
          <TextReveal text="Laten we samen iets" className="text-gradient" />
          <br />
          <TextReveal
            text="uitzonderlijks bouwen."
            delay={0.25}
            className="accent-gradient-text"
          />
        </h2>

        <Reveal delay={0.35} y={20}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-secondary">
            Plan een gratis strategiegesprek van 30 minuten. We kijken naar je
            doelen, spotten je grootste kansen en laten precies zien wat wij
            zouden bouwen — geheel vrijblijvend.
          </p>
        </Reveal>

        <Reveal delay={0.5} y={20}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="mailto:hello@svodigital.com?subject=Gratis%20strategiegesprek"
              size="lg"
              withArrow
              className="px-10 py-5 text-lg"
            >
              Plan een gratis strategiegesprek
            </Button>
            <p className="text-sm text-secondary">
              Meestal binnen 24 uur reactie
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
