"use client";

import { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/MagneticButton";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  withArrow?: boolean;
  magnetic?: boolean;
};

/** CTA link styled as a button. Primary = accent pill with glow, ghost = hairline outline. */
export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      withArrow = false,
      magnetic = true,
      children,
      ...props
    },
    ref
  ) => {
    const el = (
      <a
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
          size === "md" && "px-6 py-3 text-sm",
          size === "lg" && "px-8 py-4 text-base",
          variant === "primary" &&
            "bg-accent text-black shadow-[0_0_0_0_rgba(184,255,0,0)] hover:shadow-[0_8px_40px_-6px_var(--color-accent-glow)] hover:-translate-y-0.5",
          variant === "ghost" &&
            "border border-line text-primary hover:border-white/25 hover:bg-white/5 hover:-translate-y-0.5",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {withArrow && (
          <span className="relative h-4 w-4 overflow-hidden" aria-hidden>
            <ArrowUpRight className="absolute h-4 w-4 transition-transform duration-300 group-hover:-translate-y-4 group-hover:translate-x-4" />
            <ArrowUpRight className="absolute h-4 w-4 -translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
          </span>
        )}
      </a>
    );

    return magnetic ? <Magnetic>{el}</Magnetic> : el;
  }
);

Button.displayName = "Button";
