// =============================================================================
// MOCK PRODUCT DATA
// -----------------------------------------------------------------------------
// This is the single source of truth for product content on the frontend.
// To connect to Shopify later, replace the export of `mockProduct` with a fetch
// from the Shopify Storefront API and map the response into this same shape.
// No UI component imports this file's values directly — they all go through
// productService / ProductContext, so swapping the data source is isolated here.
// =============================================================================

export const mockProduct = {
  id: "gid://shopify/Product/1001",
  handle: "lumen-atmospheric-aroma-diffuser",
  title: "LUMEN",
  subtitle: "Atmospheric Aroma Diffuser",
  description:
    "An ultrasonic aroma diffuser engineered as a quiet, glowing centerpiece for the modern sanctuary. Whisper-quiet mist, a warm ambient halo, and a matte obsidian form that disappears into the room — until it lights it.",
  price: "89.00",
  compareAtPrice: "120.00",
  currency: "USD",
  currencySymbol: "$",

  // Gallery — ordered for the hero + thumbnail rail
  images: [
    {
      id: "img-1",
      url: "https://media.base44.com/images/public/6a9f840e4db399f33c4ec36c/c0b14fa8b_generated_4cae9ab5.jpg",
      alt: "LUMEN matte black aroma diffuser emitting warm amber mist in a concrete room",
      variantId: "var-black",
    },
    {
      id: "img-2",
      url: "https://media.base44.com/images/public/6a9f840e4db399f33c4ec36c/7e91d776e_generated_b1d2d39a.jpg",
      alt: "LUMEN black diffuser three-quarter product view on a dark pedestal",
      variantId: "var-black",
    },
    {
      id: "img-3",
      url: "https://media.base44.com/images/public/6a9f840e4db399f33c4ec36c/93a777176_generated_8b161722.jpg",
      alt: "LUMEN off-white ceramic diffuser variant on pale stone",
      variantId: "var-white",
    },
    {
      id: "img-4",
      url: "https://media.base44.com/images/public/6a9f840e4db399f33c4ec36c/ce3491e2b_generated_c6052bb8.jpg",
      alt: "Macro detail of fine mist rising from the LUMEN nozzle, backlit amber",
      variantId: "var-black",
    },
  ],

  // Editorial / showcase imagery (not part of the gallery rail)
  lifestyleImages: [
    {
      id: "life-bedside",
      url: "https://media.base44.com/images/public/6a9f840e4db399f33c4ec36c/8ca20a394_generated_8b9f1d88.jpg",
      alt: "LUMEN diffuser glowing on a minimalist bedside table",
    },
    {
      id: "life-livingroom",
      url: "https://media.base44.com/images/public/6a9f840e4db399f33c4ec36c/9f5fdda14_generated_e748b497.jpg",
      alt: "LUMEN diffuser on a wooden console in a concrete living room",
    },
    {
      id: "life-flatlay",
      url: "https://media.base44.com/images/public/6a9f840e4db399f33c4ec36c/36e841bb2_generated_d014902a.jpg",
      alt: "Overhead flatlay of LUMEN with essential oil bottles and botanicals",
    },
    {
      id: "life-cta",
      url: "https://media.base44.com/images/public/6a9f840e4db399f33c4ec36c/beb824e1b_generated_81f74bb1.jpg",
      alt: "LUMEN diffuser as a single warm glow in a dark sanctuary room",
    },
  ],

  // Variant options (Shopify "options" -> "variants" model)
  options: [
    {
      id: "color",
      name: "Finish",
      values: [
        { value: "Obsidian", id: "var-black" },
        { value: "Alabaster", id: "var-white" },
      ],
    },
  ],

  variants: [
    {
      id: "var-black",
      title: "Obsidian",
      price: "89.00",
      compareAtPrice: "120.00",
      available: true,
      inventory: 42,
      imageId: "img-1",
      selectedOptions: { Finish: "Obsidian" },
    },
    {
      id: "var-white",
      title: "Alabaster",
      price: "89.00",
      compareAtPrice: "120.00",
      available: true,
      inventory: 18,
      imageId: "img-3",
      selectedOptions: { Finish: "Alabaster" },
    },
  ],

  // Trust / rating — placeholders to be populated from a review platform
  rating: 0,
  reviewCount: 0,

  // Conversion / trust signals
  trustBadges: [
    "Free shipping over $75",
    "30-day returns",
    "2-year warranty",
  ],

  benefits: [
    {
      id: "b1",
      icon: "droplet",
      title: "Ultrasonic Stillness",
      copy: "A near-silent mist that humidifies and disperses aroma without heat, preserving the integrity of every oil.",
    },
    {
      id: "b2",
      icon: "flame",
      title: "Ambient Halo",
      copy: "A tunable warm glow doubles as a low-light lamp, turning any surface into a quiet focal point after dark.",
    },
    {
      id: "b3",
      icon: "leaf",
      title: "Pure by Design",
      copy: "BPA-free reservoir, auto-shutoff when empty, and a matte finish that resists fingerprints and dust.",
    },
  ],

  problemSolution: {
    problem: {
      title: "The room feels unfinished after dark.",
      copy: "Harsh overhead lighting, dry air, and synthetic air fresheners leave a space feeling sterile — never restful.",
    },
    solution: {
      title: "One object changes the atmosphere.",
      copy: "LUMEN replaces the clutter of a lamp, a humidifier, and a candle with a single quiet form — light, moisture, and scent in one.",
    },
  },

  showcase: [
    {
      id: "s1",
      eyebrow: "In the bedroom",
      title: "A glow that winds you down.",
      copy: "Set to the lowest warm setting beside the bed and LUMEN becomes a slow, breathing presence — mist curling softly as the room settles.",
      imageId: "life-bedside",
      align: "left",
    },
    {
      id: "s2",
      eyebrow: "In the living room",
      title: "Architecture you can smell.",
      copy: "On a console or side table, the matte form reads as sculpture by day and a warm anchor by night.",
      imageId: "life-livingroom",
      align: "right",
    },
    {
      id: "s3",
      eyebrow: "The detail",
      title: "Mist, studied closely.",
      copy: "A backlit nozzle produces a vapor fine enough to drift, never to wet — engineered for scent throw without residue.",
      imageId: "img-4",
      align: "left",
    },
  ],

  features: [
    {
      category: "Key features",
      items: [
        "Ultrasonic nebulizing technology — no heat, no noise",
        "Tunable warm-white ambient light (3 levels + off)",
        "Continuous and intermittent mist modes",
        "Auto-shutoff when the reservoir runs dry",
      ],
    },
    {
      category: "Materials",
      items: [
        "Matte BPA-free polymer body",
        "Ceramic-feel base ring",
        "Stainless steel mist nozzle",
      ],
    },
    {
      category: "Specifications",
      items: [
        'Capacity: 300 ml',
        'Runtime: up to 10 hours (intermittent)',
        'Coverage: recommended for rooms up to 30 m²',
        'Power: USB-C, 5V / 1A (adapter included)',
      ],
    },
    {
      category: "What's included",
      items: [
        "1 × LUMEN diffuser",
        "1 × USB-C power cable",
        "1 × USB wall adapter",
        "1 × Cleaning brush",
        "1 × Quick-start guide",
      ],
    },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Fill",
      copy: "Lift the top and fill the reservoir with cold tap water to the line.",
    },
    {
      step: "02",
      title: "Add",
      copy: "Add 5–8 drops of your favorite essential oil to the water.",
    },
    {
      step: "03",
      title: "Set",
      copy: "Choose your mist mode and light level, then let the room transform.",
    },
  ],

  faqs: [
    {
      q: "How does the diffuser work?",
      a: "LUMEN uses high-frequency ultrasonic vibrations to break water and essential oils into a fine, cool mist — without heat, preserving the oils' character.",
    },
    {
      q: "How do I use it?",
      a: "Fill the reservoir with water, add a few drops of essential oil, and select your mist and light settings. A full guide is included in the box.",
    },
    {
      q: "What is included?",
      a: "Every LUMEN ships with the diffuser, a USB-C cable, a wall adapter, a cleaning brush, and a quick-start guide.",
    },
    {
      q: "How long does shipping take?",
      a: "Orders are processed within 1–2 business days. Standard delivery times will be confirmed at checkout based on your location.",
    },
    {
      q: "What are the product dimensions?",
      a: "LUMEN measures approximately 168 mm tall × 110 mm wide. Full specifications are listed in the Details section above.",
    },
    {
      q: "Is it easy to clean?",
      a: "Yes — the open reservoir wipes clean with the included brush and a soft cloth. We recommend a rinse every 1–2 weeks.",
    },
    {
      q: "What is your return policy?",
      a: "We offer a 30-day return window on unused items in original packaging. Full policy details are available on our Shipping & Returns page.",
    },
  ],
};

export default mockProduct;