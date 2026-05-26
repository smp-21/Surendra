"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Scale, Award, AlertTriangle, EyeOff } from "lucide-react";

export default function TermsPage() {
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
              <Scale className="w-4 h-4 text-bronze" />
              <span className="font-mono text-[10px] tracking-[0.35em] text-bronze uppercase font-semibold">
                Legal Framework
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl font-semibold tracking-[0.08em] uppercase text-white leading-[0.95] mb-6">
              Terms of<br /><span className="italic text-bronze">Engagement</span>
            </h1>
            <p className="text-zinc-300 text-lg font-light max-w-xl leading-relaxed">
              Standard operational regulations and proprietary frameworks governing the usage of this platform and the presentation of our structural portfolios.
            </p>
          </motion.div>

          {/* Terms Content */}
          <div className="space-y-12">
            
            {/* Section 1: Informational Nature */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
            >
              <div className="flex gap-3 items-center md:items-start md:flex-col">
                <BookOpen className="w-5 h-5 text-bronze" />
                <h2 className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-bold">
                  01 // Site Nature
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl text-white font-medium">Informational Purpose</h3>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  This website serves as an interactive digital catalog and visual proof-of-engineering representing the legacy, techniques, and bespoke coachbuilding processes of Surendra & Co.
                </p>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  All metrics, dimensions, structural capabilities, and rendering layouts described herein are for general visual reference only. Exact technical specs, heavy structural loading parameters, and chassis load capacities are strictly calculated and bound by bespoke, signed client-builder contracts.
                </p>
              </div>
            </motion.div>

            <hr className="border-white/[0.06]" />

            {/* Section 2: Intellectual Property */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
            >
              <div className="flex gap-3 items-center md:items-start md:flex-col">
                <Award className="w-5 h-5 text-bronze" />
                <h2 className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-bold">
                  02 // Proprietary Rights
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl text-white font-medium">Intellectual Property</h3>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  All proprietary layouts, structural coach blueprints, custom cinematic frame sequences, iconography, tech grid designs, and site content are the exclusive property of Surendra & Co.
                </p>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  No individual, corporate competitor, or user is permitted to download, crawl, scrape, replicate, or hotlink our proprietary asset libraries or custom cinematic frames for any commercial use or public display without direct written authorization from our central registry.
                </p>
              </div>
            </motion.div>

            <hr className="border-white/[0.06]" />

            {/* Section 3: No Misuse */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
            >
              <div className="flex gap-3 items-center md:items-start md:flex-col">
                <EyeOff className="w-5 h-5 text-bronze" />
                <h2 className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-bold">
                  03 // Access Boundaries
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl text-white font-medium">Prohibited Platform Misuse</h3>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  Users are strictly prohibited from utilizing the platform to transmit spam, load arbitrary script fragments, perform brute-force attacks on our contact endpoints, or inject malicious payloads into our inquiry ledger pipelines.
                </p>
              </div>
            </motion.div>

            <hr className="border-white/[0.06]" />

            {/* Section 4: Limitation of Liability */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
            >
              <div className="flex gap-3 items-center md:items-start md:flex-col">
                <AlertTriangle className="w-5 h-5 text-bronze" />
                <h2 className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-bold">
                  04 // Liability Limits
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl text-white font-medium">Limitation of Liability</h3>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  Surendra & Co. makes no warranties, express or implied, regarding the continuous, uninterrupted execution of our digital preloader systems or background cinematic scroll rendering. 
                </p>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  To the maximum extent permitted by governing laws, we accept no liability for any temporary hardware lag, browser image buffer latency, direct or indirect operational disruptions, or loss of technical inquiries during communication transmissions.
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
