import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Luxury Bus Body Builders & Coach Customizers in India",
  description: "Surendra & Co. is India's leading luxury bus builder, designing bespoke corporate coaches, sleeper liners, and multi-axle tourist coaches with premium finishes.",
  keywords: [
    "luxury bus builders",
    "luxury bus body builders",
    "custom coach builders",
    "executive tourist bus builders",
    "sleeper bus body manufacturers",
  ],
};

export default function LuxuryBusBuilders() {
  const eyebrow = "// BESPOKE COACHBUILDING // INDUSTRIAL LUXURY";
  const h1 = "Luxury Bus Body Builders & Coach Designers";
  const subtitle = "Bespoke executive lounge coaches, luxury sleeper cabins, and custom multi-axle touring liners engineered with quiet luxury restraint.";
  const technicalBrief = "Luxury transport demands silent cabin dynamics, premium climate controls, and high-end structural safety. Surendra & Co. combines 40 years of heavy chassis expertise with premium architectural interior custom finishes, creating outstanding mobile experiences.";

  const specifications = [
    { label: "CABIN DECIBEL TARGET", value: "Sub-55dB active acoustic noise dampening" },
    { label: "INTERIOR STRUCTURAL TRIM", value: "Fire-retardant composites & natural wood overlays" },
    { label: "SEATING CAPACITIES", value: "9-seat custom executive suites to 45-seat sleeper layouts" },
    { label: "CLIMATE ARCHITECTURE", value: "Multi-zone integrated VRF roof HVAC systems" },
    { label: "AUXILIARY POWER Grids", value: "Pure sine-wave 230V commercial battery invertor grids" },
    { label: "INTEGRATED DIAGNOSTICS", value: "Multiplex smart network touch controllers" },
  ];

  const faqs = [
    {
      question: "How do you achieve silent cabin acoustics inside your luxury coaches?",
      answer: "We install thick, multi-layer closed-cell polyurethane acoustic insulation blankets, heavy butyl rubber sound-deadening mats, and double-glazed tempered windows, isolating the passenger cabin from standard road and engine noise.",
    },
    {
      question: "Can the interior layout be customized with meeting rooms or chemical toilets?",
      answer: "Yes, our luxury custom coach department designs specialized layout blueprints including corporate meeting rooms, high-end biochemical restrooms, kitchen pantries, and secure storage safes.",
    },
    {
      question: "Are custom leather recliners compliant with commercial bus body regulations?",
      answer: "Absolutely. All our specialized multi-angle recliners, captain chairs, and sleeper berths feature certified structural steel base plates and integrated seatbelt anchor systems that pass RTO AIS-052 safety tests.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Luxury Bus Builders in India | Surendra & Co.",
    "description": "Bespoke luxury coach builders in India designing sleeper coaches, vanity vans, and corporate buses since 1984.",
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
          1. Elite Coachbuilding & Luxury Customization
        </h2>
        <p>
          High-end travel requires more than comfortable seats; it requires a carefully balanced environment that feels calm, elegant, and secure. As premier **luxury bus builders in India**, Surendra & Co. does not build average transport. We compose customized mobile suites. Designed for VIP transit, premium long-haul tourism, and elite intercity operations, our coaches stand as masterpieces of coachbuilding precision.
        </p>
        <p>
          Each luxury coach begins its journey in our design workshop. By using 3D modeling and stress simulation software, we engineer customized weight distribution patterns to support custom amenities. This allows us to integrate heavy features like biochemical restrooms, large chemical clean-water tanks, and advanced HVAC units while preserving perfect vehicle chassis balance and axle weight limits.
        </p>

        <h2 className="font-serif text-xl sm:text-2xl font-bold text-white uppercase tracking-wider mt-4">
          2. Complete Acoustic & Thermal Isolation
        </h2>
        <p>
          True luxury is defined by silence. The most common complaint of intercity coaches is ambient vibration and road drone. We eliminate this by applying extensive **sound-proofing arrays**. The entire structural framework is wrapped in high-density closed-cell elastomeric foam and butyl dampening panels.
        </p>
        <p>
          This isolates the cabin from engine hums and road rattle, maintaining cabin sound levels under 55 decibels. In addition, our multi-zone roof HVAC ducting features custom silencers to deliver quiet, draft-free air conditioning to every passenger compartment.
        </p>

        <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wide mt-4">
          3. Customized Executive & Sleeper Interiors
        </h3>
        <p>
          Whether designing luxury sleeper berths with customizable ambient LED grids or corporate executive spaces featuring pneumatic leather recliners, all internal elements are handcrafted with premium, fire-retardant materials. Every seam, polish, and layout is constructed to meet rigorous coachbuilding standards, ensuring an elite feel that guarantees long-term durability.
        </p>
      </div>
    </SeoLandingTemplate>
  );
}
