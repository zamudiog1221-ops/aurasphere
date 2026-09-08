import React, { createContext, useContext, useEffect, useState } from "react";
import productService from "@/services/productService";

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    productService
      .getProduct()
      .then((p) => {
        if (active) setProduct(p);
      })
      .catch((e) => {
        if (active) setError(e);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <ProductContext.Provider value={{ product, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProduct must be used within ProductProvider");
  return ctx;
}

export default ProductProvider;