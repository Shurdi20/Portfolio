"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { Reveal } from "@/components/ui/reveal";
import { HeroVisual } from "@/components/sections/hero-visual";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 md:pt-32 lg:pt-36">
      {/* Ambient background grid + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[140px]" />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal type="fade" delay={0.1}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-muted">
              <span className="size-1.5 animate-pulse-glow rounded-full bg-accent motion-reduce:animate-none" />
              Nu strategiegesprekken inplannen voor Q3
            </div>
          </Reveal>

          <h1 className="font-display text-[11vw] font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <TextReveal
              text="Webdesign"
              as="span"
              className="block text-gradient"
              stagger={0.03}
              duration={0.55}
            />
            <TextReveal
              text="Automatiseringen"
              as="span"
              className="block text-gradient"
              delay={0.08}
              stagger={0.03}
              duration={0.55}
            />
            <TextReveal
              text="AI-oplossingen"
              as="span"
              className="block text-gradient-accent"
              delay={0.16}
              stagger={0.03}
              duration={0.55}
            />
          </h1>

          <Reveal type="slide-up" delay={0.55}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Wij helpen bedrijven groeien met moderne digitale ervaringen.
            </p>
          </Reveal>

          <Reveal type="slide-up" delay={0.7}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <Button href="#contact" size="lg" showArrow>
                Boek een Gratis Strategiegesprek
              </Button>
              <Button href="#work" variant="secondary" size="lg">
                Bekijk ons werk
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20"
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  );
}
