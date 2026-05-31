"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPLIANCE_LIST } from "@/lib/constants";
import { ShieldCheck, CheckCircle } from "lucide-react";

export default function CompliancePage() {
  return (
    <div className="bg-charcoal text-ivory min-h-screen relative selection:bg-bronze/20 selection:text-ivory flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-32 relative">

        <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 pb-32">
          
          {/* Page Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-4 h-4 text-bronze" />
              <span className="font-sans text-[11px] tracking-[0.12em] text-bronze uppercase font-medium">
                Certifications
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[0.08em] uppercase text-ivory leading-[0.95] mb-6">
              Regulatory<br /><span className="italic text-bronze">Validation</span>
            </h1>
            <p className="text-slate-500 text-lg font-light max-w-xl leading-relaxed">
              Every chassis frame, passenger structural cage, and engine mount is tested and stamped to comply with global transport directives.
            </p>
          </motion.div>

          {/* Certification Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPLIANCE_LIST.map((cert, idx) => (
              <motion.div
                key={cert.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * idx }}
                className="border border-black/[0.08] bg-white/80 backdrop-blur-md p-8 flex flex-col rounded-2xl group hover:border-bronze/40 hover:bg-stone/80 transition-all duration-500 shadow-lg relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-sans text-bronze text-base font-bold tracking-wider">
                    {cert.code}
                  </span>
                  <CheckCircle className="w-4 h-4 text-stone/30 group-hover:text-bronze/60 transition-colors flex-shrink-0 mt-1" />
                </div>
                <h3 className="font-serif text-lg font-light text-ivory tracking-wide mb-3 group-hover:text-bronze transition-colors">
                  {cert.label}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
