import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * Checkout — placeholder route.
 * In the frontend-only build the cart's "Checkout" resolves here.
 * When Shopify is connected, checkoutService.goToCheckout() will instead
 * redirect directly to the Shopify checkout URL, and this page becomes
 * unreachable (or can be replaced by a Shopify checkout extension).
 */
export default function Checkout() {
  return (
    <div className="min-h-screen bg-carbon flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <p className="eyebrow mb-5 text-amber">Checkout</p>
        <h1 className="font-display text-4xl md:text-5xl text-alabaster mb-5">
          Checkout is almost ready.
        </h1>
        <p className="text-slate2 leading-relaxed mb-8">
          This store will route to a secure Shopify checkout once connected.
          No payment is processed on this site.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono-data tracking-[0.2em] text-amber hover:text-amber-soft transition-colors uppercase"
        >
          <ArrowLeft size={15} /> Back to LUMEN
        </Link>
      </div>
    </div>
  );
}