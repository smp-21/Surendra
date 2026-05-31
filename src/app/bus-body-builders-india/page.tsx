import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Bus Body Builders in India | Luxury Coach & Commercial Bus Manufacturers",
  description: "Established in 1984, Surendra & Co. is India's leading bus body builder. Specializing in high-tensile passenger coachbuilding, commercial buses, and RTO compliant school bus fabrication.",
  keywords: [
    "bus body builders",
    "bus body builders india",
    "bus body manufacturers",
    "bus body manufacturer india",
    "bus fabrication company",
    "bus body fabricators",
    "bus coach builders",
    "luxury bus builders",
  ],
};

export default function BusBodyBuildersIndia() {
  const eyebrow = "// COMMERCIAL INTENT LAYER // DIRECTIVE IN-84";
  const h1 = "Bus Body Builders & Manufacturers in India";
  const subtitle = "Engineered chassis integration, luxury long-haul coaches, and durable public transit vehicles forged for India's harshest routes.";
  const technicalBrief = "Surendra & Co. has stood as a pioneer in Indian coachbuilding for four decades, engineering steel frame passenger buses and specialized commercial fleets. Combining automated MIG welding precision with structural roll-cage durability, we define the standard of reliability on the road.";

  const specifications = [
    { label: "MANUFACTURING CODES", value: "AIS-052 (Bus Body Code) compliant" },
    { label: "STRUCTURAL MATERIAL", value: "Cold-Rolled High-Tensile Steel Channels" },
    { label: "WELDING CERTIFICATION", value: "Robotic MIG / TIG AWS certified welds" },
    { label: "CORROSION RESISTANCE", value: "Phosphate conversion multi-bath primer" },
    { label: "RTO LICENSING ASSISTANCE", value: "Immediate Central RTO registration sync" },
    { label: "PARTNER PLATFORMS", value: "Authorized multi-platform custom bodybuilder" },
  ];

  const faqs = [
    {
      question: "Why are AIS-052 safety standards crucial for bus body builders in India?",
      answer: "The AIS-052 standard regulates the safety parameters of bus bodies, including rollover integrity, window exit sizes, corridor clearance, step heights, and fire retardant properties of interior materials. Compliance is legally required for RTO registration and guarantees passenger safety under high lateral G-forces.",
    },
    {
      question: "Which chassis platforms are compatible with Surendra & Co. bodywork?",
      answer: "We are officially certified for high-end chassis integration including Tata, Ashok Leyland, BharatBenz, and other leading commercial chassis platforms, preserving complete manufacturer drivetrain warranties.",
    },
    {
      question: "How does cold-rolled high-tensile steel improve bus body construction?",
      answer: "Compared to ordinary hot-rolled channels, cold-rolled high-tensile steel provides significantly higher yield strength and structural resistance with lighter weight profiles. This allows for thin, high-strength structural box girders that reduce total vehicle tare weight, directly improving fuel economy and tire life.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bus Body Builders in India | Surendra & Co.",
    "description": "Premium industrial bus body builders in India customizing luxury, corporate, and public transport coaches since 1984.",
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
          1. The Cornerstone of B2B Coachbuilding & Bus Fabrication
        </h2>
        <p>
          Selecting a certified **bus body builder in India** is more than an procurement decision; it is a long-term commitment to structural safety and passenger confidence. At Surendra & Co., we have spent forty years refining our manufacturing workshops to deliver unmatched frame durability. From standard commercial public transports to high-end multi-axle luxury cruise liners, our vehicles operate on a single standard: uncompromising strength.
        </p>
        <p>
          Every transit vehicle we commission begins with thorough structural analysis. By mapping out load distribution nodes across the active chassis, our structural engineers design customizable passenger cages that balance structural strength with fuel-efficient weight reduction. This meticulous attention to frame dynamics prevents structural shearing and metal fatigue, even when operating over severe rural routes or challenging intercity highways.
        </p>

        <h2 className="font-serif text-xl sm:text-2xl font-bold text-ivory uppercase tracking-wider mt-4">
          2. Certified AIS-052 Rollover Cage Engineering
        </h2>
        <p>
          Modern Indian road regulations demand rigorous validation metrics. Our workshops utilize advanced robotic MIG welding processes to build reinforced tubular steel roll cages that strictly satisfy the **AIS-052 Bus Body Code**. In the event of a rollover accident, the passenger cage acts as a protective shield, absorbing collision forces and preventing structural cabin collapse.
        </p>
        <p>
          To complement this structural safety grid, we integrate premium fire-retardant cabin insulation panels, anti-slip heavy-duty vinyl flooring, and emergency pneumatic exhaust vents. This holistic approach to safety is why our coaches consistently secure immediate commercial fitness clearances across all state RTO databases.
        </p>

        <h3 className="font-serif text-lg font-bold text-ivory uppercase tracking-wide mt-4">
          3. Multi-Stage Anti-Corrosion Preservation Process
        </h3>
        <p>
          Steel oxidation is the greatest threat to a vehicle's operating lifecycle. To counter this, all structural steel box frames undergo a rigorous multi-bath chemical treatment, including alkaline degreasing, pickling, and chemical zinc-phosphate conversion coatings. 
        </p>
        <p>
          This is followed by an epoxy anti-rust primer application and premium polyurethane outer body paint, providing a deep, durable barrier against moisture, humidity, and road salts. When you invest in a Surendra & Co. chassis build, you are securing a transport asset designed for multi-decade service life.
        </p>
      </div>
    </SeoLandingTemplate>
  );
}
