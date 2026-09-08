import React from "react";
import { useProduct } from "@/context/ProductContext";
import StarRating from "@/components/StarRating";
import Reveal from "@/components/Reveal";

/**
 * SocialProof — placeholder review components.
 * These are NOT fabricated reviews. They render structured slots that a
 * future review platform (Shopify reviews, Judge.me, Yotpo) can populate.
 * `product.rating` / `product.reviewCount` are 0 in mock data, and the cards
 * show a neutral "awaiting reviews" state until real data is connected.
 */
const PLACEHOLDER_REVIEWS = [
  { slot: 1, name: "", title: "", body: "", rating: 0 },
  { slot: 2, name: "", title: "", body: "", rating: 0 },
  { slot: 3, name: "", title: "", body: "", rating: 0 },
];

export default function SocialProof() {
  const { product } = useProduct();
  if (!product) return null;
  const hasReviews = product.reviewCount > 0;

  return (
    <section className="bg-carbon hairline-t py-20 md:py-32">
      <div className="mx-auto max-w-gallery px-5 md:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p className="eyebrow mb-5">In Their Words</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-alabaster text-balance">
            Trusted by the people who live with it.
          </h2>
          <div className="flex items-center justify-center gap-3 mt-7">
            <StarRating rating={product.rating} size={18} />
            <span className="text-sm text-slate2 font-mono-data tracking-wide">
              {hasReviews
                ? `${product.rating.toFixed(1)} / 5 · ${product.reviewCount} reviews`
                : "REVIEWS COMING SOON"}
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 hairline">
          {PLACEHOLDER_REVIEWS.map((slot, i) => (
            <Reveal
              key={slot.slot}
              delay={i * 0.1}
              className="bg-carbon p-8 md:p-10 flex flex-col"
            >
              {hasReviews ? (
                <>
                  <StarRating rating={slot.rating} size={14} />
                  <h3 className="font-display text-2xl text-alabaster mt-5 mb-3">
                    {slot.title}
                  </h3>
                  <p className="text-slate2 text-sm leading-relaxed flex-1">{slot.body}</p>
                  <p className="mt-6 text-xs font-mono-data tracking-wide text-alabaster/70">
                    {slot.name}
                  </p>
                </>
              ) : (
                <>
                  <StarRating rating={0} size={14} />
                  <h3 className="font-display text-2xl text-alabaster/40 mt-5 mb-3">
                    Review slot {slot.slot}
                  </h3>
                  <p className="text-slate2/50 text-sm leading-relaxed flex-1">
                    This card is wired to display a verified customer review.
                    It will populate automatically once the review platform is
                    connected.
                  </p>
                  <p className="mt-6 text-xs font-mono-data tracking-wide text-slate2/50">
                    AWAITING DATA
                  </p>
                </>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}