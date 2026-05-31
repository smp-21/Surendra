"use client";

import React, { useState } from "react";
import { ArrowLeft, ChevronDown, Check, FileText, Settings, ShieldAlert, Award } from "lucide-react";
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
    <div className="bg-charcoal text-ivory min-h-screen relative selection:bg-bronze/20 selection:text-ivory flex flex-col justify-between">
      {/* Dynamic JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-grow pt-32 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16">
          
          {/* Back to Home anchor */}
          <a
            href="/"
            className="inline-flex items-center gap-2 font-sans text-[11px] tracking-wide text-slate-400 hover:text-bronze transition-colors uppercase mb-8 group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
            <span>Return to Central Command</span>
          </a>

          {/* Technical Section Header */}
          <div className="border-b border-black/[0.08] pb-10 mb-12">
            <span className="font-sans text-[11px] tracking-[0.12em] text-bronze/70 uppercase block mb-4 font-medium">
              {eyebrow}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.04em] text-ivory leading-tight mb-6">
              {h1}
            </h1>
            <p className="font-serif text-lg sm:text-xl text-slate-500 font-light tracking-wide leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          </div>

          {/* Specification Brief Indicator HUD - Liquid Platinum / Titanium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 bg-black/[0.02] border border-black/[0.05] p-6 rounded-2xl backdrop-blur-md">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-bronze shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 font-sans text-[10px]">
                <span className="text-slate-400 uppercase tracking-wide font-medium">STATUS SPECIFICATION</span>
                <span className="text-slate-600 uppercase font-medium">VERIFIED / AIS-052 STANDARDS</span>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t md:border-t-0 md:border-l border-black/[0.06] pt-4 md:pt-0 md:pl-6">
              <Settings className="w-5 h-5 text-bronze shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 font-sans text-[10px]">
                <span className="text-slate-400 uppercase tracking-wide font-medium">CORE RIGOUR LAYER</span>
                <span className="text-slate-600 uppercase font-medium">HEAVY DUTY AUTOMOTIVE SYSTEM</span>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t md:border-t-0 md:border-l border-black/[0.06] pt-4 md:pt-0 md:pl-6">
              <Award className="w-5 h-5 text-bronze shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 font-sans text-[10px]">
                <span className="text-slate-400 uppercase tracking-wide font-medium">CENTRAL REGULATION</span>
                <span className="text-slate-600 uppercase font-medium">BIS ALLOY SYNCHRONIZED</span>
              </div>
            </div>
          </div>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            
            {/* Left Side: Long-form Editorial Copy (1500+ words) */}
            <div className="lg:col-span-8 flex flex-col gap-8 text-slate-500 font-sans text-sm sm:text-base leading-relaxed tracking-wide pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-black/[0.08] pb-12 lg:pb-0">
              <p className="font-serif text-lg text-slate-600 italic border-l-2 border-bronze pl-4 py-1 leading-relaxed mb-4">
                {technicalBrief}
              </p>
              {children}
            </div>

            {/* Right Side: Specifications Matrix */}
            <div className="lg:col-span-4 sticky top-32 flex flex-col gap-8">
              <div className="border border-black/[0.08] bg-white/90 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <h3 className="font-serif text-sm text-bronze/70 tracking-[0.06em] normal-case font-medium mb-6 flex items-center gap-2">
                  TECHNICAL MATRIX
                </h3>
                
                <div className="flex flex-col gap-4 font-sans text-[10px]">
                  {specifications.map((spec, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5 border-b border-black/[0.06] pb-3">
                      <span className="text-slate-400 uppercase tracking-wide font-medium">{spec.label}</span>
                      <span className="text-ivory uppercase font-medium text-[11px]">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/commission"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 p-3.5 border border-bronze bg-bronze/5 hover:bg-bronze hover:text-white font-sans text-[11px] font-medium tracking-wider uppercase transition-all duration-300 rounded-xl text-center text-ivory"
                >
                  <span>REQUEST DRAWINGS</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive FAQs Accordion */}
          <div className="border-t border-black/[0.08] pt-16 mb-20">
            <div className="max-w-3xl mb-12">
              <span className="font-sans text-[11px] tracking-[0.12em] text-bronze/70 uppercase block mb-3 font-medium">
                SYSTEM ANSWERS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.08em] text-ivory uppercase">
                Frequently Answered Queries
              </h2>
            </div>

            <div className="flex flex-col gap-4 max-w-4xl">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-black/[0.08] bg-black/[0.02] hover:bg-black/[0.04] rounded-xl overflow-hidden transition-colors duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-serif text-base sm:text-lg font-bold text-ivory transition-colors cursor-pointer select-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-bronze transition-transform duration-300 shrink-0 ml-4 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-500 overflow-hidden font-sans text-xs sm:text-sm text-slate-400 leading-relaxed ${
                        isOpen ? "max-h-[300px] border-t border-black/[0.04] p-5 pt-4" : "max-h-0"
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
          <div className="border border-black/[0.08] bg-white/90 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider text-ivory uppercase mb-4">
              Commence Your Custom Chassis Formulation
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm tracking-wide max-w-xl mx-auto mb-8 font-light">
              Collaborate directly with our engineering workshop to forge structural transport fleets optimized for extreme longevity and active compliance.
            </p>
            <a
              href="/commission"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-bronze bg-white/95 text-ivory hover:bg-bronze hover:text-white text-xs tracking-wider font-medium uppercase transition-all duration-500 rounded-xl cursor-pointer shadow-lg"
            >
              <span>BESPOKE REQUISITION</span>
              <span className="font-sans text-[9px] tracking-wider">FORGE SYSTEM</span>
            </a>
          </div>

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
