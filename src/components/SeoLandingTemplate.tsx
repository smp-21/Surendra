"use client";

import React, { useState } from "react";
import { ArrowLeft, ChevronDown, Check, FileText, Settings, ShieldAlert, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FAQItem {
  question: string;
  answer: string;
}

interface SpecItem {
  label: string;
  value: string;
}

interface SeoLandingTemplateProps {
  eyebrow: string;
  h1: string;
  subtitle: string;
  technicalBrief: string;
  specifications: SpecItem[];
  faqs: FAQItem[];
  children: React.ReactNode; // High-density semantic copy goes here
  jsonLd: any;
}

export default function SeoLandingTemplate({
  eyebrow,
  h1,
  subtitle,
  technicalBrief,
  specifications,
  faqs,
  children,
  jsonLd,
}: SeoLandingTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#070809] text-ivory min-h-screen relative selection:bg-bronze/30 selection:text-white flex flex-col justify-between">
      {/* Dynamic JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global Navigation */}
      <Navbar />

      {/* Background blueprint lines */}
      <div className="absolute inset-0 tech-grid-lines pointer-events-none opacity-[0.06] z-0" />
      <div className="absolute inset-0 tech-grid-lines-fine pointer-events-none opacity-[0.04] z-0" />

      {/* Main Container */}
      <main className="flex-grow pt-32 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16">
          
          {/* Back to Home anchor */}
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[9px] tracking-widest text-zinc-500 hover:text-bronze transition-colors uppercase mb-8 group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
            <span>Return to Central Command</span>
          </a>

          {/* Technical Section Header */}
          <div className="border-b border-white/[0.08] pb-10 mb-12">
            <span className="font-mono text-[9px] tracking-[0.35em] text-bronze uppercase block mb-4 font-bold">
              {eyebrow}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.04em] text-white leading-tight mb-6">
              {h1}
            </h1>
            <p className="font-serif text-lg sm:text-xl text-zinc-300 font-light tracking-wide leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          </div>

          {/* Specification Brief Indicator HUD */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 bg-white/[0.01] border border-white/[0.06] p-6 rounded-2xl backdrop-blur-md">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-bronze shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 font-mono text-[10px]">
                <span className="text-zinc-500 uppercase tracking-wider font-bold">STATUS SPECIFICATION</span>
                <span className="text-zinc-200 uppercase font-semibold">VERIFIED / AIS-052 STANDARDS</span>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t md:border-t-0 md:border-l border-white/[0.06] pt-4 md:pt-0 md:pl-6">
              <Settings className="w-5 h-5 text-bronze shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 font-mono text-[10px]">
                <span className="text-zinc-500 uppercase tracking-wider font-bold">CORE RIGOUR LAYER</span>
                <span className="text-zinc-200 uppercase font-semibold">HEAVY DUTY AUTOMOTIVE SYSTEM</span>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t md:border-t-0 md:border-l border-white/[0.06] pt-4 md:pt-0 md:pl-6">
              <Cpu className="w-5 h-5 text-bronze shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 font-mono text-[10px]">
                <span className="text-zinc-500 uppercase tracking-wider font-bold">CENTRAL REGULATION</span>
                <span className="text-zinc-200 uppercase font-semibold">BIS ALLOY SYNCHRONIZED</span>
              </div>
            </div>
          </div>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            
            {/* Left Side: Long-form Editorial Copy (1500+ words) */}
            <div className="lg:col-span-8 flex flex-col gap-8 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed tracking-wide pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-12 lg:pb-0">
              <p className="font-serif text-lg text-zinc-200 italic border-l-2 border-bronze pl-4 py-1 leading-relaxed mb-4">
                {technicalBrief}
              </p>
              {children}
            </div>

            {/* Right Side: Specifications Matrix */}
            <div className="lg:col-span-4 sticky top-32 flex flex-col gap-8">
              <div className="border border-white/[0.08] bg-[#0c0d0f] rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 tech-grid-lines pointer-events-none opacity-[0.03]" />
                <h3 className="font-mono text-[10px] text-bronze tracking-[0.25em] uppercase font-bold mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-bronze animate-led-flicker rounded-full" />
                  TECHNICAL MATRIX
                </h3>
                
                <div className="flex flex-col gap-4 font-mono text-[10px]">
                  {specifications.map((spec, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5 border-b border-white/[0.06] pb-3">
                      <span className="text-zinc-500 uppercase tracking-wider font-bold">{spec.label}</span>
                      <span className="text-white uppercase font-semibold text-[11px]">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/commission"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 p-3.5 border border-bronze bg-bronze/5 hover:bg-bronze hover:text-charcoal font-mono text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded-xl text-center text-white"
                >
                  <span>REQUEST DRAWINGS</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive FAQs Accordion */}
          <div className="border-t border-white/[0.08] pt-16 mb-20">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-[9px] tracking-[0.3em] text-bronze uppercase block mb-3 font-bold">
                // SYSTEM ANSWERS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.08em] text-white uppercase">
                Frequently Answered Queries
              </h2>
            </div>

            <div className="flex flex-col gap-4 max-w-4xl">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-white/[0.08] bg-[#0c0d0f]/50 hover:bg-[#0c0d0f] rounded-xl overflow-hidden transition-colors duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-serif text-base sm:text-lg font-bold text-white transition-colors cursor-pointer select-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-bronze transition-transform duration-300 shrink-0 ml-4 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-500 overflow-hidden font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed ${
                        isOpen ? "max-h-[300px] border-t border-white/[0.04] p-5 pt-4" : "max-h-0"
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final Industrial CTA Section */}
          <div className="border border-bronze/30 bg-gradient-to-r from-bronze/[0.02] via-charcoal to-bronze/[0.02] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 tech-grid-lines pointer-events-none opacity-[0.05]" />
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider text-white uppercase mb-4">
              Commence Your Custom Chassis Formulation
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm tracking-wide max-w-xl mx-auto mb-8 font-light">
              Collaborate directly with our engineering workshop to forge structural transport fleets optimized for extreme longevity and active compliance.
            </p>
            <a
              href="/commission"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-bronze bg-[#070809]/95 text-white hover:bg-bronze hover:text-[#070809] text-xs tracking-[0.25em] font-bold uppercase transition-all duration-500 rounded-full cursor-pointer shadow-2xl hover:shadow-bronze/20"
            >
              <span>BESPOKE REQUISITION</span>
              <span className="font-mono text-[9px] tracking-widest">// FORGE SYSTEM</span>
            </a>
          </div>

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
