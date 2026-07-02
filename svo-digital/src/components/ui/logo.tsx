import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("font-display font-semibold leading-none tracking-tight", className)}>
      <span className="block text-xl">
        SVO<span className="text-accent">.</span>
      </span>
      <span className="mt-0.5 block text-[10px] font-normal uppercase tracking-[0.2em] text-muted">
        Digital
      </span>
    </span>
  );
}
