import React, { useState, useMemo } from "react";
import { useProduct } from "@/context/ProductContext";
import { productService } from "@/services/productService";
import ProductGallery from "@/components/product/ProductGallery";
import PurchaseConsole from "@/components/product/PurchaseConsole";

export default function Hero() {
  const { product, loading } = useProduct();
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // initialize selected options once product loads
  React.useEffect(() => {
    if (product && !selectedOptions) {
      const init = {};
      product.options.forEach((opt) => (init[opt.name] = opt.values[0].value));
      setSelectedOptions(init);
    }
  }, [product, selectedOptions]);

  const variant = useMemo(() => {
    if (!product || !selectedOptions) return null;
    return productService.getVariantForOptions(product, selectedOptions);
  }, [product, selectedOptions]);

  const handleSelect = (name, value) =>
    setSelectedOptions((prev) => ({ ...prev, [name]: value }));

  if (loading || !product || !selectedOptions) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-carbon">
        <div className="w-7 h-7 border border-white/20 border-t-amber rounded-full animate-spin" />
      </section>
    );
  }

  return (
    <section id="shop" className="pt-28 md:pt-32 pb-20 md:pb-32 bg-carbon">
      <div className="mx-auto max-w-gallery px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Gallery — 60% */}
          <div className="md:col-span-7 md:sticky md:top-24">
            <ProductGallery product={product} activeImageId={variant?.imageId} />
          </div>

          {/* Purchase console — 40% */}
          <div className="md:col-span-5">
            <PurchaseConsole
              product={product}
              selectedOptions={selectedOptions}
              onSelectOption={handleSelect}
              quantity={quantity}
              onQuantityChange={setQuantity}
            />
          </div>
        </div>
      </div>
    </section>
  );
}