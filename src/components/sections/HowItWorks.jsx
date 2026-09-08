import React from "react";
import { useProduct } from "@/context/ProductContext";
import Reveal from "@/components/Reveal";

export default function HowItWorks() {
  const { product } = useProduct();
  if (!product) return null;

  return (
    <section className="bg-carbon hairline-t py-20 md:py-32">
      <div className="mx-auto max-w-gallery px-5 md:px-10">
        <Reveal className="max-w-2xl mb-14 md:mb-20">
          <p className="eyebrow mb-5">How It Works</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-alabaster text-balance">
            Three steps to a different room.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 hairline">
          {product.howItWorks.map((step, i) => (
            <Reveal
              key={step.step}
              delay={i * 0.1}
              className="bg-carbon p-8 md:p-12"
            >
              <span className="font-display text-6xl md:text-7xl text-amber/30 leading-none block mb-8">
                {step.step}
              </span>
              <h3 className="font-display text-3xl text-alabaster mb-4">{step.title}</h3>
              <p className="text-slate2 text-sm leading-relaxed max-w-xs">{step.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}