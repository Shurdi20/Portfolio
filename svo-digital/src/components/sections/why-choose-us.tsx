"use client";

import { Eye, Gem, Target, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { STATS, WHY_CHOOSE_US } from "@/lib/data";

const ICONS = [Gem, Target, Eye, TrendingUp];

export function WhyChooseUs() {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8">
          <SectionHeading
            eyebrow="Why choose us"
            title="Premium quality. Measurable results."
            description="We combine the craft of a boutique studio with the discipline of a growth-focused engineering team."
          />

          <StaggerGroup className="grid grid-cols-2 gap-6 self-start rounded-3xl border border-white/[0.08] bg-surface p-8 sm:gap-10 sm:p-10" stagger={0.1}>
            {STATS.map((stat) => (
              <StaggerItem key={stat.label} type="fade">
                <p className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} prefix={"prefix" in stat ? stat.prefix : ""} />
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <StaggerGroup className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <StaggerItem key={item.title} type="slide-up">
                <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-card">
                  <Icon className="size-6 text-accent" strokeWidth={1.75} />
                  <h3 className="mt-6 font-display text-lg font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
