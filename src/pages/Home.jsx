import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Showcase from "@/components/sections/Showcase";
import Features from "@/components/sections/Features";
import SocialProof from "@/components/sections/SocialProof";
import HowItWorks from "@/components/sections/HowItWorks";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import StickyMobileCta from "@/components/product/StickyMobileCta";

export default function Home() {
  return (
    <div className="bg-carbon min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProblemSolution />
        <Showcase />
        <Features />
        <SocialProof />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <CartDrawer />
      <StickyMobileCta />
    </div>
  );
}