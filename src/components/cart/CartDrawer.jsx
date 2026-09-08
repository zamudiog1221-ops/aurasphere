import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Image } from "@/components/ui/image";

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateCart, removeFromCart, subtotal, goToCheckout } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const currencySymbol = "$";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-carbon hairline-l flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            role="dialog"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 hairline-b">
              <div className="flex items-center gap-2">
                <ShoppingBag size={16} className="text-amber" />
                <h2 className="font-mono-data text-xs tracking-[0.2em] text-alabaster uppercase">
                  Your Cart
                </h2>
                <span className="text-xs text-slate2">({items.length})</span>
              </div>
              <button
                onClick={closeCart}
                className="text-slate2 hover:text-alabaster transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-6">
                  <ShoppingBag size={32} className="text-slate2/40 mb-5" strokeWidth={1} />
                  <p className="font-display text-2xl text-alabaster mb-2">Your cart is quiet.</p>
                  <p className="text-sm text-slate2 max-w-xs">
                    Add LUMEN to begin building your sanctuary.
                  </p>
                  <button
                    onClick={closeCart}
                    className="mt-7 text-xs font-mono-data tracking-[0.2em] text-amber hover:text-amber-soft transition-colors uppercase"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4">
                      <div className="w-20 h-24 shrink-0 overflow-hidden bg-secondary">
                        <Image
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          fittingType="fill"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2">
                          <h3 className="font-display text-lg text-alabaster leading-tight">
                            {item.title}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate2 hover:text-amber transition-colors shrink-0"
                            aria-label={`Remove ${item.title}`}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <p className="text-xs text-slate2 mt-0.5">{item.variantTitle}</p>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center hairline">
                            <button
                              onClick={() => updateCart(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-slate2 hover:text-alabaster transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-8 text-center text-sm text-alabaster font-mono-data">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateCart(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-slate2 hover:text-alabaster transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <span className="text-sm text-alabaster font-mono-data">
                            {currencySymbol}
                            {(Number(item.price) * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="hairline-t px-6 py-6 bg-carbon">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono-data tracking-[0.2em] text-slate2 uppercase">
                    Subtotal
                  </span>
                  <span className="font-display text-2xl text-alabaster">
                    {currencySymbol}
                    {subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="text-[0.7rem] text-slate2 mb-4 text-center">
                  Shipping &amp; taxes calculated at checkout.
                </p>
                <button
                  onClick={goToCheckout}
                  className="btn-shimmer w-full h-14 bg-amber text-carbon font-mono-data text-xs tracking-[0.25em] uppercase hover:bg-amber-soft transition-colors"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}