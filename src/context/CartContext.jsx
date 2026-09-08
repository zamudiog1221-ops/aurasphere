import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import cartService from "@/services/cartService";
import checkoutService from "@/services/checkoutService";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => cartService.getCart());
  const [isOpen, setIsOpen] = useState(false);

  // keep state in sync if another tab mutates the cart
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "lumen_cart_v1") setItems(cartService.getCart());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addToCart = useCallback((item) => {
    setItems(cartService.addItem(item));
    setIsOpen(true);
  }, []);

  const updateCart = useCallback((lineIdValue, quantity) => {
    setItems(cartService.changeItem(lineIdValue, quantity));
  }, []);

  const removeFromCart = useCallback((lineIdValue) => {
    setItems(cartService.removeItem(lineIdValue));
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const goToCheckout = useCallback(async () => {
    const url = await checkoutService.goToCheckout(items);
    // In the frontend-only build this navigates to a placeholder route.
    // When Shopify is connected this resolves to the real Shopify checkout URL.
    window.location.href = url;
  }, [items]);

  const subtotal = cartService.cartSubtotal(items);
  const count = cartService.cartCount(items);

  const value = {
    items,
    isOpen,
    addToCart,
    updateCart,
    removeFromCart,
    openCart,
    closeCart,
    goToCheckout,
    subtotal,
    count,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export default CartProvider;