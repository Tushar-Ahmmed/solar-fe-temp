import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";
import { ServicesClient } from "./services-client";

export const metadata: Metadata = {
  title: "Solar Engineering, EPC & Net Metering Services Bangladesh",
  description:
    "Turnkey solar EPC solutions across Bangladesh: Residential rooftop solar, Commercial & Industrial (C&I) solar plants, DESCO/DPDC net metering liaison, and solar pump systems.",
  keywords: [
    "solar EPC Bangladesh",
    "rooftop solar installation Dhaka",
    "commercial solar Bangladesh",
    "solar net metering DESCO DPDC",
    "solar maintenance service Dhaka",
    "solar irrigation pump Bangladesh",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Solar Engineering, EPC & Net Metering Services | SolarPower Bangladesh",
    description:
      "Turnkey solar engineering for residential, commercial, industrial, and agricultural clients across Bangladesh.",
    url: `${siteConfig.url}/services`,
    images: [
      {
        url: "/images/banners/hero-solar-banner.webp",
        width: 1200,
        height: 630,
        alt: "Solar Engineering Services Bangladesh",
      },
    ],
  },
};

export default function ServicesPage() {
  // Schema.org ItemList JSON-LD
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Solar Engineering EPC & Consultation Services",
    description: "Turnkey solar EPC solutions across Bangladesh",
    itemListElement: servicesData.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${siteConfig.url}/services/${service.slug}`,
      image: `${siteConfig.url}${service.image}`,
    })),
  };

  // Schema.org BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}/services`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesClient />
    </>
  );
}
