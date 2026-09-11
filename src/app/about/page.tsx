import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "About Us | Solar Engineering Leadership & Certifications Bangladesh",
  description:
    "Learn about SolarPower Bangladesh, Dhaka's premier renewable energy engineering company. Founded in 2020, our licensed IEB engineers deliver Tier-1 solar EPC across Bangladesh.",
  keywords: [
    "about SolarPower Bangladesh",
    "solar company Dhaka history",
    "solar engineers Bangladesh IEB",
    "renewable energy EPC company Bangladesh",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About SolarPower Bangladesh | Certified Solar Engineering Leadership",
    description:
      "Delivering engineered solar energy systems for homes, businesses, and industrial factories across Bangladesh since 2020.",
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: "/images/company/office-bangladesh.webp",
        width: 1200,
        height: 630,
        alt: "SolarPower Bangladesh Engineering Headquarters Dhaka",
      },
    ],
  },
};

export default function AboutPage() {
  // Schema.org Organization & BreadcrumbList JSON-LD
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: `${siteConfig.url}/about`,
    logo: `${siteConfig.url}/images/banners/hero-solar-banner.webp`,
    foundingDate: siteConfig.foundedYear.toString(),
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.area,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "BD",
    },
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About SolarPower Bangladesh",
    description: "Learn about our solar engineering background, licensed IEB engineers, and Tier-1 quality standards.",
    url: `${siteConfig.url}/about`,
    mainEntity: {
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
        name: "About Us",
        item: `${siteConfig.url}/about`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}
