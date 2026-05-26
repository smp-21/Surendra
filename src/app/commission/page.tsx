"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function CommissionPage() {
  return (
    <div className="bg-charcoal text-ivory min-h-screen relative selection:bg-bronze/30 selection:text-white flex flex-col justify-between">
      {/* Global Navigation */}
      <Navbar />

      {/* Main content with technical grid overrides */}
      <main className="flex-grow pt-24 relative">
        <div className="absolute inset-0 tech-grid-lines pointer-events-none opacity-[0.12]" />
        <div className="absolute inset-0 tech-grid-lines-fine pointer-events-none opacity-[0.08]" />
        <div className="relative z-10">
          <Contact />
        </div>
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}
