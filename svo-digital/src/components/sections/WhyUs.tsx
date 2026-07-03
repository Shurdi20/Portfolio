import { Gauge, Gem, MessagesSquare, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

const stats = [
  { value: 60, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 3, suffix: "×", label: "Average lead growth" },
  { value: 14, suffix: " days", label: "Typical time to launch" },
];

const reasons = [
  {
    icon: Gem,
    title: "Premium by default",
    description:
      "No templates, no shortcuts. Every pixel is designed for your brand and every line of code is written to last.",
  },
  {
    icon: Gauge,
    title: "Built for performance",
    description:
      "Fast load times, flawless responsiveness and technical SEO baked in — because speed converts and Google notices.",
  },
  {
    icon: MessagesSquare,
    title: "A partner, not a vendor",
    description:
      "Direct communication, honest advice and proactive ideas. You always know exactly where your project stands.",
  },
  {
    icon: ShieldCheck,
    title: "Future-proof technology",
    description:
      "Modern stacks, scalable automation and AI that grows with you — so today's investment keeps paying off tomorrow.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden border-t border-line bg-surface/30 py-28 lg:py-40"
    >
      {/* ambient corner glow */}
      <div
        aria-hidden
        className="absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-accent/[0.05] blur-[120px]"
      />

      <div className="container-site relative">
        <SectionHeading
          eyebrow="Why SVO Digital"
          title="Chosen for craft, kept for results"
          description="Businesses stay with us because we combine agency-level craft with the speed and care of a dedicated partner."
        />

        {/* stat band */}
        <Reveal className="mb-20">
          <div className="grid divide-y divide-line overflow-hidden rounded-3xl border border-line bg-card sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {stats.map((stat) => (
              <div key={stat.label} className="p-8 lg:p-10">
                <p className="font-display text-4xl font-semibold tracking-tight text-accent lg:text-5xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={(i % 2) * 0.1}>
                <div className="group flex h-full gap-6 rounded-3xl border border-line bg-card/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/25 hover:bg-card lg:p-9">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent transition-shadow duration-500 group-hover:shadow-[0_0_26px_-6px_var(--color-accent-glow)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-secondary lg:text-base">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
