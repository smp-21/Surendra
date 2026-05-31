"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function CommissionPage() {
  return (
    <div className="bg-charcoal text-ivory min-h-screen relative selection:bg-bronze/20 selection:text-ivory flex flex-col justify-between">
      {/* Global Navigation */}
      <Navbar />

      {/* Main content with technical grid overrides */}
      <main className="flex-grow pt-24 relative">
        <div className="relative z-10">
          <Contact />
        </div>
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}
