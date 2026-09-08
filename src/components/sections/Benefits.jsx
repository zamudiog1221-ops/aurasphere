import React from "react";
import { Droplet, Flame, Leaf } from "lucide-react";
import { useProduct } from "@/context/ProductContext";
import Reveal from "@/components/Reveal";

const ICONS = { droplet: Droplet, flame: Flame, leaf: Leaf };

export default function Benefits() {
  const { product } = useProduct();
  if (!product) return null;
  const benefits = product.benefits;

  return (
    <section className="bg-carbon hairline-t py-20 md:py-32">
      <div className="mx-auto max-w-gallery px-5 md:px-10">
        <Reveal className="max-w-2xl mb-14 md:mb-20">
          <p className="eyebrow mb-5">Why LUMEN</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-alabaster text-balance">
            Three reasons it earns its surface.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {benefits.map((b, i) => {
            const Icon = ICONS[b.icon] || Droplet;
            return (
              <Reveal
                key={b.id}
                delay={i * 0.1}
                className="px-0 md:px-8 py-10 md:py-4 first:pl-0 first:md:pl-0 last:pr-0"
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono-data text-xs text-slate2/60 tracking-widest pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <Icon size={26} strokeWidth={1.25} className="text-amber mb-5" />
                    <h3 className="font-display text-2xl md:text-3xl text-alabaster leading-tight mb-3">
                      {b.title}
                    </h3>
                    <p className="text-slate2 text-sm leading-relaxed max-w-xs">{b.copy}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}