import React from "react";
import { useProduct } from "@/context/ProductContext";
import Reveal from "@/components/Reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Features() {
  const { product } = useProduct();
  if (!product) return null;

  return (
    <section className="bg-carbon hairline-t py-20 md:py-32">
      <div className="mx-auto max-w-gallery px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-5 md:sticky md:top-24 self-start">
            <p className="eyebrow mb-5">The Details</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-alabaster text-balance mb-6">
              Engineered down to the mist.
            </h2>
            <p className="text-slate2 leading-relaxed max-w-sm">
              Every specification is intentional — from the reservoir volume to
              the nozzle geometry. Nothing decorative, nothing wasted.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <Accordion type="single" defaultValue="Key features" collapsible className="w-full">
              {product.features.map((group) => (
                <AccordionItem
                  key={group.category}
                  value={group.category}
                  className="hairline-b border-white/10"
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline group">
                    <span className="font-display text-2xl md:text-3xl text-alabaster group-hover:text-amber transition-colors">
                      {group.category}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <ul className="space-y-3 pt-2">
                      {group.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-slate2 text-sm leading-relaxed"
                        >
                          <span className="text-amber font-mono-data text-xs pt-0.5 shrink-0">
                            —
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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