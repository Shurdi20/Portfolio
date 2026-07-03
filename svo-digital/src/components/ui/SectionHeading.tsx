import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/** Consistent section intro: numbered eyebrow, display title, optional description. */
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
        "mb-14 max-w-3xl md:mb-20",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal y={16}>
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-accent",
            align === "center" && "justify-center"
          )}
        >
          {align === "left" && <span className="h-px w-8 bg-accent/60" aria-hidden />}
          {eyebrow}
        </p>
      </Reveal>
      <TextReveal
        as="h2"
        text={title}
        className="font-display text-4xl font-semibold tracking-tight text-gradient sm:text-5xl lg:text-6xl"
      />
      {description && (
        <Reveal delay={0.15} y={20}>
          <p
            className={cn(
              "mt-6 max-w-xl text-base leading-relaxed text-secondary sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
