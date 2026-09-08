import React, { useState, useMemo } from "react";
import { useProduct } from "@/context/ProductContext";
import { useCart } from "@/context/CartContext";
import { productService } from "@/services/productService";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/Reveal";

export default function FinalCta() {
  const { product } = useProduct();
  const { addToCart } = useCart();
  const [quantity] = useState(1);

  const variant = useMemo(
    () => (product ? product.variants[0] : null),
    [product]
  );

  if (!product) return null;
  const ctaImage = product.lifestyleImages.find((i) => i.id === "life-cta") || product.lifestyleImages[3];

  const handleAdd = () => {
    addToCart({
      variantId: variant.id,
      productId: product.id,
      title: product.title,
      variantTitle: variant.title,
      price: variant.price,
      image: product.images.find((i) => i.id === variant.imageId)?.url || product.images[0].url,
      quantity,
    });
  };

  return (
    <section className="bg-carbon hairline-t py-20 md:py-32">
      <div className="mx-auto max-w-gallery px-5 md:px-10">
        <div className="relative overflow-hidden bg-secondary aspect-[16/10] md:aspect-[16/8]">
          <Image
            src={ctaImage.url}
            alt={ctaImage.alt}
            className="w-full h-full object-cover"
            fittingType="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 to-transparent" />

          <div className="relative h-full flex items-center">
            <Reveal className="px-6 md:px-16 max-w-xl">
              <p className="eyebrow mb-5 text-amber">Bring it home</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-alabaster text-balance mb-5">
                The room you want is one object away.
              </h2>
              <p className="text-alabaster/80 leading-relaxed mb-7 max-w-md">
                {product.description}
              </p>
              <div className="flex items-baseline gap-3 mb-7">
                <span className="font-display text-3xl text-alabaster">
                  {productService.formatPrice(variant.price, product)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-slate2 line-through text-lg">
                    {productService.formatPrice(product.compareAtPrice, product)}
                  </span>
                )}
              </div>
              <button
                onClick={handleAdd}
                className="btn-shimmer inline-flex items-center justify-center h-14 px-10 bg-amber text-carbon font-mono-data text-xs tracking-[0.25em] uppercase hover:bg-amber-soft transition-colors"
              >
                Add to Cart
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}