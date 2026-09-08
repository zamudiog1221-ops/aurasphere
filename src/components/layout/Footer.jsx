import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";

const COLS = [
  {
    title: "Shop",
    links: [
      { label: "VOLTJET Washer", href: "#shop" },
      { label: "Bundles", href: "#shop" },
      { label: "Accessories", href: "#" },
      { label: "Gift Sets", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
      { label: "Shipping & Returns", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    // Frontend-only: integrate with Shopify newsletter / Klaviyo later.
    setDone(true);
    setEmail("");
  };

  return (
    <footer id="contact" className="bg-carbon hairline-t">
      {/* Newsletter */}
      <div className="mx-auto max-w-gallery px-5 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-end">
          <div>
            <p className="eyebrow mb-4">The Garage List</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-alabaster text-balance">
              Cleaner rides, in your inbox.
            </h2>
            <p className="mt-4 text-slate2 max-w-md text-[0.95rem] leading-relaxed">
              Early access to bundles, new accessories, and the occasional note
              on detailing smarter. No noise.
            </p>
          </div>
          <form onSubmit={submit} className="w-full">
            <div className="flex items-center gap-3 hairline-b pb-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 bg-transparent text-alabaster placeholder:text-slate2/60 outline-none text-sm"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="text-amber hover:text-amber-soft transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </div>
            {done && (
              <p className="mt-3 text-xs text-amber/80 font-mono-data tracking-wide">
                THANK YOU — YOU'RE ON THE LIST.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="hairline-t">
        <div className="mx-auto max-w-gallery px-5 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            <div className="col-span-2">
              <Link to="/" className="font-display text-3xl tracking-[0.18em] text-alabaster">
                VOLTJET
              </Link>
              <p className="mt-5 text-slate2 text-sm leading-relaxed max-w-xs">
                Cordless high-pressure cleaning for the car, the garage, and
                everything beyond the driveway.
              </p>
              <div className="flex items-center gap-5 mt-7">
                {[Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social media"
                    className="text-slate2 hover:text-alabaster transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            {COLS.map((col) => (
              <div key={col.title}>
                <h3 className="eyebrow mb-5">{col.title}</h3>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-slate2 hover:text-alabaster transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="hairline-t mt-14 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate2 font-mono-data tracking-wide">
              © {new Date().getFullYear()} VOLTJET. ALL RIGHTS RESERVED.
            </p>
            <p className="text-xs text-slate2">
              Cordless power, anywhere there's water.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}