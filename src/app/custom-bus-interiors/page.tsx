import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Custom Bus Interiors & Luxury Cabin Fabricators",
  description: "Surendra & Co. specializes in custom bus interiors in India, crafting bespoke sleeper cabins, corporate lounge fit-outs, thermal insulation, and multiplex electrical panels.",
  keywords: [
    "custom bus interiors",
    "bus interior manufacturers",
    "coach interior fabrication",
    "sleeper bus interior design",
    "custom luxury cabin fabricators",
  ],
};

export default function CustomBusInteriors() {
  const eyebrow = "// LUXURY CABIN FITTINGS // DESIGN DIRECTIVE";
  const h1 = "Custom Bus Interiors & Cabin Fabrication";
  const subtitle = "Bespoke executive corporate lounge refits, luxury sleeper cabin grids, climate duct acoustics, and advanced multiplex wiring layouts.";
  const technicalBrief = "Passenger comfort relies on perfect interior execution. Surendra & Co. combines high-end composite materials, self-extinguishing safety fabrics, and certified electrical distribution grids to engineer elite mobile environments.";

  const specifications = [
    { label: "FLAMMABILITY COMPLIANCE", value: "AIS-052 fire-retardant interior trim standards" },
    { label: "ACOUSTIC INSULATION", value: "Multi-layered elastomeric closed-cell barrier mats" },
    { label: "ELECTRICAL HARNESS", value: "FRLS fire-resistant wiring inside protective conduit tracks" },
    { label: "LIGHTING ARRAYS", value: "Pneumatic dimmable LED grids with multiplex controllers" },
    { label: "HVAC SYSTEM TYPES", value: "Custom insulated micro-nozzle cold air ducting networks" },
    { label: "FITTINGS QUALITY", value: "Heavy B2B hardware latching mechanisms" },
  ];

  const faqs = [
    {
      question: "What safety regulations govern your custom bus interior designs?",
      answer: "All internal fittings, luggage racks, seat anchorages, and window curtains comply strictly with CMVR and AIS-052 safety codes. We prioritize self-extinguishing fabrics, child-safe rounded edge contours, and non-slip floor overlays.",
    },
    {
      question: "How do you manage complex electrical wiring for high-end infotainment systems?",
      answer: "We engineer a dedicated, separate low-voltage multiplex electrical grid using industrial Fire-Retardant Low-Smoke (FRLS) copper cables running through secure aluminum channels. This isolates secondary power grids from core chassis electronics, ensuring high system safety.",
    },
    {
      question: "Can you install specialized sleeper compartments with charging grids?",
      answer: "Yes, our custom cabin design team fabricates modular sleeper partitions featuring integrated 230V sine-wave charging panels, dimmable LED reading nodes, USB hubs, and private acoustic curtains.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Custom Bus Interiors in India | Surendra & Co.",
    "description": "Premium luxury bus interior fabricators in India designing sleeper compartments and corporate lounge buses since 1984.",
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
          1. Bespoke Industrial Custom Bus Interiors
        </h2>
        <p>
          The interior cabin of a commercial bus is the primary point of contact for passenger satisfaction. A poorly finished cabin, characterized by rattling luggage racks, noisy AC vents, and cheap seat fabrics, diminishes passenger trust. At Surendra & Co., we operate a dedicated **custom bus interiors** division that designs and handcrafts premium executive cabins, sleeper grids, and custom vanity vans.
        </p>
        <p>
          Each interior refit follows strict ergonomic blueprints. We utilize premium architectural composites, reinforced aluminum mounting brackets, and self-lubricating latches to ensure that every visual surface, cabinet door, and luggage locker operates without rattling, even when traversing high-speed expressways or bumpy country roads.
        </p>

        <h2 className="font-serif text-xl sm:text-2xl font-bold text-ivory uppercase tracking-wider mt-4">
          2. Certified Fire-Retardant Acoustic Insulations
        </h2>
        <p>
          Student and corporate transit vehicles must maintain strict fire safety parameters. All our internal composite panels, seat back covers, side lining leatherette, and flooring underlays are constructed using **self-extinguishing, fire-retardant materials** complying with AIS-052 standards.
        </p>
        <p>
          To ensure quiet passenger journeys, we apply high-density elastomeric acoustic mats throughout the passenger floorboards, sidewalls, and engine bulkheads. This provides deep noise-attenuation, converting transit spaces into calm, premium sanctuaries.
        </p>

        <h3 className="font-serif text-lg font-bold text-ivory uppercase tracking-wide mt-4">
          3. Smart Multiplex Electrical Infrastructure
        </h3>
        <p>
          Modern commercial coaches host complex electronics including personal LED monitors, automated charging stations, multi-color ambient lighting systems, and biochemical toilets. We integrate high-reliability multiplex system wiring running through clean, inspectable aluminum conduits. This allows commercial operators to inspect, troubleshoot, or scale their interior electronics without altering core chassis mechanical wiring.
        </p>
      </div>
    </SeoLandingTemplate>
  );
}
