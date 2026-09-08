// =============================================================================
// cartService
// -----------------------------------------------------------------------------
// Frontend-only cart management. State is persisted to localStorage so the
// drawer reflects the same cart across reloads. The public surface mirrors
// Shopify's AJAX Cart API so the implementation can be swapped later:
//
//   addItem  -> /cart/add.js
//   changeItem -> /cart/change.js
//   removeItem -> /cart/change.js (quantity 0)
//   getCart   -> /cart.js
//
// Each line item keeps the Shopify-style fields (id, variantId, title, etc.)
// so mapping to Shopify line items requires no UI changes.
// =============================================================================

const STORAGE_KEY = "lumen_cart_v1";

function read() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function write(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* ignore quota / private mode errors */
  }
  return items;
}

function lineId(variantId) {
  return `line_${variantId}`;
}

/**
 * Add (or increment) a line item.
 * @param {object} item { variantId, productId, title, variantTitle, price, image, quantity }
 */
export function addItem(item) {
  const items = read();
  const id = lineId(item.variantId);
  const existing = items.find((i) => i.id === id);
  if (existing) {
    existing.quantity += item.quantity || 1;
  } else {
    items.push({
      id,
      variantId: item.variantId,
      productId: item.productId,
      title: item.title,
      variantTitle: item.variantTitle,
      price: item.price,
      image: item.image,
      quantity: item.quantity || 1,
    });
  }
  return write(items);
}

/**
 * Change the quantity of a line item (0 removes it).
 */
export function changeItem(lineIdValue, quantity) {
  let items = read();
  if (quantity <= 0) {
    items = items.filter((i) => i.id !== lineIdValue);
  } else {
    items = items.map((i) => (i.id === lineIdValue ? { ...i, quantity } : i));
  }
  return write(items);
}

export function removeItem(lineIdValue) {
  return write(read().filter((i) => i.id !== lineIdValue));
}

export function getCart() {
  return read();
}

export function clearCart() {
  return write([]);
}

export function cartSubtotal(items) {
  return items.reduce((sum, i) => sum + Number(i.price) * i.quantity, 0);
}

export function cartCount(items) {
  return items.reduce((sum, i) => sum + i.quantity, 0);
}

export default {
  addItem,
  changeItem,
  removeItem,
  getCart,
  clearCart,
  cartSubtotal,
  cartCount,
};