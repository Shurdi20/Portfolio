"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Bot, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // mouse-driven 3D rotation of the dashboard cluster
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 120,
    damping: 20,
  });

  // scroll parallax: visual drifts slower than the copy
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 lg:pt-24"
    >
      {/* ambient background: radial accent glow + hairline grid */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[70vh] w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(184,255,0,0.09),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      </div>

      <div className="container-site relative grid items-center gap-16 lg:grid-cols-12">
        {/* copy */}
        <motion.div
          className="lg:col-span-6"
          style={reduce ? undefined : { y: copyY, opacity: fade }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: EASE }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs text-secondary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Ruimte voor nieuwe projecten
          </motion.p>

          <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.98] tracking-tight">
            <TextReveal text="Websites." delay={1.55} className="text-gradient" />
            <br />
            <TextReveal
              text="Automatisering."
              delay={1.7}
              className="text-gradient"
            />
            <br />
            <TextReveal text="AI." delay={1.85} className="accent-gradient-text" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 2.1, ease: EASE }}
            className="mt-7 max-w-md text-lg leading-relaxed text-secondary"
          >
            Wij helpen bedrijven groeien met moderne digitale ervaringen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.3, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#contact" size="lg" withArrow>
              Plan een gratis strategiegesprek
            </Button>
            <Button href="#work" size="lg" variant="ghost">
              Bekijk ons werk
            </Button>
          </motion.div>
        </motion.div>

        {/* 3D floating dashboard */}
        <motion.div
          className="perspective-1200 relative hidden lg:col-span-6 lg:block"
          style={reduce ? undefined : { y: visualY, opacity: fade }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2, ease: EASE }}
        >
          <motion.div
            className="preserve-3d relative mx-auto w-full max-w-[560px]"
            style={reduce ? undefined : { rotateX, rotateY }}
          >
            {/* glow behind the cluster */}
            <div
              aria-hidden
              className="absolute inset-8 rounded-[40px] bg-accent/20 blur-[90px]"
              style={{ transform: "translateZ(-80px)" }}
            />

            {/* main analytics panel */}
            <div
              className="glass relative rounded-3xl p-6 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]"
              style={{ transform: "translateZ(0px)" }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                </div>
                <p className="text-xs text-secondary">growth.svodigital.com</p>
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                Maandelijkse omzet
              </p>
              <p className="mt-1 font-display text-3xl font-semibold">
                €128.400
                <span className="ml-3 align-middle text-sm font-medium text-accent">
                  +37%
                </span>
              </p>

              {/* animated line chart */}
              <svg
                viewBox="0 0 400 140"
                className="mt-6 h-36 w-full"
                fill="none"
                aria-hidden
              >
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#B8FF00" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#B8FF00" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    x2="400"
                    y1={20 + i * 34}
                    y2={20 + i * 34}
                    stroke="rgba(255,255,255,0.06)"
                  />
                ))}
                <motion.path
                  d="M0 120 C 40 112, 70 96, 105 98 S 170 74, 205 68 S 280 52, 315 38 S 375 18, 400 12 L 400 140 L 0 140 Z"
                  fill="url(#chartFill)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 3.2 }}
                />
                <motion.path
                  d="M0 120 C 40 112, 70 96, 105 98 S 170 74, 205 68 S 280 52, 315 38 S 375 18, 400 12"
                  stroke="#B8FF00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 2.6, ease: "easeInOut" }}
                />
              </svg>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Leads", value: "1.248" },
                  { label: "Conversie", value: "6,4%" },
                  { label: "Automatiseringen", value: "32" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-line bg-card/80 px-3 py-2.5"
                  >
                    <p className="text-[10px] uppercase tracking-wider text-secondary">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* floating satellite cards, lifted on the z-axis */}
            <motion.div
              className="glass absolute -left-12 top-[42%] flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]"
              style={{ transform: "translateZ(70px)" }}
              animate={reduce ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/15 text-accent">
                <Bot className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-xs font-medium">AI-assistent live</p>
                <p className="text-[11px] text-secondary">Reageerde in 0,8s</p>
              </div>
            </motion.div>

            <motion.div
              className="glass absolute -right-6 top-1/3 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]"
              style={{ transform: "translateZ(90px)" }}
              animate={reduce ? undefined : { y: [0, 12, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/15 text-accent">
                <Zap className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-xs font-medium">Workflow geautomatiseerd</p>
                <p className="text-[11px] text-secondary">14 uur bespaard p/w</p>
              </div>
            </motion.div>

            <motion.div
              className="glass absolute -bottom-8 left-12 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]"
              style={{ transform: "translateZ(50px)" }}
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/15 text-accent">
                <TrendingUp className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-xs font-medium">Conversie +37%</p>
                <p className="text-[11px] text-secondary">Afgelopen 30 dagen</p>
              </div>
            </motion.div>

            {/* small decorative chip floating deepest */}
            <motion.div
              className="absolute -top-6 right-16 grid h-11 w-11 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent"
              style={{ transform: "translateZ(120px)" }}
              animate={reduce ? undefined : { y: [0, -8, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-line p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-accent"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
