"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Client stories"
          title="Don't just take our word for it"
          align="center"
          className="mx-auto"
        />

        <Reveal type="scale" delay={0.1} className="mt-16">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/[0.08] bg-card px-8 py-14 text-center sm:px-16 sm:py-16"
          >
            <Quote className="mx-auto size-8 text-accent/60" />

            <div className="relative mt-8 min-h-[160px] sm:min-h-[130px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: 40 * direction }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 * direction }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <p className="text-balance font-display text-xl font-medium leading-snug tracking-tight sm:text-2xl">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center justify-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-full bg-accent/15 font-display text-sm font-medium text-accent">
                      {initials(active.name)}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium">{active.name}</p>
                      <p className="text-xs text-muted">{active.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                onClick={() => go(-1)}
                data-cursor-hover
                aria-label="Previous testimonial"
                className="flex size-11 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 hover:border-accent/50 hover:text-accent"
              >
                <ArrowLeft className="size-4" />
              </button>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-400",
                      i === index ? "w-6 bg-accent" : "w-1.5 bg-white/15"
                    )}
                  />
                ))}
              </div>

              <button
                onClick={() => go(1)}
                data-cursor-hover
                aria-label="Next testimonial"
                className="flex size-11 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 hover:border-accent/50 hover:text-accent"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
