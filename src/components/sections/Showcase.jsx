import React from "react";
import { useProduct } from "@/context/ProductContext";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/Reveal";

export default function Showcase() {
  const { product } = useProduct();
  if (!product) return null;

  const findImage = (id) =>
    product.lifestyleImages.find((i) => i.id === id) ||
    product.images.find((i) => i.id === id) ||
    product.images[0];

  return (
    <section id="about" className="bg-carbon hairline-t py-20 md:py-32">
      <div className="mx-auto max-w-gallery px-5 md:px-10">
        <Reveal className="max-w-2xl mb-16 md:mb-24">
          <p className="eyebrow mb-5">In the room</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-alabaster text-balance">
            Less object, more atmosphere.
          </h2>
        </Reveal>

        <div className="space-y-20 md:space-y-32">
          {product.showcase.map((block, i) => {
            const img = findImage(block.imageId);
            const isRight = block.align === "right";
            return (
              <div
                key={block.id}
                className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                <Reveal
                  className={`order-2 ${isRight ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <Image
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      fittingType="fill"
                    />
                  </div>
                </Reveal>
                <Reveal
                  delay={0.1}
                  className={`order-1 ${isRight ? "md:order-1" : "md:order-2"}`}
                >
                  <p className="eyebrow mb-5 text-amber">{block.eyebrow}</p>
                  <h3 className="font-display text-3xl md:text-5xl leading-[1.04] text-alabaster text-balance mb-5">
                    {block.title}
                  </h3>
                  <p className="text-slate2 leading-relaxed max-w-md">{block.copy}</p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}