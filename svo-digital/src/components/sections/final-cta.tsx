"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[420px] w-[900px] rounded-full bg-accent/[0.12] blur-[140px]" />
      </div>

      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-card px-8 py-20 text-center sm:px-16 md:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
            }}
          />

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              <TextReveal text="Ready to grow your business?" as="span" className="block" />
            </h2>
            <Reveal type="slide-up" delay={0.2}>
              <p className="mx-auto mt-6 max-w-lg text-lg text-muted">
                Let&rsquo;s build something exceptional.
              </p>
            </Reveal>
            <Reveal type="scale" delay={0.35}>
              <div className="mt-10">
                <Button href="mailto:hello@svodigital.com" size="lg" showArrow>
                  Book a Free Strategy Call
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
