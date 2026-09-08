import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const NAV = [
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-carbon/70 backdrop-blur-xl hairline-b"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-gallery px-5 md:px-10">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Left: mobile toggle + nav */}
          <div className="flex items-center gap-8">
            <button
              className="md:hidden text-alabaster"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <nav className="hidden md:flex items-center gap-8">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[0.8rem] tracking-wide text-alabaster/70 hover:text-alabaster transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Center: brand */}
          <Link
            to="/"
            className="font-display text-2xl md:text-3xl tracking-[0.18em] text-alabaster select-none"
          >
            VOLTJET
          </Link>

          {/* Right: actions */}
          <div className="flex items-center gap-5 md:gap-6">
            <button
              className="text-alabaster/70 hover:text-alabaster transition-colors"
              aria-label="Search"
            >
              <Search size={19} />
            </button>
            <button
              onClick={openCart}
              className="relative text-alabaster/80 hover:text-alabaster transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={19} />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber px-1 font-mono-data text-[0.6rem] text-carbon">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-carbon/95 backdrop-blur-xl hairline-b">
          <nav className="flex flex-col px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm tracking-wide text-alabaster/80 border-b border-white/5 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}