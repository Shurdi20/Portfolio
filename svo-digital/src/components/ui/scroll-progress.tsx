"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-[2px] w-full origin-left bg-accent shadow-[0_0_12px_rgba(184,255,0,0.7)]"
      style={{ scaleX }}
    />
  );
}
