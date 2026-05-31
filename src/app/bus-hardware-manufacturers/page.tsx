import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Bus Hardware Manufacturers & Suppliers in India",
  description: "Surendra & Co. manufactures heavy-duty bus body hardware, custom structural panels, door locks, hinges, and aluminum extrusions compliant with industrial B2B safety demands.",
  keywords: [
    "bus hardware",
    "bus hardware manufacturers",
    "bus hardware suppliers",
    "bus body hardware",
    "bus door hardware",
    "bus hinges",
    "bus locks",
    "bus handles",
  ],
};

export default function BusHardwareManufacturers() {
  const eyebrow = "// ENGINEERING SPECIFICATIONS // HARDWARE GRID";
  const h1 = "Bus Hardware Manufacturers & Suppliers";
  const subtitle = "Precision-forged door mechanisms, heavy duty structural hinges, aluminum profiles, and locksets built for commercial transit durability.";
  const technicalBrief = "Commercial bus hardware operates under constant mechanical stress. Surendra & Co.'s dedicated industrial hardware division manufactures high-tolerance mechanical linkages, locks, and hinges designed to survive millions of operational duty cycles.";

  const specifications = [
    { label: "RAW MATERIAL SPEC", value: "High-Grade Stainless Steel & Forged Aluminum" },
    { label: "CYCLE TEST RATING", value: "Over 500,000 continuous door opening cycles" },
    { label: "CORROSION STANDARDS", value: "240-Hour continuous Salt Spray ASTM-B117 certified" },
    { label: "LOCKING SYSTEMS", value: "Double-point rotary pneumatic & mechanical overrides" },
    { label: "EMERGENCY SAFETY", value: "AIS-052 compliant manual quick-release hardware" },
    { label: "EXTRUSION TOLERANCE", value: "0.05mm precision structural alloy profiles" },
  ];

  const faqs = [
    {
      question: "What makes Surendra & Co. hinges superior for commercial bus body builders?",
      answer: "Our heavy-duty coach hinges are forged from high-tensile stainless steel with self-lubricating polymer sleeves. This design completely prevents mechanical sagging and locking, ensuring doors open smoothly under harsh operations without requiring grease.",
    },
    {
      question: "Are your emergency exit handles compliant with Indian safety regulations?",
      answer: "Yes, our manual exit levers, roof escape mechanisms, and door latch overrides strictly satisfy AIS-052 guidelines, featuring high-visibility red indicators and immediate mechanical override triggers.",
    },
    {
      question: "Can we source custom aluminum extrusion profiles for specialized coach designs?",
      answer: "Absolutely. We own custom die manufacturing facilities allowing us to extrude, anodize, and supply customized structural frame profiles, window channels, and luggage door frames based on client CAD blueprints.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bus Hardware Manufacturers in India | Surendra & Co.",
    "description": "B2B manufacturer of heavy-duty commercial bus locks, handles, hinges, and aluminum profiles since 1984.",
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
          1. Elite B2B Bus Body Hardware Manufacturing
        </h2>
        <p>
          A passenger vehicle is only as reliable as its weakest mechanical component. While engines and suspension systems get the majority of attention, everyday items like **bus hinges, handles, and door locks** endure thousands of violent cycles daily. As trusted **bus hardware manufacturers in India**, Surendra & Co. supplies a massive catalog of high-strength commercial components built to withstand extreme vibration and constant passenger operation.
        </p>
        <p>
          We manufacture our hardware catalog within high-precision tooling workshops. Utilizing cold-forging, zinc-die casting, and computerized CNC milling, we construct components that maintain structural tolerances of less than 0.05mm. This guarantees that hinges do not sag, locks do not seize, and handles do not crack over years of heavy transit operations.
        </p>

        <h2 className="font-serif text-xl sm:text-2xl font-bold text-ivory uppercase tracking-wider mt-4">
          2. ASTM-B117 Standard Corrosion Resistance
        </h2>
        <p>
          Heavy commercial vehicles are constantly exposed to dust, intense monsoons, and extreme temperature sweeps. To prevent steel decay and aesthetic weathering, all our locking systems, structural hinges, and custom door brackets undergo extensive **ASTM-B117 Salt Spray Testing** for over 240 continuous hours.
        </p>
        <p>
          All exterior components are finished with heavy chrome plating, durable powder coats, or constructed directly from specialized Marine-Grade Stainless Steel. This makes them highly resistant to environmental acids and mechanical scratching, ensuring smooth B2B operations under extreme workloads.
        </p>

        <h3 className="font-serif text-lg font-bold text-ivory uppercase tracking-wide mt-4">
          3. Custom Extruded Aluminum Profiles & Fittings
        </h3>
        <p>
          Beyond moving components, we are a major B2B supplier of structural custom aluminum trim profiles, luggage rack channels, window tracks, and passenger roof drip rails. Our extrusion facilities handle specialized structural alloys, delivering high bending strength combined with lightweight properties that facilitate seamless body panel skin mounting.
        </p>
      </div>
    </SeoLandingTemplate>
  );
}
