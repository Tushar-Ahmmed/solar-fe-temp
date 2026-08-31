import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/services";
import { CTABanner } from "@/components/home/cta-banner";
import { ShieldCheck, Zap, Award, Wrench } from "lucide-react";

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
      <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
        <Container>
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ label: "Services" }]} />

        {/* Page Header */}
        <div className="mt-4 mb-12 sm:mb-16">
          <SectionHeader
            badge="Engineering Solutions"
            title="Complete Turnkey Solar Engineering & EPC Services"
            subtitle="From structural roof audits and electrical design to grid synchronization and 25-year lifecycle maintenance, we engineer high-performance solar systems across Bangladesh."
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Why Choose Our Engineering Section */}
        <div className="mt-20 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
              Engineering Assurance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why Bangladesh&apos;s Leading Businesses & Homeowners Trust Our EPC Services
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              We eliminate guesswork with rigorous engineering standards, cyclone-rated mounting systems, and 100% compliance with national electrical codes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-white text-base">IEB Engineers</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Design and validation by licensed electrical engineers adhering to BNBC and SREDA guidelines.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-white text-base">Tier-1 Equipment</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct sourcing of global Tier-1 BloombergNEF panels, hybrid inverters, and LiFePO4 battery banks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-white text-base">Net Metering Liaison</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                End-to-end utility approvals with DESCO, DPDC, BREB, NESCO, and WZPDCL without bureaucratic delay.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Wrench className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-white text-base">Lifetime Local O&M</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rapid Dhaka-based on-site technical response, performance health audits, and telemetry monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Global CTA */}
        <div className="mt-20">
          <CTABanner />
        </div>
      </Container>
    </div>
    </>
  );
}
