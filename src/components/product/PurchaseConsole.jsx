import React, { useMemo } from "react";
import { Minus, Plus, Check, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { productService } from "@/services/productService";
import StarRating from "@/components/StarRating";

const TRUST_ICONS = [Truck, RotateCcw, ShieldCheck];

export default function PurchaseConsole({
  product,
  selectedOptions,
  onSelectOption,
  quantity,
  onQuantityChange,
}) {
  const { addToCart } = useCart();

  const variant = useMemo(
    () => productService.getVariantForOptions(product, selectedOptions),
    [product, selectedOptions]
  );

  const discount = productService.discountPercent(product);

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
    <div className="flex flex-col">
      {/* Rating placeholder */}
      <div className="flex items-center gap-3 mb-5">
        <StarRating rating={product.rating} size={15} />
        <span className="text-xs text-slate2 font-mono-data tracking-wide">
          {product.reviewCount > 0
            ? `${product.rating.toFixed(1)} · ${product.reviewCount} reviews`
            : "NEW · REVIEWS COMING SOON"}
        </span>
      </div>

      {/* Title */}
      <h1 className="font-display text-5xl md:text-6xl leading-[0.95] text-alabaster">
        {product.title}
      </h1>
      <p className="mt-3 text-slate2 text-sm tracking-[0.2em] uppercase font-mono-data">
        {product.subtitle}
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-3 mt-7">
        <span className="font-display text-3xl text-alabaster">
          {productService.formatPrice(variant.price, product)}
        </span>
        {discount > 0 && (
          <>
            <span className="text-slate2 line-through text-lg">
              {productService.formatPrice(product.compareAtPrice, product)}
            </span>
            <span className="text-xs font-mono-data tracking-wide text-amber border border-amber/40 px-2 py-0.5">
              SAVE {discount}%
            </span>
          </>
        )}
      </div>

      {/* Description */}
      <p className="mt-6 text-alabaster/70 leading-relaxed text-[0.95rem] max-w-md">
        {product.description}
      </p>

      {/* Variant selectors */}
      <div className="mt-8 space-y-5">
        {product.options.map((opt) => (
          <div key={opt.id}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono-data tracking-[0.2em] text-slate2 uppercase">
                {opt.name}
              </span>
              <span className="text-xs text-alabaster/70">{selectedOptions[opt.name]}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {opt.values.map((val) => {
                const selected = selectedOptions[opt.name] === val.value;
                return (
                  <button
                    key={val.id}
                    onClick={() => onSelectOption(opt.name, val.value)}
                    className={`min-h-12 px-5 text-sm transition-all duration-300 ${
                      selected
                        ? "bg-alabaster text-carbon border border-alabaster"
                        : "bg-transparent text-alabaster border border-white/15 hover:border-white/40"
                    }`}
                  >
                    {val.value}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Quantity + Add to cart */}
      <div className="mt-8 flex items-stretch gap-3">
        <div className="flex items-center hairline">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="w-12 h-14 flex items-center justify-center text-slate2 hover:text-alabaster transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={15} />
          </button>
          <span className="w-10 text-center text-alabaster font-mono-data">{quantity}</span>
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="w-12 h-14 flex items-center justify-center text-slate2 hover:text-alabaster transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={15} />
          </button>
        </div>
        <button
          onClick={handleAdd}
          disabled={!variant.available}
          className="btn-shimmer flex-1 h-14 bg-amber text-carbon font-mono-data text-xs tracking-[0.25em] uppercase hover:bg-amber-soft transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {variant.available ? "Add to Cart" : "Sold Out"}
        </button>
      </div>

      {/* Trust badges */}
      <ul className="mt-8 pt-7 hairline-t grid grid-cols-1 sm:grid-cols-3 gap-4">
        {product.trustBadges.map((badge, i) => {
          const Icon = TRUST_ICONS[i] || Check;
          return (
            <li key={badge} className="flex items-center gap-2.5">
              <Icon size={15} className="text-amber shrink-0" strokeWidth={1.5} />
              <span className="text-xs text-alabaster/70">{badge}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}