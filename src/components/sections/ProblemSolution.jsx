import React from "react";
import { useProduct } from "@/context/ProductContext";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/Reveal";

export default function ProblemSolution() {
  const { product } = useProduct();
  if (!product) return null;
  const { problem, solution } = product.problemSolution;

  return (
    <section className="bg-carbon hairline-t py-20 md:py-32">
      <div className="mx-auto max-w-gallery px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Problem */}
          <Reveal>
            <p className="eyebrow mb-5 text-slate2">The Problem</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-alabaster/90 text-balance mb-5">
              {problem.title}
            </h2>
            <p className="text-slate2 leading-relaxed max-w-md">{problem.copy}</p>
          </Reveal>

          {/* Solution with image */}
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-7">
              <Image
                src={product.lifestyleImages[0].url}
                alt={product.lifestyleImages[0].alt}
                className="w-full h-full object-cover"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent" />
            </div>
            <p className="eyebrow mb-4 text-amber">The Solution</p>
            <h3 className="font-display text-3xl md:text-4xl leading-[1.05] text-alabaster text-balance mb-4">
              {solution.title}
            </h3>
            <p className="text-slate2 leading-relaxed max-w-md">{solution.copy}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}