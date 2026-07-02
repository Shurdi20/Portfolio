import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic-button";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-background hover:bg-[#c9ff33] shadow-[0_0_0_0_rgba(184,255,0,0)] hover:shadow-[0_0_30px_rgba(184,255,0,0.45)]",
        secondary:
          "border border-white/15 text-foreground hover:border-accent/60 hover:text-accent bg-white/[0.02]",
        ghost: "text-foreground/80 hover:text-accent",
      },
      size: {
        default: "h-13 px-7 text-[15px] py-3.5",
        lg: "h-14 px-9 text-base py-4",
        sm: "h-10 px-5 text-sm py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  showArrow?: boolean;
  magnetic?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant,
  size,
  className,
  showArrow = false,
  magnetic = true,
  onClick,
}: ButtonProps) {
  const content = (
    <span className={cn(buttonVariants({ variant, size }), className)}>
      {children}
      {showArrow && (
        <ArrowUpRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
    </span>
  );

  const inner = href ? (
    <Link href={href} onClick={onClick} data-cursor-hover>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} data-cursor-hover>
      {content}
    </button>
  );

  if (!magnetic) return inner;

  return <Magnetic>{inner}</Magnetic>;
}
