"use client";

import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PORTFOLIO_PROJECTS)[number];
  index: number;
}) {
  const isWide = index % 3 === 0;

  return (
    <Reveal type="slide-up" delay={index * 0.05} className={cn(isWide && "md:col-span-2")}>
      <div
        className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-card"
      >
        <div
          className={cn(
            "relative overflow-hidden bg-gradient-to-br",
            project.gradient,
            isWide ? "aspect-[16/9]" : "aspect-[4/5] sm:aspect-[16/11]"
          )}
        >
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-30 transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-display text-[20vw] font-medium text-white/[0.04] transition-transform duration-700 ease-out group-hover:scale-125 md:text-[8vw]"
              aria-hidden
            >
              {project.title.split(" ")[0]}
            </span>
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

          <div className="absolute right-5 top-5 flex size-12 items-center justify-center rounded-full border border-white/15 bg-background/40 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45">
            <ArrowUpRight className="size-5 text-accent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 md:p-8">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-background/40 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                {project.category}
              </p>
              <h3 className="mt-2 font-display text-xl font-medium tracking-tight md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100 md:text-base">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Portfolio() {
  return (
    <section id="work" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Mogelijkheden"
            title="Wat we bouwen, in de praktijk"
            description="Een blik op het soort websites, systemen en AI-producten die we voor onze klanten ontwerpen en bouwen."
          />
          <Reveal type="fade" delay={0.2}>
            <Button href="#contact" variant="secondary" showArrow className="shrink-0">
              Start een project
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PORTFOLIO_PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
