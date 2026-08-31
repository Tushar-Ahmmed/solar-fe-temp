import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  Zap,
  CheckCircle2,
  XCircle,
  MapPin,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { companyData } from "@/data/company";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { CTABanner } from "@/components/home/cta-banner";

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
  const comparisonItems = [
    {
      feature: "Engineering Design & Modeling",
      ourStandard: "3D irradiance modeling, shadow analysis & IEB stamped SLD drawings",
      others: "Rough rule-of-thumb estimates without shade or load analysis",
    },
    {
      feature: "Solar PV Module Quality",
      ourStandard: "100% Tier-1 BloombergNEF (Mono PERC / N-Type TOPCon) with barcode tracking",
      others: "Unbranded, B-grade, or re-labeled panels with rapid efficiency degradation",
    },
    {
      feature: "Inverter & Switchgear Safety",
      ourStandard: "AFCI arc-fault safety, Type II DC SPDs, genuine MC4 connectors & TUV cables",
      others: "Generic AC breakers on DC circuits (high risk of electrical fire)",
    },
    {
      feature: "Rooftop Mounting Structure",
      ourStandard: "Hot-Dip Galvanized (HDG 80+ microns) / Anodized Al6005-T5 rated for 160+ km/h winds",
      others: "Standard painted MS steel prone to severe rust within 2–3 years in Bangladesh monsoon",
    },
    {
      feature: "Net Metering Approvals",
      ourStandard: "End-to-end liaison with DESCO, DPDC, BREB, NESCO, and WZPDCL",
      others: "Client left to navigate complex utility bureaucracy alone",
    },
    {
      feature: "Local Warranty & Support",
      ourStandard: "Dhaka-based engineering team, on-site diagnostics, 24/7 WhatsApp triage",
      others: "Disappearing middlemen with no local after-sales support",
    },
  ];

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
      <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
        <Container>
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ label: "Why Choose Us" }]} />

        {/* Page Hero Header */}
        <div className="mt-4 mb-16 max-w-4xl">
          <Badge variant="primary" size="sm" className="font-bold mb-3 uppercase tracking-wider">
            Our Engineering Standard
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Engineered for Decades of Relentless Performance: The SolarPower BD Difference
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-medium">
            A solar power system is a 25-year infrastructure investment. We never compromise on component authenticity, safety switchgear, or structural integrity. Here is how our engineering rigor protects your capital.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {companyData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-center space-y-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-600 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">{stat.label}</div>
              <div className="text-[11px] text-slate-500">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* 4 Core Pillars of Engineering Rigor */}
        <div className="mb-20 space-y-10">
          <SectionHeader
            badge="Engineering Rigor"
            title="The 4 Pillars Behind Every Turnkey Installation"
            subtitle="Every single system we commission undergoes rigorous technical validation by certified electrical engineers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                1. Licensed IEB Engineers & 3D Simulation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We don&apos;t guess your energy production. Our electrical engineers use specialized PV simulation software to account for rooftop orientation, azimuth, shadow obstacles, and Bangladesh solar irradiance to calculate accurate monthly kWh generation.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                2. 100% Genuine Tier-1 Sourcing Only
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We partner exclusively with BloombergNEF Tier-1 module manufacturers and internationally certified inverter brands. Every panel and inverter carries a verifiable manufacturer barcode and official warranty certificate.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                3. Cyclone-Rated Mounting & Fire Safety BOS
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bangladesh faces heavy monsoons and coastal cyclones. Our mounting systems use 80+ micron hot-dip galvanized steel or AL6005-T5 aluminum rated for 160+ km/h winds, paired with dedicated DC surge protection devices (SPDs) and earthing rods.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                4. Responsive Dhaka Support & 25-Year Warranty
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our support does not end at commissioning. Headquartered in Banani, Dhaka, our dedicated technical team provides responsive on-site troubleshooting, routine preventative maintenance, and instant WhatsApp support.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison: Us vs Uncertified Local Vendors */}
        <div className="mb-20 space-y-6">
          <SectionHeader
            badge="Direct Comparison"
            title="SolarPower Bangladesh vs. Uncertified Local Vendors"
            subtitle="Understand why cheap cut-price installations end up costing 3x more due to frequent equipment burnouts and zero warranty support."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="py-4 px-5 font-bold text-slate-900 w-1/3">Quality Standard</th>
                  <th className="py-4 px-5 font-bold text-sky-700 w-1/3 bg-sky-50/50">SolarPower Bangladesh</th>
                  <th className="py-4 px-5 font-bold text-rose-700 w-1/3">Uncertified Local Vendors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-5 font-bold text-slate-900 bg-slate-50/30">
                      {item.feature}
                    </td>
                    <td className="py-4 px-5 text-slate-900 font-medium bg-sky-50/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item.ourStandard}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-500">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{item.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Nationwide Service Coverage */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="max-w-3xl mb-8 space-y-2">
            <Badge variant="solar" size="sm" className="font-bold">
              Nationwide Service Coverage
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Serving Residential, Industrial & Commercial Clients Across Bangladesh
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We deploy certified engineering teams for site surveys, installations, and maintenance across all major divisions and industrial economic zones.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
            {siteConfig.serviceAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 font-medium"
              >
                <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                <span className="line-clamp-1">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Global CTA */}
        <CTABanner />
      </Container>
    </div>
    </>
  );
}
