import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Bus Body Fabrication & Structural Engineering Services",
  description: "Surendra & Co. offers premium B2B bus body fabrication services in India. Specializing in high-precision structural welding, laser metal cutting, and custom chassis integration.",
  keywords: [
    "bus body fabrication",
    "bus fabrication company",
    "bus body fabricators",
    "heavy vehicle body fabrication",
    "bus body engineering",
  ],
};

export default function BusBodyFabrication() {
  const eyebrow = "// WORKSHOP RIGOUR // FABRICATION PROTOCOL";
  const h1 = "Bus Body Fabrication & Metal Engineering";
  const subtitle = "High-precision commercial coachbuilding, computer-guided laser cutting, and certified structural MIG/TIG welding for extreme road durability.";
  const technicalBrief = "Durable fabrication is the foundation of vehicle life. Surendra & Co.'s advanced manufacturing facility combines digital metal cutting, aerospace-grade welding methods, and strict structural quality control audits to forge highly robust transit fleets.";

  const specifications = [
    { label: "WELDING TECHNOLOGY", value: "Synergic MIG / Pulse TIG / Resistance Spot Welding" },
    { label: "CUTTING PRECISION", value: "Robotic Fiber Laser Cutting within 0.02mm tolerance" },
    { label: "METAL PROTECTION", value: "Anti-corrosion pickling & zinc-rich epoxy primers" },
    { label: "FRAME MATERIAL", value: "Premium high-tensile alloy structural steel girders" },
    { label: "QUALITY COMPLIANCE", value: "Ultrasonic NDT weld scanning & load cell audits" },
    { label: "OEM INTEGRATION", value: "Authorized fabrication for major automotive brands" },
  ];

  const faqs = [
    {
      question: "What types of welding methods are utilized in your bus body fabrication process?",
      answer: "We utilize advanced Synergic MIG welding for primary structural steel frames to ensure deep penetration, and high-frequency pulse TIG welding for premium stainless steel and aluminum panelling to minimize thermal deformation.",
    },
    {
      question: "How do you verify structural weld integrity across the chassis framework?",
      answer: "Our certified quality assurance officers perform extensive Non-Destructive Testing (NDT), including ultrasonic testing (UT) and dye penetrant testing (DPT) on critical structural joints, guaranteeing zero weld voids or stress cracks.",
    },
    {
      question: "What is your metal treatment protocol to prevent rusting?",
      answer: "The entire fabricated structural frame is treated via a seven-stage chemical dipping process, followed by pickling, phosphate conversion, and a double-pass primer application, before the final outer metal sheets are mounted.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bus Body Fabrication in India | Surendra & Co.",
    "description": "B2B heavy vehicle bus body fabrication services in India since 1984. Industrial laser cutting and certified MIG welding.",
    "publisher": {
      "@type": "Organization",
      "name": "Surendra & Co.",
      "logo": "https://www.surendraco.com/logo.png"
    }
  };

  return (
    <SeoLandingTemplate
      eyebrow={eyebrow}
      h1={h1}
      subtitle={subtitle}
      technicalBrief={technicalBrief}
      specifications={specifications}
      faqs={faqs}
      jsonLd={jsonLd}
    >
      <div className="flex flex-col gap-6">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mt-4">
          1. Industrial High-Precision Bus Body Fabrication
        </h2>
        <p>
          The life of a commercial transport fleet is defined by the quality of its structural joints and base welds. Under constant road vibration and heavy payloads, weak fabrications fail, leading to frame cracks and expensive structural rebuilds. As a leading **bus body fabrication company**, Surendra & Co. combines 40 years of manual craftsmanship with advanced robotic fabrication techniques.
        </p>
        <p>
          Our heavy manufacturing division operates out of dedicated structural workshops. By using computerized fiber lasers and high-capacity hydraulic sheet-metal press brakes, we cut and form structural components within extreme tolerances. This high accuracy ensures that every framing node aligns perfectly during the welding process, preventing residual structural tension.
        </p>

        <h2 className="font-serif text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mt-4">
          2. Certified Heavy-Duty Structural Welding
        </h2>
        <p>
          A bus body contains hundreds of meters of structural steel joints. We employ AWS-certified manual welders and robotic MIG welding stations to construct the primary chassis outriggers and rollover cages.
        </p>
        <p>
          By maintaining exact gas shielding mixtures and thermal inputs, we produce welds that match the strength of the base steel alloys. Our structural frames receive a comprehensive 8-year warranty against cracking, illustrating our engineering confidence.
        </p>

        <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wide mt-4">
          3. Advanced Panel Tensioning & Skin Cladding
        </h3>
        <p>
          To ensure standard aerodynamic efficiency and visual beauty, outer panels are tensioned over the structural framework using high-performance structural adhesives and high-density spot welds. This prevents the metallic panel 'fluttering' common in cheap fabrications, resulting in a smooth exterior that significantly lowers air resistance.
        </p>
      </div>
    </SeoLandingTemplate>
  );
}
