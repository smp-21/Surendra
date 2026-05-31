"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COACH_RANGE } from "@/lib/constants";
import { Layers } from "lucide-react";

export default function RangePage() {
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
              <Layers className="w-4 h-4 text-bronze" />
              <span className="font-sans text-[11px] tracking-[0.12em] text-bronze uppercase font-medium">
                Product Lineup
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[0.08em] uppercase text-ivory leading-[0.95] mb-6">
              Chassis &<br /><span className="italic text-bronze">Coach Ranges</span>
            </h1>
            <p className="text-slate-500 text-lg font-light max-w-xl leading-relaxed">
              Engineered with high-tensile box frame steel, active hydraulic load distribution, and severe-duty multi-axle suspension configurations.
            </p>
          </motion.div>

          {/* Coach Cards */}
          <div className="flex flex-col gap-10">
            {COACH_RANGE.map((coach, idx) => (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 * idx }}
                className="border border-black/[0.06] bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-2xl group hover:border-bronze/30 transition-all duration-500 shadow-lg relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left: Title & Description */}
                  <div>
                    <span className="font-sans text-[11px] tracking-[0.12em] text-bronze/70 uppercase font-medium mb-3 block">
                      {coach.eyebrow}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-ivory tracking-wide mb-4 group-hover:text-bronze transition-colors">
                      {coach.name}
                    </h2>
                    <p className="text-slate-500 text-base leading-relaxed font-light">
                      {coach.description}
                    </p>
                  </div>

                  {/* Right: Specifications Table */}
                  <div className="flex flex-col justify-center gap-0 border-t lg:border-t-0 border-l-0 lg:border-l border-black/[0.06] pl-0 lg:pl-10 pt-8 lg:pt-0">
                    <div className="flex items-baseline justify-between py-4 border-b border-black/[0.05]">
                      <span className="font-sans text-xs tracking-wider text-slate-400 uppercase font-normal">Chassis</span>
                      <span className="font-sans text-sm text-ivory font-normal text-right">{coach.specs.chassis}</span>
                    </div>
                    <div className="flex items-baseline justify-between py-4 border-b border-black/[0.05]">
                      <span className="font-sans text-xs tracking-wider text-slate-400 uppercase font-normal">Metals</span>
                      <span className="font-sans text-sm text-ivory font-normal text-right">{coach.specs.material}</span>
                    </div>
                    <div className="flex items-baseline justify-between py-4 border-b border-black/[0.05]">
                      <span className="font-sans text-xs tracking-wider text-slate-400 uppercase font-normal">Suspension</span>
                      <span className="font-sans text-sm text-ivory font-normal text-right">{coach.specs.suspension}</span>
                    </div>
                    <div className="flex items-baseline justify-between py-4">
                      <span className="font-sans text-xs tracking-wider text-slate-400 uppercase font-normal">Payload</span>
                      <span className="font-sans text-sm text-bronze font-medium text-right">{coach.specs.payload}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
