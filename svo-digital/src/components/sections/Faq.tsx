"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    question: "How much does a project cost?",
    answer:
      "Every project is scoped individually, but most websites start around €4,000 and automation or AI projects around €2,500. After your free strategy call you receive a fixed, transparent proposal — no hourly surprises.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most websites launch within 2–5 weeks depending on scope. Automation and AI integrations usually ship in 1–3 weeks. You'll get a clear timeline before we start, and we hit it.",
  },
  {
    question: "Do you work with businesses outside your region?",
    answer:
      "Yes — we work with clients across Europe and beyond. Our process is fully remote-friendly with structured check-ins, interactive previews and a shared project space.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Launch is the start. We offer care plans covering hosting, updates, performance monitoring and continuous improvements — or we hand everything over cleanly if you prefer to manage it in-house.",
  },
  {
    question: "Can you improve our existing website instead of rebuilding?",
    answer:
      "Often, yes. If your foundation is solid we'll recommend a conversion-focused redesign or targeted improvements. If a rebuild genuinely serves you better, we'll show you exactly why.",
  },
  {
    question: "What makes SVO Digital different from other agencies?",
    answer:
      "We combine three disciplines — design, automation and AI — under one roof. Instead of a pretty brochure site, you get a growth system: a website that converts, workflows that save hours and AI that works for your team.",
  },
];

function FaqItem({
  faq,
  open,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[number];
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const panelId = `faq-panel-${index}`;
  return (
    <Reveal delay={index * 0.05} y={16}>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border transition-colors duration-400",
          open ? "border-accent/30 bg-card" : "border-line bg-card/50 hover:border-white/15"
        )}
      >
        <button
          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8 sm:py-6"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
        >
          <span className="font-display text-base font-medium tracking-tight sm:text-lg">
            {faq.question}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors duration-300",
              open ? "border-accent/50 text-accent" : "border-line text-secondary"
            )}
            aria-hidden
          >
            <Plus className="h-4 w-4" />
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="px-6 pb-6 text-sm leading-relaxed text-secondary sm:px-8 sm:text-base">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-line bg-surface/30 py-28 lg:py-40">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            description="Everything you might want to know before we talk. Anything else? Ask us on the call — it's free."
            className="mb-0 lg:sticky lg:top-32"
          />
        </div>
        <div className="space-y-4 lg:col-span-7">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
