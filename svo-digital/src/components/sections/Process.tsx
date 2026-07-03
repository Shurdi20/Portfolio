"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: Compass,
    title: "Discover",
    description:
      "We map your goals, audience and bottlenecks in a focused strategy session — so every decision after this is grounded in your business, not guesswork.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Concept, art direction and pixel-perfect UI. You see interactive previews early and often, and nothing moves forward without your sign-off.",
  },
  {
    icon: Code2,
    title: "Develop",
    description:
      "Clean, fast, scalable engineering. Websites, automations and AI integrations built on modern foundations and tested on every device.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "We ship, measure and refine. Analytics, performance monitoring and a growth plan mean launch day is the start — not the finish line.",
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
          eyebrow="Process"
          title="From first call to launch day"
          description="A proven four-step process that keeps you in control and your project on schedule."
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
                    STEP 0{i + 1}
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
