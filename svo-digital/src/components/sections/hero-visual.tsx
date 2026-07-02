"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Activity, Bot, Sparkles, TrendingUp } from "lucide-react";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto h-[420px] w-full max-w-2xl [perspective:1600px] sm:h-[480px] lg:h-[560px]"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[110px]" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {/* Main dashboard panel */}
        <motion.div
          style={{ x: translateX, y: translateY }}
          className="glass absolute inset-x-0 top-1/2 h-[75%] -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)]"
        >
          {/* window bar */}
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-medium text-accent">
              <span className="size-1.5 animate-pulse-glow rounded-full bg-accent" />
              Live System
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 p-5">
            <div className="col-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="text-xs text-muted">Growth Performance</p>
              <p className="mt-1 font-display text-2xl font-medium">
                +247<span className="text-accent">%</span>
              </p>
              <svg viewBox="0 0 240 70" className="mt-3 w-full overflow-visible">
                <motion.path
                  d="M0 55 C 30 50, 45 20, 70 30 S 110 55, 140 25 S 190 5, 240 15"
                  fill="none"
                  stroke="#B8FF00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                />
                <motion.path
                  d="M0 55 C 30 50, 45 20, 70 30 S 110 55, 140 25 S 190 5, 240 15 L240 70 L0 70 Z"
                  fill="url(#areaGradient)"
                  stroke="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#B8FF00" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#B8FF00" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <Bot className="size-4 text-accent" />
                <p className="mt-2 text-[11px] text-muted">AI Agent</p>
                <p className="text-sm font-medium">Active</p>
              </div>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <Activity className="size-4 text-accent" />
                <p className="mt-2 text-[11px] text-muted">Automations</p>
                <p className="text-sm font-medium">32 running</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 px-5 pb-5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-10 rounded-xl border border-white/[0.06] bg-gradient-to-r from-white/[0.04] to-transparent"
              />
            ))}
          </div>
        </motion.div>

        {/* Floating chip: leads */}
        <motion.div
          style={{ transform: "translateZ(60px)" }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="glass absolute -left-4 top-6 flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 shadow-xl sm:-left-8"
        >
          <div className="flex size-8 items-center justify-center rounded-full bg-accent/15">
            <TrendingUp className="size-4 text-accent" />
          </div>
          <div>
            <p className="text-[11px] text-muted">New Leads</p>
            <p className="text-sm font-semibold">+128 today</p>
          </div>
        </motion.div>

        {/* Floating chip: AI */}
        <motion.div
          style={{ transform: "translateZ(80px)" }}
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="glass absolute -right-4 bottom-8 flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 shadow-xl sm:-right-10"
        >
          <div className="flex size-8 items-center justify-center rounded-full bg-accent/15">
            <Sparkles className="size-4 text-accent" />
          </div>
          <div>
            <p className="text-[11px] text-muted">AI Solutions</p>
            <p className="text-sm font-semibold">Optimizing…</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
