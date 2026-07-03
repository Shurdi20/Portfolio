"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Bot, Globe, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    icon: Globe,
    title: "Webdesign",
    description:
      "Op maat ontworpen, conversiegerichte websites die jouw merk neerzetten als dé logische keuze — gebouwd voor snelheid, SEO en groei.",
    points: ["Design & development", "E-commerce", "SEO & prestaties"],
  },
  {
    icon: Workflow,
    title: "Automatiseringen",
    description:
      "We halen repetitief werk uit je bedrijf. Gekoppelde systemen, automatische opvolging en workflows die doorwerken terwijl jij slaapt.",
    points: ["Workflow-automatisering", "CRM & integraties", "Leadopvolging"],
  },
  {
    icon: Bot,
    title: "AI-oplossingen",
    description:
      "Praktische AI die zichzelf terugverdient: slimme assistenten, contentmachines en datagedreven tools op maat van jouw processen.",
    points: ["AI-assistenten", "AI-tools op maat", "Procesintelligentie"],
  },
];

/** A single service card with 3D tilt, cursor-tracked glow and animated arrow. */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), {
    stiffness: 150,
    damping: 18,
  });
  const glow = useTransform(
    [mx, my],
    (values) =>
      `radial-gradient(420px circle at ${(values[0] as number) * 100}% ${
        (values[1] as number) * 100
      }%, rgba(184,255,0,0.10), transparent 65%)`
  );

  const Icon = service.icon;

  return (
    <Reveal delay={index * 0.12} className="perspective-1200 h-full">
      <motion.article
        ref={ref}
        onMouseMove={(e) => {
          if (reduce) return;
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return;
          mx.set((e.clientX - rect.left) / rect.width);
          my.set((e.clientY - rect.top) / rect.height);
        }}
        onMouseLeave={() => {
          mx.set(0.5);
          my.set(0.5);
        }}
        style={reduce ? undefined : { rotateX, rotateY }}
        className="preserve-3d group relative h-full overflow-hidden rounded-3xl border border-line bg-card p-8 transition-colors duration-500 hover:border-accent/30 lg:p-10"
      >
        {/* cursor-tracked glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glow }}
        />

        <div style={{ transform: "translateZ(30px)" }} className="relative">
          <div className="mb-8 flex items-start justify-between">
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-line bg-surface text-accent transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_-6px_var(--color-accent-glow)]">
              <Icon className="h-6 w-6" />
            </span>
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line text-secondary transition-colors duration-500 group-hover:border-accent/40 group-hover:text-accent">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-5 group-hover:translate-x-5" />
              <ArrowUpRight className="absolute h-4 w-4 -translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
            </span>
          </div>

          <p className="mb-2 text-xs font-medium tracking-[0.24em] text-secondary">
            0{index + 1}
          </p>
          <h3 className="font-display text-2xl font-semibold tracking-tight lg:text-3xl">
            {service.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-secondary lg:text-base">
            {service.description}
          </p>

          <ul className="mt-8 space-y-2.5 border-t border-line pt-6">
            {service.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm text-primary/80"
              >
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="py-28 lg:py-40">
      <div className="container-site">
        <SectionHeading
          eyebrow="Diensten"
          title="Alles wat je groei nodig heeft"
          description="Drie disciplines, één doel: een digitale aanwezigheid die klanten wint en een backoffice die zichzelf runt."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
