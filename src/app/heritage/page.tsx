"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ORIGIN_COPY } from "@/lib/constants";
import { Shield, Sparkles } from "lucide-react";

export default function HeritagePage() {
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
              <Shield className="w-4 h-4 text-bronze" />
              <span className="font-mono text-[10px] tracking-[0.35em] text-bronze uppercase font-semibold">
                {ORIGIN_COPY.eyebrow}
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[0.08em] uppercase text-white leading-[0.95] mb-6">
              {ORIGIN_COPY.title}
            </h1>
            <p className="text-bronze text-sm font-semibold tracking-[0.2em] uppercase">
              {ORIGIN_COPY.tagline}
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-zinc-200 text-lg leading-relaxed font-light">
                {ORIGIN_COPY.description1}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-zinc-300 text-lg leading-relaxed font-light">
                {ORIGIN_COPY.description2}
              </p>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-stone/20 pt-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {ORIGIN_COPY.stats.map((stat, idx) => (
                <div 
                  key={stat.label} 
                  className="border border-stone/30 bg-charcoal/50 backdrop-blur-md p-8 rounded-2xl group hover:border-bronze/40 hover:bg-charcoal/60 transition-all duration-500 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-4xl sm:text-5xl font-light text-bronze tracking-wide">
                      {stat.value}
                    </span>
                    <Sparkles className="w-4 h-4 text-stone/30 group-hover:text-bronze/50 transition-colors" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-300 uppercase font-semibold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
