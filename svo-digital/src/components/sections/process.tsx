"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PROCESS_STEPS } from "@/lib/data";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Hoe we werken"
          title="Een doordacht proces, van begin tot eind"
          description="Vier gestructureerde fasen houden elke samenwerking gefocust, transparant en op schema."
        />

        <div ref={ref} className="relative mt-14 grid grid-cols-1 gap-x-12 md:grid-cols-[auto_1fr]">
          <div className="relative hidden w-px self-stretch bg-white/[0.08] md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-0 top-0 w-px bg-accent shadow-[0_0_16px_var(--color-accent-glow)]"
            />
          </div>

          <div className="flex flex-col">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal
                key={step.number}
                type="slide-up"
                delay={i * 0.05}
                className={
                  "group grid grid-cols-1 gap-4 border-t border-white/[0.08] py-8 first:border-t-0 md:grid-cols-[80px_1fr] md:gap-8 md:py-10"
                }
              >
                <span className="font-display text-3xl font-medium text-white/15 transition-colors duration-500 group-hover:text-accent md:text-4xl">
                  {step.number}
                </span>
                <div className="max-w-xl">
                  <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
