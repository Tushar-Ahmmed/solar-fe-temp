import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { WhyUsClient } from "./why-us-client";

export const metadata: Metadata = {
  title: "Why Choose Us | Certified Solar EPC & Tier-1 Warranties Bangladesh",
  description:
    "Discover why SolarPower Bangladesh is the trusted solar engineering partner in Dhaka and nationwide. IEB registered engineers, 100% genuine Tier-1 equipment, cyclone-grade mounting, and local warranty support.",
  keywords: [
    "best solar company Bangladesh",
    "certified solar EPC Dhaka",
    "Tier-1 solar panels Bangladesh",
    "solar company Dhaka warranty",
    "solar installation quality Bangladesh",
  ],
  alternates: {
    canonical: `${siteConfig.url}/why-us`,
  },
  openGraph: {
    title: "Why Choose SolarPower Bangladesh | Certified Solar Engineering",
    description:
      "Engineering excellence, 100% genuine Tier-1 solar panels and inverters, and dedicated local support across Bangladesh.",
    url: `${siteConfig.url}/why-us`,
    images: [
      {
        url: "/images/banners/hero-solar-banner.webp",
        width: 1200,
        height: 630,
        alt: "Why Choose SolarPower Bangladesh",
      },
    ],
  },
};

export default function WhyUsPage() {
  // Schema.org WebPage & BreadcrumbList JSON-LD
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Why Choose SolarPower Bangladesh | Certified Solar Engineering",
    description:
      "IEB registered engineers, 100% genuine Tier-1 equipment, cyclone-grade mounting, and local warranty support.",
    url: `${siteConfig.url}/why-us`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
  };

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
        name: "Why Choose Us",
        item: `${siteConfig.url}/why-us`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WhyUsClient />
    </>
  );
}
