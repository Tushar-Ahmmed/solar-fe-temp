import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { faqsData } from "@/data/faqs";
import {
  HeroSection,
  CompanyIntro,
  FeaturedProducts,
  SolutionsSplit,
  ServicesOverview,
  BenefitsSection,
  WhyUsSection,
  EducationalPreview,
  FAQSection,
  CTABanner,
} from "@/components/home";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Reliable Solar Energy Solutions for Bangladesh`,
  description:
    "Leading solar engineering company in Bangladesh. High-efficiency Tier-1 solar panels, hybrid inverters, LiFePO4 batteries, and turnkey rooftop installations for homes and factories.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.name} | Reliable Solar Energy Solutions for Bangladesh`,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    images: [
      {
        url: "/images/banners/hero-solar-banner.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Solar Energy Solutions Bangladesh`,
      },
    ],
  },
};

export default function HomePage() {
  // Structured Data (Schema.org JSON-LD for Organization & LocalBusiness)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.area,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.coordinates?.latitude || 23.7937,
      longitude: siteConfig.address.coordinates?.longitude || 90.4066,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };

  // Schema.org FAQPage Structured Data for Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <CompanyIntro />
        <FeaturedProducts />
        <SolutionsSplit />
        <ServicesOverview />
        <BenefitsSection />
        <WhyUsSection />
        <EducationalPreview />
        <FAQSection />
        <CTABanner />
      </div>
    </>
  );
}
