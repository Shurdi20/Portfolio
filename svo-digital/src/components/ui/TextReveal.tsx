"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

/**
 * Masked word-by-word reveal — each word slides up from behind an overflow mask.
 *
 * Two subtleties:
 * - visibility is observed on the (unclipped) parent tag, not the words: a word
 *   translated below its overflow-hidden mask never intersects the viewport,
 *   so whileInView on the word itself would never fire.
 * - className is re-applied on each word span: background-clip:text gradients
 *   cannot clip through transformed children, so they must live on the words.
 */
export function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = "span",
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className={cn(
            "inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom",
            i < words.length - 1 && "mr-[0.25em]"
          )}
        >
          <motion.span
            className={cn("inline-block will-change-transform", className)}
            initial={reduce ? { opacity: 0 } : { y: "110%" }}
            animate={
              inView
                ? reduce
                  ? { opacity: 1 }
                  : { y: "0%" }
                : undefined
            }
            transition={{
              duration: 0.8,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
