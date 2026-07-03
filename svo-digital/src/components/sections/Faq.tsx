"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    question: "Wat kost een project?",
    answer:
      "Elk project wordt individueel begroot, maar de meeste websites starten rond €4.000 en automatiserings- of AI-projecten rond €2.500. Na je gratis strategiegesprek ontvang je een vast, transparant voorstel — geen verrassingen achteraf.",
  },
  {
    question: "Hoe lang duurt een gemiddeld project?",
    answer:
      "De meeste websites gaan live binnen 2–5 weken, afhankelijk van de omvang. Automatiserings- en AI-integraties leveren we meestal binnen 1–3 weken op. Je krijgt vooraf een duidelijke planning — en daar houden we ons aan.",
  },
  {
    question: "Werken jullie ook met bedrijven buiten de regio?",
    answer:
      "Ja — we werken met klanten in heel Europa en daarbuiten. Ons proces is volledig remote-vriendelijk met vaste check-ins, interactieve previews en een gedeelde projectomgeving.",
  },
  {
    question: "Wat gebeurt er na de lancering?",
    answer:
      "De lancering is pas het begin. We bieden onderhoudsplannen voor hosting, updates, performancemonitoring en doorlopende verbeteringen — of we dragen alles netjes over als je het liever zelf beheert.",
  },
  {
    question:
      "Kunnen jullie onze bestaande website verbeteren in plaats van opnieuw bouwen?",
    answer:
      "Vaak wel. Als je basis goed is, adviseren we een conversiegericht redesign of gerichte verbeteringen. Is opnieuw bouwen echt beter voor je, dan laten we precies zien waarom.",
  },
  {
    question: "Wat maakt SVO Digital anders dan andere bureaus?",
    answer:
      "Wij combineren drie disciplines — design, automatisering en AI — onder één dak. In plaats van een mooie brochuresite krijg je een groeisysteem: een website die converteert, workflows die uren besparen en AI die voor je team werkt.",
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
            title="Vragen, beantwoord"
            description="Alles wat je wilt weten voordat we elkaar spreken. Nog iets anders? Vraag het tijdens het gesprek — dat is gratis."
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
