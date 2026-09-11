import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { WhySolarClient } from "./why-solar-client";

export const metadata: Metadata = {
  title: "Why Solar in Bangladesh | Net Metering, ROI & Energy Savings Guide",
  description:
    "Discover the financial and energy security benefits of rooftop solar in Bangladesh. Learn how Net Metering with DESCO/DPDC/BREB cuts electricity bills by up to 90% with a 3.5-year ROI.",
  keywords: [
    "why solar energy Bangladesh",
    "solar net metering Bangladesh",
    "solar panel return on investment Dhaka",
    "on-grid vs off-grid solar Bangladesh",
    "solar electricity savings DESCO DPDC",
    "commercial solar ROI Bangladesh",
  ],
  alternates: {
    canonical: `${siteConfig.url}/why-solar`,
  },
  openGraph: {
    title: "Why Solar in Bangladesh | Net Metering, ROI & Energy Savings Guide",
    description:
      "Comprehensive analysis of rooftop solar economics, utility tariff protection, and national net metering in Bangladesh.",
    url: `${siteConfig.url}/why-solar`,
    images: [
      {
        url: "/images/banners/hero-solar-banner.webp",
        width: 1200,
        height: 630,
        alt: "Why Solar Power Bangladesh",
      },
    ],
  },
};

export default function WhySolarPage() {
  // Schema.org WebPage & BreadcrumbList JSON-LD
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Why Solar in Bangladesh | Net Metering, ROI & Energy Savings Guide",
    description:
      "Discover the financial and energy security benefits of rooftop solar in Bangladesh.",
    url: `${siteConfig.url}/why-solar`,
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
        name: "Why Solar",
        item: `${siteConfig.url}/why-solar`,
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
      <WhySolarClient />
    </>
  );
}
