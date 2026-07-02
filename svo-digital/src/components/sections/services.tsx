"use client";

import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Globe, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SERVICES } from "@/lib/data";

const ICONS = { websites: Globe, automation: Workflow, ai: Bot };

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = ICONS[service.id as keyof typeof ICONS];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <StaggerItem type="slide-up">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-card p-7 md:p-8"
        style={
          {
            "--x": "50%",
            "--y": "50%",
          } as React.CSSProperties
        }
      >
        {/* Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--x) var(--y), rgba(184,255,0,0.12), transparent 70%)",
          }}
        />

        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between">
            <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent/10">
              <Icon className="size-6 text-accent" strokeWidth={1.75} />
            </div>
            <span className="font-display text-sm text-white/20">{service.number}</span>
          </div>

          <h3 className="mt-6 font-display text-xl font-medium tracking-tight md:text-2xl">
            {service.title}
          </h3>
          <p className="mt-4 flex-1 leading-relaxed text-muted">{service.description}</p>

          <ul className="mt-6 flex flex-col gap-2.5 border-t border-white/[0.06] pt-6">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-sm text-white/70">
                <span className="size-1 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground">
            Meer info
            <ArrowUpRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </motion.div>
    </StaggerItem>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Wat we doen"
          title="Drie manieren waarop we je helpen groeien"
          description="Elke samenwerking is maatwerk — maar elk project bouwt voort op dezelfde drie kerndisciplines."
        />

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.12}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
