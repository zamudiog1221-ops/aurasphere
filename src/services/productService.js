// =============================================================================
// productService
// -----------------------------------------------------------------------------
// Abstraction layer between the UI and the product data source.
// Today it returns mock data. To go live with Shopify, replace the body of
// `getProduct` with a Storefront API fetch and map the result into the same
// shape returned here. Components that import productService do not change.
// =============================================================================

import { mockProduct } from "@/lib/productData";

const LATENCY = 0; // simulate fetch delay during local dev; set 0 to disable

function delay(ms) {
  return ms > 0 ? new Promise((resolve) => setTimeout(resolve, ms)) : Promise.resolve();
}

/**
 * Fetch the active product.
 * @param {string} [handle] - Shopify product handle (ignored in mock mode)
 * @returns {Promise<object>} normalized product object
 */
export async function getProduct(handle) {
  await delay(LATENCY);
  // TODO: Shopify — const res = await fetch(`/api/products/${handle}`); return mapShopifyProduct(res);
  return structuredClone(mockProduct);
}

/**
 * Resolve a variant from a set of selected option values.
 * @param {object} product
 * @param {Record<string,string>} selectedOptions e.g. { Finish: "Obsidian" }
 */
export function getVariantForOptions(product, selectedOptions) {
  if (!product?.variants?.length) return null;
  return (
    product.variants.find((v) =>
      Object.entries(selectedOptions ?? {}).every(
        ([key, val]) => v.selectedOptions?.[key] === val
      )
    ) ?? product.variants[0]
  );
}

/**
 * Format a price string into a localized display value.
 */
export function formatPrice(priceStr, product) {
  const symbol = product?.currencySymbol ?? "$";
  return `${symbol}${Number(priceStr).toFixed(2)}`;
}

/**
 * Compute the discount percentage from compareAtPrice vs price.
 */
export function discountPercent(product) {
  const price = Number(product.price);
  const compare = Number(product.compareAtPrice);
  if (!compare || compare <= price) return 0;
  return Math.round(((compare - price) / compare) * 100);
}

export const productService = { getProduct, getVariantForOptions, formatPrice, discountPercent };
export default productService;