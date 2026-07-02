"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { FAQS } from "@/lib/data";
import { cn } from "@/lib/utils";

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  const panelId = `faq-panel-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <Reveal type="slide-up" delay={index * 0.04} className="border-b border-white/[0.08]">
      <button
        id={triggerId}
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-7 text-left"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span
          className={cn(
            "font-display text-lg font-medium tracking-tight transition-colors duration-300 sm:text-xl",
            isOpen ? "text-accent" : "text-foreground"
          )}
        >
          {question}
        </span>
        <span
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-400",
            isOpen && "rotate-45 border-accent/50 text-accent"
          )}
        >
          <Plus className="size-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 leading-relaxed text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Vragen, beantwoord"
            description="Alles wat je moet weten voordat je een gesprek boekt. Staat je vraag er niet bij? Stel hem gerust."
          />

          <div>
            {FAQS.map((faq, i) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
