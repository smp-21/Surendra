"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Mail, Server } from "lucide-react";

export default function PrivacyPage() {
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
              <Shield className="w-4 h-4 text-bronze" />
              <span className="font-mono text-[10px] tracking-[0.35em] text-bronze uppercase font-semibold">
                B2B Disclosures
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl font-semibold tracking-[0.08em] uppercase text-white leading-[0.95] mb-6">
              Privacy<br /><span className="italic text-bronze">Protocol</span>
            </h1>
            <p className="text-zinc-300 text-lg font-light max-w-xl leading-relaxed">
              Transparent, rigorous data handling rules designed to protect industrial communications, corporate inquiries, and coachbuilding consultations.
            </p>
          </motion.div>

          {/* Privacy Content */}
          <div className="space-y-12">
            
            {/* Section 1: Data Collection */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
            >
              <div className="flex gap-3 items-center md:items-start md:flex-col">
                <Eye className="w-5 h-5 text-bronze" />
                <h2 className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-bold">
                  01 // Information Acquisition
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl text-white font-medium">What We Collect</h3>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  We limit data collection to the absolute essentials required for formal communications. When you submit an inquiry through our Commission Form, we acquire the following:
                </p>
                <ul className="space-y-2.5 font-mono text-[11px] text-zinc-400 mt-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-bronze rounded-full" />
                    <span>CORPORATE / INDIVIDUAL NAME</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-bronze rounded-full" />
                    <span>SECURE DIRECT EMAIL ADDRESS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-bronze rounded-full" />
                    <span>TECHNICAL BRIEF / MESSAGE DATA</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <hr className="border-white/[0.06]" />

            {/* Section 2: Purpose */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
            >
              <div className="flex gap-3 items-center md:items-start md:flex-col">
                <Lock className="w-5 h-5 text-bronze" />
                <h2 className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-bold">
                  02 // Operational Intent
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl text-white font-medium">Purpose of Processing</h3>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  The acquired credentials and brief parameters are solely utilized to respond directly to your technical inquiries, coordinate design consultations, and formalize bespoke coachbuilding specifications.
                </p>
                <p className="text-zinc-400 text-xs font-light leading-relaxed bg-[#0c0d0f] border border-white/[0.04] p-4 rounded-xl">
                  We enforce a strict non-marketing policy. Your inquiry details are never repurposed for automated marketing drip campaigns or promotional communications.
                </p>
              </div>
            </motion.div>

            <hr className="border-white/[0.06]" />

            {/* Section 3: Third Party */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
            >
              <div className="flex gap-3 items-center md:items-start md:flex-col">
                <Server className="w-5 h-5 text-bronze" />
                <h2 className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-bold">
                  03 // Sub-Processors
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl text-white font-medium">Resend Integration</h3>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  To ensure maximum reliability and cryptographic integrity of our transmission logs, Surendra & Co. utilizes <strong className="text-white font-medium">Resend</strong> as a third-party secure delivery processor. 
                </p>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  All details supplied within the Commission Form are encrypted in transit and routed through Resend for dispatch directly to our active acquisitions server. Resend is forbidden from retaining, copying, or utilizing this data beyond the execution of transit logistics.
                </p>
              </div>
            </motion.div>

            <hr className="border-white/[0.06]" />

            {/* Section 4: Sharing & Sale */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
            >
              <div className="flex gap-3 items-center md:items-start md:flex-col">
                <Shield className="w-5 h-5 text-bronze" />
                <h2 className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-bold">
                  04 // Ledger Protection
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl text-white font-medium">Zero Selling / Sharing</h3>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  Your corporate information represents a critical engineering asset. Under no circumstances does Surendra & Co. rent, sell, barter, trade, or distribute your email, name, or design briefs to external marketers, advertising networks, or general lists.
                </p>
              </div>
            </motion.div>

            <hr className="border-white/[0.06]" />

            {/* Section 5: Contact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
            >
              <div className="flex gap-3 items-center md:items-start md:flex-col">
                <Mail className="w-5 h-5 text-bronze" />
                <h2 className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-bold">
                  05 // Direct Query
                </h2>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl text-white font-medium">Administration & Control</h3>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  Should you wish to review, update, or purge your structural inquiry briefs from our local archives, please file a request with the chief data administrator.
                </p>
                <div className="pt-2">
                  <a 
                    href="mailto:acquisitions@surendraco.com" 
                    className="inline-flex items-center gap-2 font-mono text-xs text-white border border-stone/30 bg-[#0c0d0f] hover:border-bronze hover:bg-bronze/5 px-5 py-3 rounded-lg transition-all duration-300"
                  >
                    <Mail className="w-3.5 h-3.5 text-bronze" />
                    <span>acquisitions@surendraco.com</span>
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
