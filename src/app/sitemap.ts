import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.surendraco.com";

  // Core static and base routes
  const routes = [
    "",
    "/heritage",
    "/range",
    "/services",
    "/process",
    "/compliance",
    "/commission",
    "/privacy",
    "/cookies",
    "/terms",
    // SEO Core Commercial Landing Pages
    "/bus-body-builders-india",
    "/bus-hardware-manufacturers",
    "/luxury-bus-builders",
    "/school-bus-manufacturers",
    "/bus-body-fabrication",
    "/custom-bus-interiors",
    // Programmatic Local SEO Hub Pages
    "/bus-body-builders-in-mumbai",
    "/bus-body-builders-in-delhi",
    "/bus-body-builders-in-pune",
    "/bus-body-builders-in-bangalore",
  ];

  return routes.map((route) => {
    // Dynamic determination of update frequency and priorities
    let priority = 0.5;
    let changeFrequency: "daily" | "weekly" | "monthly" = "monthly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route.startsWith("/bus-")) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (["/range", "/services", "/compliance"].includes(route)) {
      priority = 0.8;
      changeFrequency = "weekly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
