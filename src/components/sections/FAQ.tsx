"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section className="py-20 sm:py-28" aria-labelledby="faq-heading">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div id="faq-heading" className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            title="Questions people ask before we start"
            description="Straight answers about the work, the tools and how projects run. If yours isn't here, send me a message."
          />
        </div>
        <ul className="divide-y divide-line rounded-3xl border border-line bg-card">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <li key={faq.question}>
                <h3>
                  <button
                    type="button"
                    id={`faq-button-${index}`}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold sm:text-lg"
                  >
                    {faq.question}
                    <ChevronDown
                      className={cn("h-5 w-5 shrink-0 text-accent transition-transform duration-300", open && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      initial={reduce ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-6 pb-6 text-mute">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
