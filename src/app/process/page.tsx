"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROCESS_TIMELINE } from "@/lib/constants";
import { Cog } from "lucide-react";

export default function ProcessPage() {
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
              <Cog className="w-4 h-4 text-bronze" />
              <span className="font-mono text-[10px] tracking-[0.35em] text-bronze uppercase font-semibold">
                Methodology
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[0.08em] uppercase text-white leading-[0.95] mb-6">
              Blueprint to<br /><span className="italic text-bronze">Delivery</span>
            </h1>
            <p className="text-zinc-300 text-lg font-light max-w-xl leading-relaxed">
              An engineered, highly-disciplined fabrication pipeline coordinating chassis rolling, panel bonding, and safety certification.
            </p>
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20"
          >
            <p className="text-zinc-200 text-lg leading-relaxed font-light">
              We orchestrate transit vehicles from raw steel girders to premium road fleets. Our process is structured to guarantee that every axle alignment and weld structure meets maximum safety limits.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed font-light">
              From our initial blueprint consultation through high-tensile fabrications and luxury upholstery fittings, a dedicated manufacturing engineer supervises your custom coach project.
            </p>
          </motion.div>

          {/* Timeline Steps */}
          <div className="relative border-l border-stone/20 ml-4 md:ml-8 flex flex-col gap-12">
            {PROCESS_TIMELINE.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.15 }}
                className="relative pl-10 md:pl-14 group"
              >
                {/* Precision engineering node block */}
                <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-charcoal border border-white/[0.12] group-hover:border-bronze transition-colors duration-500 flex items-center justify-center">
                  <div className="w-1 h-1 bg-white/20 group-hover:bg-bronze transition-colors" />
                </div>

                <div className="border border-white/[0.08] bg-charcoal/65 backdrop-blur-md p-8 rounded-[4px] group-hover:border-bronze/40 hover:bg-[#070809]/80 transition-all duration-500 shadow-lg relative tech-hud-brackets">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-bronze text-2xl font-bold tracking-wider">
                      {step.step}
                    </span>
                    <h3 className="font-serif text-2xl font-light text-white tracking-wide group-hover:text-bronze transition-colors">
                      {step.phase}
                    </h3>
                  </div>
                  <p className="text-zinc-200 text-base leading-relaxed font-light">
                    {step.description}
                  </p>
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
