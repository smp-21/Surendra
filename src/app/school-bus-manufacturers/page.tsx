import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "School Bus Manufacturers & Safety Body Fabricators in India",
  description: "Surendra & Co. manufactures high-security school buses in India. Engineering AIS-052 compliant rollover tubular steel cages, child safety locks, and integrated GPS telematics.",
  keywords: [
    "school bus manufacturers",
    "school bus manufacturers india",
    "safe school bus body builders",
    "institutional school bus fabrication",
  ],
};

export default function SchoolBusManufacturers() {
  const eyebrow = "// SAFETY REGULATIONS // STRUCTURAL INTEGRITY";
  const h1 = "School Bus Manufacturers & Body Builders";
  const subtitle = "High-security student transit coaches, safe roll-cage structures, and AIS-052 standard institutional fleets engineered for maximum protective assurance.";
  const technicalBrief = "Student safety demands zero engineering compromise. Surendra & Co. designs and manufactures institutional school buses featuring reinforced anti-roll structural tubing, quick-escape emergency latch systems, and comprehensive compliance packages.";

  const specifications = [
    { label: "SAFETY CODE STANDARDS", value: "Strict AIS-052 & RTO institutional compliance" },
    { label: "STRUCTURAL CAGE TYPE", value: "Reinforced Welded Tubular Steel Anti-Roll Cage" },
    { label: "SPEED LIMIT CONTROLS", value: "Integrated tamper-proof speed governors (max 60km/h)" },
    { label: "EMERGENCY SYSTEMS", value: "Dual exit doors, roof escape hatch & quick hammer glass breaking" },
    { label: "TELEMATICS HARDWARE", value: "Optional custom GPS, interior CCTV & stop-arm indicators" },
    { label: "CORROSION WARRANTY", value: "Standard 8-Year structural frame warranty" },
  ];

  const faqs = [
    {
      question: "What specific safety regulations do your school buses satisfy in India?",
      answer: "All our institutional vehicles strictly comply with standard Central Motor Vehicles Rules (CMVR) and AIS-052 directives, including required warning paints, emergency exit numbers, specialized low-entry step heights, and fire extinguisher mountings.",
    },
    {
      question: "How does the school bus rollover protection cage operate?",
      answer: "We engineer a specialized continuous skeleton frame using cold-drawn hollow steel girders. If a roll-over crash occurs, this tubular steel cage distributes impact forces across the entire floor chassis, preventing the roof from collapsing and safeguarding the child compartment.",
    },
    {
      question: "Are interior materials safe and fire-retardant?",
      answer: "Yes, all seat upholstery, window trim profiles, floor linings, and roof covers are manufactured using certified fire-retardant materials that pass rigorous flammability and smoke emission safety tests.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "School Bus Manufacturers in India | Surendra & Co.",
    "description": "High-security school bus body builders and manufacturers in India since 1984. AIS-052 rollover steel cage compliance.",
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
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-ivory uppercase tracking-wider mt-4">
          1. Uncompromising Safety in School Bus Manufacturing
        </h2>
        <p>
          Institutional transit is the most critical segment in coachbuilding. Transporting children requires engineering systems that leave zero margin for error. As premier **school bus manufacturers in India**, Surendra & Co. builds vehicles that prioritize active student protection. Every frame we weld, every step we level, and every door we secure is designed to provide maximum safety on the road.
        </p>
        <p>
          We construct our school buses on robust, heavy-duty commercial chassis. By integrating specialized helper springs, larger hydraulic dampers, and rigid sway bars, we guarantee stable ride dynamics that prevent vehicle sway and rollover behaviors, even when negotiating sharp turns or carrying maximum student capacities.
        </p>

        <h2 className="font-serif text-xl sm:text-2xl font-bold text-ivory uppercase tracking-wider mt-4">
          2. Certified Anti-Roll Cage Steel Engineering
        </h2>
        <p>
          The core safety component of our school buses is the **structural anti-roll tubular cage**. Unlike basic commercial fabrications that wrap sheet metal over light wooden frames, we construct a complete, continuous safety skeleton using heavy-duty hollow steel box profiles.
        </p>
        <p>
          This skeleton is securely welded directly to the primary chassis beams, providing incredible crash-resistance. In testing, our roll cages withstand lateral crash loads that far exceed basic CMVR mandates, ensuring a highly secure occupant cabin.
        </p>

        <h3 className="font-serif text-lg font-bold text-ivory uppercase tracking-wide mt-4">
          3. Complete Institutional Integration Suite
        </h3>
        <p>
          Every school bus comes equipped with a comprehensive safety kit, including specialized low-rise entrance steps with anti-skid rubber overlays, child-proof interior locks, emergency exit glass hammers, a bright warning color scheme, and an integrated telematics bay for GPS tracking and interior security cameras.
        </p>
      </div>
    </SeoLandingTemplate>
  );
}
