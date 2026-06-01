"use client";

import React from "react";
import { motion } from "framer-motion";
import { ORIGIN_COPY } from "@/lib/constants";
import { Sparkles } from "lucide-react";

/**
 * TrustMetrics — Homepage Trust Stats Panel
 * 
 * Extracted from the Heritage page stats panel. Displays the core 
 * trust metrics (40 Yrs, 15,000+, 100%) immediately below the Hero 
 * section on the homepage scroll runway for high-trust visibility.
 */
export default function TrustMetrics() {
  return (
    <section
      id="trust-metrics"
      className="relative h-full w-full select-none overflow-hidden flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-15%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[90vw] sm:max-w-4xl lg:max-w-5xl px-4 md:px-8 pointer-events-auto"
      >
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px bg-bronze/40" />
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.14em] text-bronze uppercase font-medium">
            Proven Track Record
          </span>
          <div className="w-8 h-px bg-bronze/40" />
        </div>

        {/* Stats Grid — Exact replication of Heritage page stats panel */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {ORIGIN_COPY.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: "easeOut" }}
              className="border border-black/[0.08] bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl group hover:border-bronze/40 hover:bg-stone/80 transition-all duration-500 shadow-lg relative"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-bronze tracking-wide">
                  {stat.value}
                </span>
                <Sparkles className="w-4 h-4 text-stone/30 group-hover:text-bronze/50 transition-colors" />
              </div>
              <span className="font-sans text-[10px] tracking-[0.12em] text-slate-500 uppercase font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
