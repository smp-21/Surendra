"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/constants";
import { Wrench, ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
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
              <Wrench className="w-4 h-4 text-bronze" />
              <span className="font-sans text-[11px] tracking-[0.12em] text-bronze uppercase font-medium">
                Expertise Layer
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[0.08em] uppercase text-ivory leading-[0.95] mb-6">
              Engineering<br /><span className="italic text-bronze">Services</span>
            </h1>
            <p className="text-slate-500 text-lg font-light max-w-xl leading-relaxed">
              Providing custom, heavy-duty mechanical engineering, stress testing, and sheet fabrication supporting elite global fleets.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 * idx }}
                className="border border-black/[0.08] bg-white/80 backdrop-blur-md p-8 flex flex-col justify-between rounded-2xl group hover:border-bronze/40 hover:bg-stone/80 transition-all duration-500 min-h-[360px] shadow-lg relative"
              >
                <div>
                  <span className="font-sans text-[10px] tracking-[0.12em] text-bronze uppercase font-semibold mb-2 block">
                    {service.title}
                  </span>
                  <h2 className="font-serif text-2xl font-light text-ivory tracking-wide mb-4 group-hover:text-bronze transition-colors">
                    {service.subtitle}
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed font-light mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-stone/15 pt-4 flex items-center justify-between">
                  <span className="font-sans text-[10px] text-slate-400 tracking-wider font-medium">
                    {service.metric}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-stone/30 group-hover:text-bronze transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Validation Standards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 border border-black/[0.08] bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg relative"
          >
            <h3 className="font-serif text-2xl font-light text-bronze tracking-wide mb-4">
              Engineering <span className="italic text-ivory font-light">Validation Standards</span>
            </h3>
            <p className="text-slate-600 text-base leading-relaxed font-light max-w-2xl">
              Surendra & Co. maintains high B2B tolerance rules. All engine packagings, chassis rolls, and diagnostic tests are recorded directly in our accredited acquisitions ledger. Every weld carries a traceable reference ID for lifetime accountability.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
