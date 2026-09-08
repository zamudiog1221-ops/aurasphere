// =============================================================================
// checkoutService
// -----------------------------------------------------------------------------
// Single integration point for checkout. Today it builds a Shopify-style cart
// permalink (which redirects to Shopify's checkout) so the frontend never
// implements payment itself. When the Shopify store domain is known, set
// SHOPIFY_DOMAIN and the redirect will point at the real checkout.
//
// To go fully headless later, replace buildCheckoutUrl() with a call to
// Shopify's Storefront API `checkoutCreate` and return the webUrl from there.
// =============================================================================

// TODO: set by the developer wiring up Shopify, e.g. "store.myshopify.com"
const SHOPIFY_DOMAIN = "";

/**
 * Build a Shopify cart permalink from line items.
 * Format: https://{domain}/cart/{variantId}:{qty},{variantId}:{qty}
 * Variant ids in Shopify are numeric; our mock uses string ids, so we strip
 * the non-numeric prefix when forwarding — the real Shopify variant id will
 * be stored on each line item once connected.
 */
export function buildCheckoutUrl(items) {
  const token = items
    .map((i) => `${extractVariantId(i.variantId)}:${i.quantity}`)
    .join(",");

  if (SHOPIFY_DOMAIN) {
    return `https://${SHOPIFY_DOMAIN}/cart/${token}`;
  }
  // Fallback for the frontend-only build — a clear placeholder route.
  return `/checkout?cart=${encodeURIComponent(token)}`;
}

function extractVariantId(variantId) {
  const match = String(variantId).match(/\d+$/);
  return match ? match[0] : variantId;
}

/**
 * Hand off to checkout. Resolves to a URL the caller should navigate to.
 */
export async function goToCheckout(items) {
  const url = buildCheckoutUrl(items);
  // TODO: Shopify Storefront API — const { data } = await fetch('/api/checkout', ...); return data.webUrl;
  return url;
}

export default { buildCheckoutUrl, goToCheckout };