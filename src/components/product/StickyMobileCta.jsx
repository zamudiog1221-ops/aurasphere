import React, { useEffect, useState, useMemo } from "react";
import { useProduct } from "@/context/ProductContext";
import { useCart } from "@/context/CartContext";
import { productService } from "@/services/productService";

/**
 * StickyMobileCta — appears on mobile after the user scrolls past the hero
 * purchase console, keeping Add to Cart within thumb reach.
 *
 * NOTE: adds the currently-first variant. If you lift variant selection into
 * shared state later, swap `product.variants[0]` for the active variant.
 */
export default function StickyMobileCta() {
  const { product } = useProduct();
  const { addToCart } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const variant = useMemo(() => product?.variants[0], [product]);
  if (!product || !variant) return null;

  const handleAdd = () => {
    addToCart({
      variantId: variant.id,
      productId: product.id,
      title: product.title,
      variantTitle: variant.title,
      price: variant.price,
      image: product.images.find((i) => i.id === variant.imageId)?.url || product.images[0].url,
      quantity: 1,
    });
  };

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 bg-carbon/90 backdrop-blur-xl hairline-t px-4 py-3 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-display text-lg text-alabaster leading-none truncate">{product.title}</p>
          <p className="text-xs text-slate2 font-mono-data mt-1">
            {productService.formatPrice(variant.price, product)}
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="btn-shimmer h-12 px-7 bg-amber text-carbon font-mono-data text-[0.7rem] tracking-[0.2em] uppercase hover:bg-amber-soft transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}