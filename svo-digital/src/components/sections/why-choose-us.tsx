"use client";

import { Eye, Gem, Target, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { WHY_CHOOSE_US } from "@/lib/data";

const ICONS = [Gem, Target, Eye, TrendingUp];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Waarom wij"
          title="Premium kwaliteit, doelbewust"
          description="We combineren het vakmanschap van een boutique studio met de discipline van een groeigericht engineeringteam."
          className="max-w-2xl"
        />

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <StaggerItem key={item.title} type="slide-up">
                <div className="group h-full bg-background p-7 transition-colors duration-500 hover:bg-card">
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
