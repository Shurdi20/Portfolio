"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const wordVariants = {
  hidden: { y: "110%" },
  visible: { y: "0%" },
};

export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  duration = 0.85,
  once = true,
  as: Tag = "span",
}: TextRevealProps) {
  const words = text.split(" ");
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      aria-label={text}
      className={cn("inline", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      <span aria-hidden="true">
        {words.map((word, i) => (
          <Fragment key={i}>
            <span className="inline-block overflow-hidden pb-[0.15em] -mb-[0.15em] align-bottom">
              <motion.span
                className="inline-block"
                variants={wordVariants}
                transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            </span>
            {i !== words.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </span>
    </MotionTag>
  );
}
