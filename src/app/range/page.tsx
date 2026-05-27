"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COACH_RANGE } from "@/lib/constants";
import { Layers } from "lucide-react";

export default function RangePage() {
  return (
    <div className="bg-charcoal text-ivory min-h-screen relative selection:bg-bronze/30 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-32 relative">
        <div className="absolute inset-0 tech-grid-lines pointer-events-none opacity-[0.08]" />

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
              <span className="font-mono text-[10px] tracking-[0.35em] text-bronze uppercase font-semibold">
                Product Lineup
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[0.08em] uppercase text-white leading-[0.95] mb-6">
              Chassis &<br /><span className="italic text-bronze">Coach Ranges</span>
            </h1>
            <p className="text-zinc-300 text-lg font-light max-w-xl leading-relaxed">
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
                className="border border-white/[0.08] bg-charcoal/65 backdrop-blur-md p-8 md:p-10 rounded-[4px] group hover:border-bronze/40 hover:bg-[#070809]/80 transition-all duration-500 shadow-lg relative tech-hud-brackets"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.25em] text-bronze uppercase font-bold mb-2 block">
                      {coach.eyebrow}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-white tracking-wide mb-4 group-hover:text-bronze transition-colors">
                      {coach.name}
                    </h2>
                    <p className="text-zinc-200 text-base leading-relaxed font-light">
                      {coach.description}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center gap-3 font-mono text-[10px] border-t lg:border-t-0 border-l-0 lg:border-l border-stone/15 pl-0 lg:pl-8 pt-6 lg:pt-0">
                    <div className="flex justify-between border-b border-stone/10 pb-2">
                      <span className="text-zinc-400 font-medium">CHASSIS</span>
                      <span className="text-white font-bold">{coach.specs.chassis}</span>
                    </div>
                    <div className="flex justify-between border-b border-stone/10 pb-2">
                      <span className="text-zinc-400 font-medium">METALS</span>
                      <span className="text-white font-bold">{coach.specs.material}</span>
                    </div>
                    <div className="flex justify-between border-b border-stone/10 pb-2">
                      <span className="text-zinc-400 font-medium">SUSPENSION</span>
                      <span className="text-white font-bold">{coach.specs.suspension}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400 font-medium">PAYLOAD</span>
                      <span className="text-bronze font-bold">{coach.specs.payload}</span>
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
