"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Entry loading animation: wordmark reveal, then the whole veil wipes upward.
 * Kept under a second so it feels like intent, not a wait.
 */
export function Preloader() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[140] flex items-center justify-center bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          <div className="overflow-hidden">
            <motion.p
              className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
              initial={{ y: "120%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-120%", opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              SVO<span className="text-accent">.</span>Digital
            </motion.p>
          </div>
          <motion.div
            className="absolute bottom-16 h-px w-40 origin-left bg-accent/70"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
