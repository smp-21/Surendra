"use client";

import React, { useState, useEffect } from "react";
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
    company_website: "", // Honeypot Field
    captchaAnswer: "", // Captcha input field
  });

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "failure">("idle");
  const [apiErrorMessage, setApiErrorMessage] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    captcha: false,
  });

  const generateChallenge = () => {
    setNum1(Math.floor(Math.random() * 8) + 2); // 2 to 9
    setNum2(Math.floor(Math.random() * 8) + 2); // 2 to 9
    setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
  };

  useEffect(() => {
    generateChallenge();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ name: false, email: false, phone: false, captcha: false });
    setSubmitStatus("idle");
    setApiErrorMessage("");

    // 1. Honeypot check
    // If the honeypot field is filled, mock instant success to confuse spambots
    if (formData.company_website.trim().length > 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
      }, 1000);
      return;
    }

    // 2. Structural client-side validation
    const hasNameError = formData.name.trim().length < 3;
    const hasEmailError = !formData.email.includes("@") || formData.email.trim().length < 5;
    const hasPhoneError = formData.phone.trim().length < 8;
    const hasCaptchaError = Number(formData.captchaAnswer) !== num1 + num2;

    if (hasNameError || hasEmailError || hasPhoneError || hasCaptchaError) {
      setErrors({
        name: hasNameError,
        email: hasEmailError,
        phone: hasPhoneError,
        captcha: hasCaptchaError,
      });
      setSubmitStatus("failure");
      setApiErrorMessage(
        hasCaptchaError
          ? "Verification challenge mismatch. Please input correct precision sum."
          : "Submission failed. Please verify the highlighted details above."
      );
      return;
    }

    setIsSubmitting(true);

    // 3. Dispatch to route API with full abuse validation
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          coachType: formData.coachType,
          message: formData.message,
          company_website: formData.company_website,
          num1,
          num2,
          captchaAnswer: formData.captchaAnswer
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setSubmitStatus("failure");
        setApiErrorMessage(data.error || "Submission failed. Please verify specifications.");
        setIsSubmitting(false);
        generateChallenge(); // refresh Captcha on failure
        return;
      }

      setIsSubmitting(false);
      setSubmitStatus("success");
    } catch (err) {
      console.error(err);
      setSubmitStatus("failure");
      setApiErrorMessage("Network transmission error. Ledger sync failed.");
      setIsSubmitting(false);
      generateChallenge();
    }
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
            <Mail className="w-4 h-4 text-bronze animate-led-flicker" />
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
          className="bg-charcoal/65 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-10 md:p-12 w-full max-w-2xl mx-auto rounded-[6px] shadow-2xl transition-all duration-500 hover:border-bronze/40 hover:bg-[#070809]/80 hover:shadow-[0_20px_50px_rgba(197,180,159,0.05)] relative tech-hud-brackets"
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
                {/* Honeypot field (hidden off-screen for spambot containment) */}
                <div className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="company_website">Company Website</label>
                  <input
                    id="company_website"
                    type="text"
                    name="company_website"
                    value={formData.company_website}
                    onChange={(e) => setFormData({ ...formData, company_website: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

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
                    className={`bg-stone/5 border focus:outline-none p-3 px-4 text-xs font-mono text-white rounded-[4px] transition-all duration-300 ${
                      errors.name 
                        ? "border-bronze-dark/60 focus:border-bronze focus:ring-1 focus:ring-bronze/20" 
                        : "border-white/[0.08] focus:border-bronze focus:ring-1 focus:ring-bronze/20"
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
                      className={`bg-stone/5 border focus:outline-none p-3 px-4 text-xs font-mono text-white rounded-[4px] transition-all duration-300 ${
                        errors.email 
                          ? "border-bronze-dark/60 focus:border-bronze focus:ring-1 focus:ring-bronze/20" 
                          : "border-white/[0.08] focus:border-bronze focus:ring-1 focus:ring-bronze/20"
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
                      className={`bg-stone/5 border focus:outline-none p-3 px-4 text-xs font-mono text-white rounded-[4px] transition-all duration-300 ${
                        errors.phone 
                          ? "border-bronze-dark/60 focus:border-bronze focus:ring-1 focus:ring-bronze/20" 
                          : "border-white/[0.08] focus:border-bronze focus:ring-1 focus:ring-bronze/20"
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
                      className="w-full bg-charcoal border border-white/[0.08] focus:border-bronze focus:ring-1 focus:ring-bronze/20 focus:outline-none p-3 px-4 text-xs font-mono text-white rounded-[4px] appearance-none cursor-pointer text-ellipsis overflow-hidden font-bold"
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
                    className="bg-stone/5 border border-white/[0.08] focus:border-bronze focus:ring-1 focus:ring-bronze/20 focus:outline-none p-3 px-4 text-xs font-mono text-white rounded-[4px] resize-none transition-all duration-300"
                    placeholder="Outline your payload configurations, routes, seating, or frame requirements..."
                  />
                </div>

                {/* Row 5: Mathematical Precision Challenge (Quiet Luxury Inline CAPTCHA) */}
                <div className="flex flex-col gap-1.5 border border-white/[0.08] bg-[#0c0d0f]/50 p-4 rounded-none relative tech-hud-brackets">
                  <label className="font-mono text-[9px] tracking-widest text-zinc-300 uppercase flex justify-between font-bold">
                    <span>Precision Validation *</span>
                    {errors.captcha && <span className="text-bronze font-bold">CALCULATION ERROR</span>}
                  </label>
                  <div className="flex items-center gap-4 mt-1">
                    <div className="bg-stone/5 border border-white/[0.08] p-2.5 px-4 rounded-none font-mono text-sm text-bronze font-bold select-none whitespace-nowrap">
                      {num1} + {num2} =
                    </div>
                    <input
                      type="number"
                      required
                      value={formData.captchaAnswer}
                      onChange={(e) => setFormData({ ...formData, captchaAnswer: e.target.value })}
                      className={`w-full bg-stone/5 border focus:outline-none p-2.5 px-4 text-xs font-mono text-white rounded-[4px] transition-all duration-300 ${
                        errors.captcha 
                          ? "border-bronze-dark/60 focus:border-bronze focus:ring-1 focus:ring-bronze/20" 
                          : "border-white/[0.08] focus:border-bronze focus:ring-1 focus:ring-bronze/20"
                      }`}
                      placeholder="Enter verification sum..."
                    />
                  </div>
                </div>

                {/* Submit Button & Feedback Area */}
                <div className="flex flex-col gap-4 mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 p-3.5 border border-bronze bg-bronze/5 hover:bg-bronze hover:text-charcoal font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 disabled:opacity-50 select-none cursor-pointer text-white rounded-none relative tech-hud-brackets"
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
                        className="flex items-center gap-2 border border-bronze-dark/30 bg-bronze-dark/5 p-2.5 px-3.5 font-mono text-[9px] text-bronze font-bold rounded-none"
                      >
                        <AlertTriangle className="w-3.5 h-3.5 text-bronze shrink-0 animate-led-flicker" />
                        <span>{apiErrorMessage || "Submission failed... Please verify the highlighted fields above."}</span>
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
                <CheckCircle2 className="w-12 h-12 text-bronze mb-5 animate-led-flicker" />
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
