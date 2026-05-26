"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Database, ShieldAlert, Cpu, Eye } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="bg-charcoal text-ivory min-h-screen relative selection:bg-bronze/30 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-32 relative">
        <div className="absolute inset-0 tech-grid-lines pointer-events-none opacity-[0.08]" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 pb-32">
          
          {/* Page Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 border-b border-white/[0.08] pb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-4 h-4 text-bronze" />
              <span className="font-mono text-[10px] tracking-[0.35em] text-bronze uppercase font-semibold">
                Telemetry Log
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl font-semibold tracking-[0.08em] uppercase text-white leading-[0.95] mb-6">
              Cookie<br /><span className="italic text-bronze">Directives</span>
            </h1>
            <p className="text-zinc-300 text-lg font-light max-w-xl leading-relaxed">
              Detailed tracking schema explaining the lightweight telemetry storage and session tracking elements utilized within our digital brand platform.
            </p>
          </motion.div>

          {/* Cookie Content */}
          <div className="space-y-12">
            
            {/* Section 1: Definition */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
            >
              <div className="flex gap-3 items-center md:items-start md:flex-col">
                <Cpu className="w-5 h-5 text-bronze" />
                <h2 className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-bold">
                  01 // Log Definition
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl text-white font-medium">What Are Cookies?</h3>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  Cookies and local web storage represent minor technical data packets saved directly onto your device by your browser. They allow us to store essential configuration flags and technical interface states during your platform exploration.
                </p>
              </div>
            </motion.div>

            <hr className="border-white/[0.06]" />

            {/* Section 2: Usage */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
            >
              <div className="flex gap-3 items-center md:items-start md:flex-col">
                <Eye className="w-5 h-5 text-bronze" />
                <h2 className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-bold">
                  02 // Operational Log
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl text-white font-medium">How We Use Cookies</h3>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  We use cookies strictly for two operational intents:
                </p>
                <div className="space-y-4 mt-2">
                  <div className="bg-[#0c0d0f] border border-white/[0.04] p-5 rounded-xl">
                    <h4 className="font-mono text-xs text-white uppercase font-bold mb-2">// Essential Interface Memory</h4>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed">
                      We utilize modern browser memory to optimize image buffer preloading parameters and track your basic vertical runway scroll coordinate. This prevents the cinematic video sequence from tearing or jolt-resetting on quick viewport transitions.
                    </p>
                  </div>
                  <div className="bg-[#0c0d0f] border border-white/[0.04] p-5 rounded-xl">
                    <h4 className="font-mono text-xs text-white uppercase font-bold mb-2">// Vercel Performance Telemetry</h4>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed">
                      We integrate Vercel Analytics to track lightweight, anonymized performance metrics (e.g. LCP loading times, first input delay, general page load speeds). This does not store targetable tracking data or cross-site tracking profiles.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <hr className="border-white/[0.06]" />

            {/* Section 3: Control */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
            >
              <div className="flex gap-3 items-center md:items-start md:flex-col">
                <ShieldAlert className="w-5 h-5 text-bronze" />
                <h2 className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-bold">
                  03 // User Control
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl text-white font-medium">How to Control Cookies</h3>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  You can block, clear, or deactivate all cookies and browser local-storage arrays directly through your web browser preferences. 
                </p>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Note: Disabling storage configurations entirely might slightly degrade preloader execution times or smooth cinematic scrolling transitions as image assets will require fresh network queries on each individual visit.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
