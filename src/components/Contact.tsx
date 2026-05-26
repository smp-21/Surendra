"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import { COACH_RANGE } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coachType: "volvo-9600-xl",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "failure">("idle");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ name: false, email: false, phone: false });
    setSubmitStatus("idle");

    // Soft B2B validations
    const hasNameError = formData.name.trim().length < 3;
    const hasEmailError = !formData.email.includes("@") || formData.email.trim().length < 5;
    const hasPhoneError = formData.phone.trim().length < 8;

    if (hasNameError || hasEmailError || hasPhoneError) {
      setErrors({
        name: hasNameError,
        email: hasEmailError,
        phone: hasPhoneError,
      });
      setSubmitStatus("failure");
      return;
    }

    setIsSubmitting(true);

    // Simulate secure transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
    }, 1500);
  };

  return (
    <section 
      id="commission" 
      className="relative min-h-screen w-full flex items-center justify-center py-16 sm:py-24 px-4 sm:px-12 md:px-16 lg:px-20 select-none overflow-hidden"
    >
      <div className="max-w-3xl mx-auto w-full relative z-10 flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Mail className="w-4 h-4 text-bronze animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-steel-light uppercase font-bold">
              Acquisitions
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[0.1em] sm:tracking-[0.15em] uppercase text-white leading-tight">
            Let's Build <span className="italic text-bronze font-light">Something Enduring.</span>
          </h2>
          <p className="text-zinc-400 text-[10px] sm:text-xs tracking-wider uppercase font-mono mt-3 sm:mt-4">
            Submit your chassis brief or custom build requirements.
          </p>
        </div>

        {/* B2B Form Panel - Center-Aligned & Glassmorphic */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-charcoal/45 border border-white/[0.12] backdrop-blur-xl p-5 sm:p-8 md:p-12 w-full max-w-2xl mx-auto rounded-[24px] shadow-2xl transition-all duration-500 hover:border-bronze/60 hover:bg-charcoal/55 hover:shadow-[0_20px_50px_rgba(163,144,115,0.15)]"
        >
          <AnimatePresence mode="wait">
            {submitStatus !== "success" ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {/* Row 1: Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] tracking-widest text-zinc-200 uppercase flex justify-between font-bold">
                    <span>Full Name *</span>
                    {errors.name && <span className="text-bronze font-bold">MINIMUM 3 CHARACTERS</span>}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`bg-stone/5 border focus:outline-none p-3 px-4 text-xs font-mono text-white rounded-xl transition-all duration-300 ${
                      errors.name 
                        ? "border-bronze-dark/60 focus:border-bronze focus:ring-1 focus:ring-bronze/20" 
                        : "border-white/[0.12] focus:border-bronze focus:ring-1 focus:ring-bronze/20"
                    }`}
                    placeholder="e.g. Johnathan Miller"
                  />
                </div>

                {/* Row 2: Work Email & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] tracking-widest text-zinc-200 uppercase flex justify-between font-bold">
                      <span>Work Email *</span>
                      {errors.email && <span className="text-bronze font-bold">INVALID FORMAT</span>}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`bg-stone/5 border focus:outline-none p-3 px-4 text-xs font-mono text-white rounded-xl transition-all duration-300 ${
                        errors.email 
                          ? "border-bronze-dark/60 focus:border-bronze focus:ring-1 focus:ring-bronze/20" 
                          : "border-white/[0.12] focus:border-bronze focus:ring-1 focus:ring-bronze/20"
                      }`}
                      placeholder="officer@company.com"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] tracking-widest text-zinc-200 uppercase flex justify-between font-bold">
                      <span>Phone Number *</span>
                      {errors.phone && <span className="text-bronze font-bold">MINIMUM 8 DIGITS</span>}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`bg-stone/5 border focus:outline-none p-3 px-4 text-xs font-mono text-white rounded-xl transition-all duration-300 ${
                        errors.phone 
                          ? "border-bronze-dark/60 focus:border-bronze focus:ring-1 focus:ring-bronze/20" 
                          : "border-white/[0.12] focus:border-bronze focus:ring-1 focus:ring-bronze/20"
                      }`}
                      placeholder="+91 98455 51984"
                    />
                  </div>
                </div>

                {/* Row 3: Select coach type dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] tracking-widest text-zinc-200 uppercase font-bold">
                    Select coach type *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.coachType}
                      onChange={(e) => setFormData({ ...formData, coachType: e.target.value })}
                      className="w-full bg-charcoal border border-white/[0.12] focus:border-bronze focus:ring-1 focus:ring-bronze/20 focus:outline-none p-3 px-4 text-xs font-mono text-white rounded-xl appearance-none cursor-pointer text-ellipsis overflow-hidden font-bold"
                    >
                      {COACH_RANGE.map((coach) => (
                        <option key={coach.id} value={coach.id}>
                          {coach.name} ({coach.eyebrow})
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-bronze font-bold">
                      <span className="font-mono text-[8px] tracking-widest">// CHOOSE</span>
                    </div>
                  </div>
                </div>

                {/* Row 4: Message textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] tracking-widest text-zinc-200 uppercase font-bold">
                    Message (Chassis Brief / Build Requirements)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-stone/5 border border-white/[0.12] focus:border-bronze focus:ring-1 focus:ring-bronze/20 focus:outline-none p-3 px-4 text-xs font-mono text-white rounded-xl resize-none transition-all duration-300"
                    placeholder="Outline your payload configurations, routes, seating, or frame requirements..."
                  />
                </div>

                {/* Submit Button & Feedback Area */}
                <div className="flex flex-col gap-4 mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 p-3.5 border border-bronze bg-bronze/5 hover:bg-bronze hover:text-charcoal font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 disabled:opacity-50 select-none cursor-pointer text-white rounded-xl"
                  >
                    <span>{isSubmitting ? "PROCESSING BUILD SPEC..." : "SUBMIT BUILD REQUEST"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  {/* Failure state message */}
                  <AnimatePresence>
                    {submitStatus === "failure" && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 border border-bronze-dark/30 bg-bronze-dark/5 p-2.5 px-3.5 font-mono text-[9px] text-bronze font-bold rounded-lg"
                      >
                        <AlertTriangle className="w-3.5 h-3.5 text-bronze shrink-0 animate-pulse" />
                        <span>Submission failed... Please verify the highlighted fields above.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </motion.form>
            ) : (
              // Success state message
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <CheckCircle2 className="w-12 h-12 text-bronze mb-5 animate-pulse" />
                <h3 className="font-serif text-2xl font-light text-white mb-1">
                  Commission Received
                </h3>
                <p className="font-mono text-[9px] text-bronze tracking-[0.2em] uppercase mb-3">
                  Requisition Ledger ID: SR-{Math.floor(Math.random() * 90000) + 10000}
                </p>
                <p className="text-zinc-200 text-xs leading-relaxed max-w-sm font-normal">
                  Your custom build request has been verified and safely logged in our central fabrication ledger. An acquisitions supervisor will contact you with full cold-rolled metal and frame estimates.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
