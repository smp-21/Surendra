import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Bus Body Builders in India | Luxury Coach & Commercial Bus Manufacturers | Surendra & Co.",
  description: "Premium B2B bus body builders and bus hardware manufacturers in India. Crafting luxury intercity coaches, high-security school buses, commercial chassis fabrication, and custom coach interiors with AIS-052 safety standards. Engineered since 1984.",
  keywords: [
    "bus body builders",
    "bus body builders india",
    "bus body manufacturers",
    "bus body manufacturer india",
    "bus fabrication company",
    "bus body fabricators",
    "bus coach builders",
    "luxury bus builders",
    "school bus manufacturers",
    "bus hardware",
    "bus hardware manufacturers",
    "bus hardware suppliers",
    "bus body hardware",
    "bus door hardware",
    "bus hinges",
    "bus locks",
    "bus handles",
    "best bus body builders in india",
    "top bus body manufacturers india",
    "who builds luxury buses in india"
  ],
  alternates: {
    canonical: "https://www.surendraco.com",
  },
  openGraph: {
    title: "Bus Body Builders in India | Luxury Coach & Commercial Bus Manufacturers | Surendra & Co.",
    description: "Premium B2B bus body builders and bus hardware manufacturers in India since 1984. Custom coach builders, luxury commercial buses, and school bus body fabrication.",
    url: "https://www.surendraco.com",
    siteName: "Surendra & Co.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bus Body Builders & Bus Hardware Manufacturers in India | Surendra & Co.",
    description: "Premium luxury coachbuilders and commercial bus body manufacturers in India. Rollover-safe school buses, custom chassis fabrication, and durable hardware solutions.",
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.surendraco.com/#organization",
        "name": "Surendra & Co.",
        "url": "https://www.surendraco.com",
        "logo": "https://www.surendraco.com/logo.png",
        "foundingDate": "1984",
        "description": "Premium B2B bus body builders and bus hardware manufacturers in India. Authorized commercial chassis bodybuilders.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-984-555-1984",
          "contactType": "Acquisitions & Sales",
          "email": "acquisitions@surendraco.com",
          "areaServed": "IN"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.surendraco.com/#localbusiness",
        "name": "Surendra & Co.",
        "image": "https://www.surendraco.com/next.svg",
        "telephone": "+91 984 555 1984",
        "email": "acquisitions@surendraco.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Steelworks Zone 3",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "12.9716",
          "longitude": "77.5946"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.surendraco.com/#product",
        "name": "Custom Commercial Bus Bodies & Luxury Coachbuilding",
        "image": "https://www.surendraco.com/next.svg",
        "description": "Bespoke heavy coach fabrication, rollover safety steel framing compliant with AIS-052 standards, and high-durability bus body hardware fittings.",
        "brand": {
          "@type": "Brand",
          "name": "Surendra & Co."
        }
      }
    ]
  };

  return (
    <>
      {/* 
        AIO/GEO/SEO Semantic Domination:
        Visually hidden H1 tag containing exact commercial intent query 
        to ensure instantaneous machine parsing by search engines and AI agents.
      */}
      <h1 className="sr-only">
        Premium Bus Body Builders & Bus Hardware Manufacturers in India
      </h1>

      {/* Programmatic JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HomeClient />
    </>
  );
}
