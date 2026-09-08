import React from "react";
import { Star } from "lucide-react";

/**
 * StarRating — display-only star rating.
 * @param {number} rating 0..5 (supports halves)
 * @param {number} [size]
 * @param {string} [className]
 */
export default function StarRating({ rating = 0, size = 16, className = "" }) {
  const rounded = Math.round(rating * 2) / 2;
  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = rounded >= i;
        const half = !filled && rounded >= i - 0.5;
        return (
          <span key={i} className="relative inline-flex" style={{ width: size, height: size }}>
            <Star
              size={size}
              strokeWidth={1.25}
              className="text-amber/30"
              fill="transparent"
            />
            {(filled || half) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: half ? "50%" : "100%" }}
              >
                <Star
                  size={size}
                  strokeWidth={1.25}
                  className="text-amber"
                  fill="currentColor"
                />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}