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
  id: "gid://shopify/Product/2617834",
  handle: "voltjet-cordless-high-pressure-car-washer",
  title: "VOLTJET",
  subtitle: "Cordless High-Pressure Car Washer",
  description:
    "A wireless, lithium-powered high-pressure washer that pulls water from any bucket, tap, or bottle. No cords, no tethered hose — just industrial-grade cleaning power you can take anywhere. 2.9L/min flow, self-priming pump, and a battery that outlasts the job.",
  price: "69.99",
  compareAtPrice: "129.99",
  currency: "USD",
  currencySymbol: "$",

  // Gallery — ordered for the hero + thumbnail rail
  images: [
    {
      id: "img-1",
      url: "https://file.zendrop.com/products/32/b4/f59074504567bd2bddcd27ce1c09.png",
      alt: "VOLTJET cordless high-pressure car washer, white, full unit with spray gun",
      variantId: "var-single",
    },
    {
      id: "img-2",
      url: "https://file.zendrop.com/products/a9/b5/e04d66bb4cc5afac9354ddf6be80.png",
      alt: "VOLTJET car washer three-quarter view showing lithium battery pack",
      variantId: "var-single",
    },
    {
      id: "img-3",
      url: "https://file.zendrop.com/products/f4/68/4cc2e46d41a8b860052526454858.png",
      alt: "VOLTJET spray gun detail with interchangeable nozzles",
      variantId: "var-single",
    },
    {
      id: "img-4",
      url: "https://file.zendrop.com/products/03/e9/39b839a144c4a5d64029314cfbdc.png",
      alt: "VOLTJET water intake hose and self-priming pump detail",
      variantId: "var-single",
    },
    {
      id: "img-5",
      url: "https://file.zendrop.com/products/e0/55/2bc274684ca7a0c78003c23b56cf.jpeg",
      alt: "VOLTJET in use blasting mud off a car wheel",
      variantId: "var-single",
    },
  ],

  // Editorial / showcase imagery (not part of the gallery rail)
  lifestyleImages: [
    {
      id: "life-detail",
      url: "https://cbu01.alicdn.com/img/ibank/O1CN01R7BIRC1Bs2x3N3C4l_!!0-0-cib.jpg",
      alt: "VOLTJET cordless washer held in hand, spraying a steady high-pressure stream",
    },
    {
      id: "life-livingroom",
      url: "https://cbu01.alicdn.com/img/ibank/O1CN01D5Nxi81Bs2x4cdrAs_!!0-0-cib.jpg",
      alt: "VOLTJET cleaning a motorcycle in a driveway",
    },
    {
      id: "life-flatlay",
      url: "https://cbu01.alicdn.com/img/ibank/O1CN01UblHbG1Bs2x7GacrL_!!0-0-cib.jpg",
      alt: "VOLTJET and accessories laid out — battery, hose, nozzles, foam bottle",
    },
    {
      id: "life-cta",
      url: "https://cbu01.alicdn.com/img/ibank/O1CN019ISaQV1Bs2x2aoxCA_!!0-0-cib.jpg",
      alt: "VOLTJET washing a car, water arcing in the sun",
    },
  ],

  // Variant options (Shopify "options" -> "variants" model)
  options: [
    {
      id: "bundle",
      name: "Bundle",
      values: [
        { value: "Single Unit", id: "var-single" },
        { value: "Double Pack", id: "var-double" },
      ],
    },
  ],

  variants: [
    {
      id: "var-single",
      title: "Single Unit",
      price: "69.99",
      compareAtPrice: "129.99",
      available: true,
      inventory: 120,
      imageId: "img-1",
      selectedOptions: { Bundle: "Single Unit" },
    },
    {
      id: "var-double",
      title: "Double Pack",
      price: "124.99",
      compareAtPrice: "259.98",
      available: true,
      inventory: 48,
      imageId: "img-1",
      selectedOptions: { Bundle: "Double Pack" },
    },
  ],

  // Trust / rating — placeholders to be populated from a review platform
  rating: 0,
  reviewCount: 0,

  // Conversion / trust signals
  trustBadges: [
    "Free US shipping",
    "Avg. 8-day delivery",
    "30-day returns",
  ],

  benefits: [
    {
      id: "b1",
      icon: "battery",
      title: "Cordless Freedom",
      copy: "A built-in lithium battery means no outlets, no extension cords, no being chained to a tap. Grab it and go — the driveway, the trail, the campsite.",
    },
    {
      id: "b2",
      icon: "droplet",
      title: "2.9L/min High Pressure",
      copy: "An industrial-grade pump delivers a relentless 2.9 liters per minute, lifting caked mud, salt, and grime off paint, wheels, and glass without a scratch.",
    },
    {
      id: "b3",
      icon: "gauge",
      title: "Versatile by Nature",
      copy: "Cars, motorcycles, bikes, garden furniture, patios, even air-conditioning units. One self-priming tool replaces a whole shelf of cleaning gear.",
    },
  ],

  problemSolution: {
    problem: {
      title: "A clean car shouldn't cost your whole afternoon.",
      copy: "Dragging out a heavy pressure washer, hunting for a working outdoor tap, untangling a 50-foot hose, and fighting the cord — or paying for a car wash every single week.",
    },
    solution: {
      title: "Cordless power, anywhere there's water.",
      copy: "VOLTJET self-primes from any bucket, bottle, or tap and runs on a lithium battery. No tap, no cord, no fuss — just high-pressure cleaning wherever you park.",
    },
  },

  showcase: [
    {
      id: "s1",
      eyebrow: "At the car",
      title: "Pressure that travels.",
      copy: "Drop the intake hose into a bucket, squeeze the trigger, and watch baked-on mud lift off in seconds. No tap, no cord, no dragging a full-size washer across the driveway.",
      imageId: "life-cta",
      align: "left",
    },
    {
      id: "s2",
      eyebrow: "Beyond the car",
      title: "One tool, a cleaner everything.",
      copy: "Motorcycles, mountain bikes, garden furniture, patios, even the AC unit on the balcony. VOLTJET swaps between foam and rinse nozzles to handle every surface.",
      imageId: "life-livingroom",
      align: "right",
    },
    {
      id: "s3",
      eyebrow: "The detail",
      title: "Built for the long haul.",
      copy: "A sealed lithium pack, a reinforced pump housing, and quick-connect nozzles. Every part is engineered to survive regular use in sun, mud, and rain.",
      imageId: "life-detail",
      align: "left",
    },
  ],

  features: [
    {
      category: "Key features",
      items: [
        "Fully cordless — rechargeable lithium battery, no outlet needed",
        "Self-priming pump draws from any bucket, bottle, or tap",
        "Maximum flow rate of 2.9L/min for fast, efficient cleaning",
        "Interchangeable nozzles: high-pressure jet and foam dispenser",
      ],
    },
    {
      category: "Power & Performance",
      items: [
        "Battery: rechargeable lithium-ion",
        "Max flow rate: 2.9 L/min",
        "Self-priming water intake — no mains pressure required",
        "Cordless trigger operation with instant on/off",
      ],
    },
    {
      category: "Specifications",
      items: [
        "Color: White (XS-00A-White-Standard)",
        "Power source: Lithium battery (included)",
        "Water source: Bucket / bottle / tap (self-priming)",
        "Avg. processing & shipping: 8 days to US",
      ],
    },
    {
      category: "What's included",
      items: [
        "1 × VOLTJET washer host",
        "1 × Rechargeable lithium battery",
        "1 × Charger",
        "1 × High-pressure hose",
        "Interchangeable nozzles (jet + foam)",
      ],
    },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Charge & Fill",
      copy: "Charge the lithium battery and drop the intake hose into any bucket, bottle, or tap — VOLTJET self-primes, so no mains pressure is needed.",
    },
    {
      step: "02",
      title: "Power On",
      copy: "Squeeze the trigger. The high-pressure pump kicks in instantly, delivering a steady 2.9L/min stream.",
    },
    {
      step: "03",
      title: "Blast & Rinse",
      copy: "Switch to the foam nozzle to lift dirt, then swap to the jet nozzle to rinse clean. Done — anywhere you parked.",
    },
  ],

  faqs: [
    {
      q: "Does it need to be plugged in?",
      a: "No. VOLTJET runs on a rechargeable lithium battery, so it works completely cordless — no outlet, no extension cord, no being tethered to a wall.",
    },
    {
      q: "Where does the water come from?",
      a: "VOLTJET is self-priming. Drop the intake hose into any bucket, water bottle, or tap and the pump draws water on its own — no mains water pressure required.",
    },
    {
      q: "How much water does it use?",
      a: "It delivers a maximum flow rate of 2.9 liters per minute, giving you efficient, high-pressure cleaning without wasting water.",
    },
    {
      q: "Is it only for cars?",
      a: "Not at all. VOLTJET is a true multitasker — use it on motorcycles, bikes, garden furniture, patios, boats, and even air-conditioning units.",
    },
    {
      q: "What's included in the box?",
      a: "Every VOLTJET ships with the washer host, a rechargeable lithium battery, a charger, a high-pressure hose, and interchangeable jet and foam nozzles.",
    },
    {
      q: "How long does shipping take?",
      a: "Orders ship to the United States with an average delivery time of 8 days. Processing times are confirmed at checkout based on your location.",
    },
    {
      q: "What is your return policy?",
      a: "We offer a 30-day return window on unused items in original packaging. Full policy details are available on our Shipping & Returns page.",
    },
  ],
};

export default mockProduct;