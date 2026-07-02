import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { TextReveal } from "@/components/ui/text-reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal type="fade">
          <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent-glow)]" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <h2 className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-5xl">
        <TextReveal text={title} />
      </h2>
      {description && (
        <Reveal type="slide-up" delay={0.15}>
          <p
            className={cn(
              "max-w-xl text-base leading-relaxed text-muted",
              align === "center" && "max-w-2xl mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
