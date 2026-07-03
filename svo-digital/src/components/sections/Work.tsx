"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Project = {
  title: string;
  category: string;
  result: string;
  tags: string[];
  /** CSS-composed preview so the page ships zero image bytes */
  visual: "commerce" | "saas" | "hospitality" | "ai";
};

const projects: Project[] = [
  {
    title: "Bloom Retail",
    category: "E-commerce platform",
    result: "+142% online revenue",
    tags: ["Web Design", "Development", "CRO"],
    visual: "commerce",
  },
  {
    title: "Mira Finance",
    category: "SaaS marketing site",
    result: "3.2× demo requests",
    tags: ["Branding", "Website", "Motion"],
    visual: "saas",
  },
  {
    title: "Kade Architects",
    category: "Portfolio & lead engine",
    result: "68% faster quoting",
    tags: ["Website", "Automation"],
    visual: "hospitality",
  },
  {
    title: "Solstice Health",
    category: "AI patient assistant",
    result: "24/7 support, 0.9s replies",
    tags: ["AI Solutions", "Integration"],
    visual: "ai",
  },
];

/** Abstract UI compositions rendered in pure CSS/SVG — premium previews, zero image weight. */
function ProjectVisual({ variant }: { variant: Project["visual"] }) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]",
        variant === "commerce" &&
          "bg-[radial-gradient(120%_120%_at_10%_10%,#1d2b0a_0%,#0d1206_45%,#080808_100%)]",
        variant === "saas" &&
          "bg-[radial-gradient(120%_120%_at_90%_0%,#101c2b_0%,#0a0f16_50%,#080808_100%)]",
        variant === "hospitality" &&
          "bg-[radial-gradient(120%_120%_at_50%_110%,#231a0c_0%,#120e07_50%,#080808_100%)]",
        variant === "ai" &&
          "bg-[radial-gradient(120%_120%_at_0%_100%,#1a0f24_0%,#0e0913_50%,#080808_100%)]"
      )}
    >
      {/* mock interface fragments */}
      <div className="absolute left-[8%] top-[12%] w-[52%] rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
        <div className="mb-3 h-2 w-1/3 rounded-full bg-white/25" />
        <div className="mb-2 h-2 w-3/4 rounded-full bg-white/10" />
        <div className="h-2 w-2/3 rounded-full bg-white/10" />
        <div className="mt-4 h-8 w-24 rounded-full bg-accent/80" />
      </div>
      <div className="absolute bottom-[14%] right-[10%] w-[38%] rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm">
        <div className="flex items-end gap-1.5">
          {[38, 60, 44, 78, 56, 92, 70].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h * 0.55}px` }}
              className={cn(
                "w-full rounded-sm",
                i === 5 ? "bg-accent/90" : "bg-white/15"
              )}
            />
          ))}
        </div>
      </div>
      <div className="absolute right-[16%] top-[18%] grid h-12 w-12 place-items-center rounded-full border border-accent/40 bg-accent/10">
        <div className="h-4 w-4 rounded-full bg-accent" />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.12} className="group">
      <a
        href="#contact"
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        aria-label={`${project.title} — ${project.category}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
          <ProjectVisual variant={project.visual} />

          {/* hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 translate-y-4 p-7 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm font-medium text-accent">{project.result}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] text-white/85 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* corner arrow */}
          <motion.span
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-accent text-black opacity-0 transition-all duration-500 group-hover:opacity-100"
            aria-hidden
          >
            <ArrowUpRight className="h-5 w-5" />
          </motion.span>
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent lg:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-secondary">{project.category}</p>
          </div>
          <span className="text-xs tabular-nums text-secondary">
            0{index + 1}
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="border-t border-line bg-surface/30 py-28 lg:py-40">
      <div className="container-site">
        <SectionHeading
          eyebrow="Featured Work"
          title="Results our clients can measure"
          description="A selection of projects where design, automation and AI moved the numbers that matter."
        />
        <div className="grid gap-10 md:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {projects.map((project, i) => (
            <div key={project.title} className={cn(i % 2 === 1 && "lg:mt-20")}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
