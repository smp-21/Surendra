import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

// Core programmatic city definitions with deep localized context
const CITY_DATA: Record<string, {
  name: string;
  region: string;
  rtoCode: string;
  corridor: string;
  specialization: string;
  localBody: string;
  intro: string;
  weldSpec: string;
  complianceSpec: string;
  faqs: Array<{ question: string; answer: string }>;
}> = {
  mumbai: {
    name: "Mumbai",
    region: "Maharashtra",
    rtoCode: "MH-01 / MH-02 / MH-03 RTO Compliant",
    corridor: "Mumbai-Pune Expressway & Western Ghats Corridor",
    specialization: "High-Capacity Intercity Coaches & Double-Decker Transit",
    localBody: "Brihanmumbai Municipal Corporation (BMC) area",
    intro: "Mumbai is the financial heartbeat of India, demanding heavy-duty transit networks that handle high passenger capacities and steep terrain. Surendra & Co. supplies custom intercity coaches, heavy staff buses, and luxury tourist liners optimized for the high-vibration demands of the Mumbai-Pune Expressway and coastal humidity.",
    weldSpec: "Corrosion-treated Marine-Grade Galvanized Steel framework, vital for resisting salty sea air and high humidity along the Maharashtra coastline.",
    complianceSpec: "Strict compliance with Maharashtra State RTO AIS-052 safety guidelines, including mandatory speed governors calibrated for mountain ghat descents.",
    faqs: [
      {
        question: "How do your Mumbai bus bodies handle high coastal humidity?",
        answer: "Every bus body we build for the Mumbai region undergoes an extensive 7-stage phosphate dipping process, followed by pickling and two coats of epoxy anti-rust primers. This provides an airtight barrier that prevents corrosion from salty sea winds.",
      },
      {
        question: "Are your luxury coaches optimized for the steep inclines of the Western Ghats?",
        answer: "Yes. All coaches designed for Maharashtra corridors feature specialized low-center-of-gravity frameworks, anti-sway stabilizer linkages, and heavy retarder brackets that ease braking stress on steep ghat declines.",
      },
    ],
  },
  delhi: {
    name: "Delhi NCR",
    region: "Delhi / National Capital Region",
    rtoCode: "DL-1P / DL-1C / DL-5 RTO Compliant",
    corridor: "Yamuna Expressway & National Capital Transit Corridors",
    specialization: "BS-VI Compliant CNG/Electric Fleets & Luxury Sleeper Coaches",
    localBody: "Delhi Transport Infrastructure Development (DTIDC) guidelines",
    intro: "Delhi NCR demands high-volume, clean-emission B2B transit. Surendra & Co. specializes in high-security school bus manufacturing, institutional employee transport, and long-distance multi-axle sleeper buses that connect Delhi with northern tourist corridors via the Yamuna Expressway.",
    weldSpec: "High-tensile lightweight alloy frameworks that reduce tare weight, optimizing fuel efficiency and battery range for alternative fuel transit.",
    complianceSpec: "BS-VI heavy emission mounting platforms and strict National Capital Delhi RTO environmental safety clearances.",
    faqs: [
      {
        question: "Do you build CNG and electric bus bodies for Delhi operators?",
        answer: "Yes, our Delhi division engineers custom frame outriggers specifically reinforced to safely secure high-pressure CNG cylinders or heavy lithium battery packs on the roof or lower chassis bays.",
      },
      {
        question: "Are your school buses compliant with Delhi NCR school safety guidelines?",
        answer: "Absolutely. Our school buses are fully integrated with emergency exit doors, anti-roll steel cages, tamper-proof speed governors, interior CCTV grids, and GPS tracking hardware compliant with DL-RTO standards.",
      },
    ],
  },
  pune: {
    name: "Pune",
    region: "Maharashtra",
    rtoCode: "MH-12 / MH-14 RTO Compliant",
    corridor: "Pune-Bengaluru NH-48 Corridor",
    specialization: "Automotive Hub Precision Body Fabrication & Employee Shuttles",
    localBody: "Pune Metropolitan Region Development Authority (PMRDA)",
    intro: "Pune is a major industrial and technological epicenter. Surendra & Co. leverages advanced automotive fabrication technologies within the region, building high-frequency corporate IT shuttles, customized factory employee transporters, and specialized material transport containers.",
    weldSpec: "High-precision computer-guided fiber laser cuts and robotic MIG welds with 0.02mm tolerances, crafted within our high-tech fabrication bays.",
    complianceSpec: "Strict compliance with industrial employee transit safety standards and PMRDA commercial regulations.",
    faqs: [
      {
        question: "What makes your corporate IT shuttles popular in Pune?",
        answer: "We design Pune employee shuttles with premium noise-dampening acoustic cabins, high-output cooling duct systems, individual USB charging docks, and certified fire-retardant interior trim.",
      },
      {
        question: "Can we inspect the fabrication process at the workshop?",
        answer: "Yes. All Pune and Maharashtra commercial buyers are welcome to visit our heavy fabrication facilities to inspect ultrasonic weld scans and chassis alignment tests.",
      },
    ],
  },
  bangalore: {
    name: "Bangalore",
    region: "Karnataka",
    rtoCode: "KA-01 / KA-03 / KA-53 RTO Compliant",
    corridor: "Bengaluru-Chennai / Hyderabad Economic Corridors",
    specialization: "Bespoke IT Executive Shuttles & Heavy Multi-Axle Premium Liners",
    localBody: "Bruhat Bengaluru Mahanagara Palike (BBMP) transit regulations",
    intro: "Bengaluru is the tech capital of India, requiring advanced executive transport networks and long-distance intercity luxury liners. Surendra & Co. builds bespoke IT corporate employee coaches and authorized multi-axle luxury coachwork for high-end multi-axle premium chassis platforms.",
    weldSpec: "Low-vibration, high-rigidity structural space frames designed with heavy sound-absorbing composite panelling.",
    complianceSpec: "Karnataka State RTO commercial directives and advanced multiplex wiring safety approvals.",
    faqs: [
      {
        question: "Do your Bengaluru coaches support advanced multiplex wiring?",
        answer: "Yes. All our premium IT shuttles and luxury coaches feature advanced separate low-voltage multiplex electrical grids running inside fire-resistant tracks, keeping entertainment systems isolated from core drivetrain electronics.",
      },
      {
        question: "Are your luxury liners optimized for Bengaluru long-haul routes?",
        answer: "Yes, our coaches feature specialized air-ride suspension calibration, heavy thermal insulation, and custom acoustic layers that handle long Bengaluru-Chennai or Hyderabad routes in absolute quietness.",
      },
    ],
  },
};

// SSG Static Route Generation
export function generateStaticParams() {
  return [
    { city: "mumbai" },
    { city: "delhi" },
    { city: "pune" },
    { city: "bangalore" },
  ];
}

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const cityKey = resolvedParams?.city?.toLowerCase();
  const data = cityKey ? CITY_DATA[cityKey] : null;

  if (!data) {
    return {
      title: "Bus Body Builders",
      description: "Premium bus body building and custom coach manufacturing services in India.",
    };
  }

  return {
    title: `Bus Body Builders in ${data.name} | Custom Coach Manufacturers | Surendra & Co.`,
    description: `Premium B2B bus body builders in ${data.name}, ${data.region}. Specializing in luxury coaches, RTO compliant school buses, and custom vehicle fabrication. 40 years of precision engineering.`,
    keywords: [
      `bus body builders in ${data.name.toLowerCase()}`,
      `bus body manufacturers ${data.name.toLowerCase()}`,
      `bus fabricators ${data.name.toLowerCase()}`,
      `coach builders in ${data.name.toLowerCase()}`,
      `school bus manufacturers ${data.name.toLowerCase()}`,
    ],
  };
}

export default async function CityPage({ params }: PageProps) {
  const resolvedParams = await params;
  const cityKey = resolvedParams?.city?.toLowerCase();
  const data = cityKey ? CITY_DATA[cityKey] : null;

  if (!data) {
    notFound();
  }

  const eyebrow = `// REGIONAL SEO HUB // ${data.rtoCode.toUpperCase()}`;
  const h1 = `Bus Body Builders in ${data.name}`;
  const subtitle = `Premium B2B coachbuilding, high-strength chassis fabrication, and RTO compliant passenger transit systems engineered for ${data.name} and the ${data.corridor}.`;
  const technicalBrief = `Surendra & Co. delivers specialized heavy-vehicle body building and chassis integration solutions within the ${data.name} region, complying with local state RTO guidelines and regional transport route demands.`;

  const specifications = [
    { label: "REGIONAL HUB", value: `${data.name}, ${data.region}` },
    { label: "RTO COMPLIANCE", value: data.rtoCode },
    { label: "PRIMARY CORRIDOR", value: data.corridor },
    { label: "REGIONAL FOCUS", value: data.specialization },
    { label: "METALLIC TREATMENT", value: "Multi-stage anti-corrosion galvanized primer" },
    { label: "WELD PRECISION", value: "Robotic MIG / TIG certified welds" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Bus Body Builders in ${data.name} | Surendra & Co.`,
    "description": `B2B heavy vehicle coach building services and bus body fabrication in ${data.name}, ${data.region} since 1984.`,
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
      faqs={data.faqs}
      jsonLd={jsonLd}
    >
      <div className="flex flex-col gap-6">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-ivory uppercase tracking-wider mt-4">
          1. Bespoke Coach Building Engineered for {data.name} Roads
        </h2>
        <p>
          Operating high-capacity transport fleets in **{data.name}** requires engineering systems optimized for regional route profiles, local weather conditions, and high passenger traffic. {data.intro}
        </p>
        <p>
          At our state-of-the-art workshops, every chassis integration project starts with detailed structural reviews. By examining local road topography and fleet routes, we customize our anti-roll safety frames to handle maximum structural stress. This guarantees outstanding structural longevity, preserving the value of your commercial fleet.
        </p>

        <h2 className="font-serif text-xl sm:text-2xl font-bold text-ivory uppercase tracking-wider mt-4">
          2. Specialized Metal Treatment & Welding Guidelines
        </h2>
        <p>
          To maintain superior structural integrity, we apply specialized fabrication techniques:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2.5">
          <li>
            <strong>Structural Weld Standards:</strong> {data.weldSpec}
          </li>
          <li>
            <strong>Laser Alignment:</strong> Computer-guided laser cutting ensures precise steel frame mounting, preventing structural stress points.
          </li>
          <li>
            <strong>Vibration Dampening:</strong> Heavy sound-absorbing panels isolate passenger compartments from engine noise and road vibrations.
          </li>
        </ul>

        <h3 className="font-serif text-lg font-bold text-ivory uppercase tracking-wide mt-4">
          3. Absolute Regional RTO Compliance
        </h3>
        <p>
          Securing fast RTO registration is vital for transport operations. All our vehicles satisfy the strict parameters of the **{data.rtoCode}**. {data.complianceSpec}
        </p>
      </div>
    </SeoLandingTemplate>
  );
}
