"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/**
 * Custom cursor: a solid accent dot that tracks 1:1 plus a trailing ring on a spring.
 * Mounts only on fine-pointer devices; the native cursor is hidden via
 * body[data-custom-cursor] so touch devices and no-JS are unaffected.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;

    setEnabled(true);
    document.body.dataset.customCursor = "true";

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement | null;
      setHovering(
        Boolean(target?.closest("a, button, [role='button'], [data-cursor]"))
      );
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      delete document.body.dataset.customCursor;
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[130]">
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-accent"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute h-9 w-9 rounded-full border border-accent/50"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.7 : 1,
          backgroundColor: hovering
            ? "rgba(184,255,0,0.08)"
            : "rgba(184,255,0,0)",
        }}
        transition={{ duration: 0.25 }}
      />
    </div>
  );
}
