import React from "react";
import { useProduct } from "@/context/ProductContext";
import Reveal from "@/components/Reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Faq() {
  const { product } = useProduct();
  if (!product) return null;

  return (
    <section id="faq" className="bg-carbon hairline-t py-20 md:py-32">
      <div className="mx-auto max-w-gallery px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="eyebrow mb-5">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.04] text-alabaster text-balance">
              Questions, answered.
            </h2>
            <p className="text-slate2 text-sm mt-6 max-w-xs leading-relaxed">
              Can't find what you're looking for? Reach out — we read every
              message.
            </p>
            <a
              href="#contact"
              className="inline-block mt-5 text-xs font-mono-data tracking-[0.2em] text-amber hover:text-amber-soft transition-colors uppercase"
            >
              Contact Us
            </a>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {product.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="hairline-b border-white/10"
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline group">
                    <span className="text-base md:text-lg text-alabaster group-hover:text-amber transition-colors font-body">
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-slate2 text-sm leading-relaxed max-w-xl">
                      {faq.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}