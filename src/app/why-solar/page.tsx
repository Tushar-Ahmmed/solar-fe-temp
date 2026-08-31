import React from "react";
import type { Metadata } from "next";
import {
  TrendingDown,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Leaf,
  DollarSign,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/home/cta-banner";

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
  const comparisonData = [
    {
      feature: "Grid Dependency",
      onGrid: "100% synchronized with grid",
      offGrid: "Fully autonomous / zero grid",
      hybrid: "Works both with & without grid",
    },
    {
      feature: "Battery Bank Required?",
      onGrid: "No (Lowest initial cost)",
      offGrid: "Yes (High battery capacity needed)",
      hybrid: "Optional / Modular lithium battery",
    },
    {
      feature: "Load Shedding Power Backup",
      onGrid: "No (Shuts off during grid outages)",
      offGrid: "Yes (24/7 continuous backup)",
      hybrid: "Yes (Instant 10ms seamless transfer)",
    },
    {
      feature: "Net Metering Bill Credit (DESCO/DPDC)",
      onGrid: "Yes (Direct bill credit export)",
      offGrid: "No (Completely isolated)",
      hybrid: "Yes (Self-consumption + export credits)",
    },
    {
      feature: "Typical Payback Period (ROI)",
      onGrid: "3.0 – 4.0 Years",
      offGrid: "5.0 – 6.5 Years",
      hybrid: "3.8 – 4.8 Years",
    },
    {
      feature: "Best Suited For in Bangladesh",
      onGrid: "Commercial factories & daytime offices",
      offGrid: "Remote agro farms, fish hatcheries, islands",
      hybrid: "Residences, hospitals, continuous factories",
    },
  ];

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
      <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
        <Container>
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ label: "Why Solar" }]} />

        {/* Page Hero Header */}
        <div className="mt-4 mb-16 max-w-4xl">
          <Badge variant="solar" size="sm" className="font-bold mb-3 uppercase tracking-wider">
            Energy Economics & Security
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            The Economics of Solar Power in Bangladesh: Beat Tariff Hikes & Gain Energy Freedom
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-medium">
            With regular grid tariff hikes, industrial gas constraints, and frequent load shedding, engineered rooftop solar is no longer just an environmental gesture—it is the single highest-return capital investment for Bangladeshi homes and enterprises.
          </p>
        </div>

        {/* 4 Core Pillars of Solar Value */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <TrendingDown className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">70% to 90% Bill Reduction</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Generate self-sustaining power directly on your roof during peak sunshine hours and bypass expensive upper-slab utility tariffs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <DollarSign className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Rapid 3.5 – 5 Year ROI</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Your solar system pays for itself in less than 5 years. For the remaining 20+ years of panel life, you generate 100% free electricity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="h-12 w-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Net Metering Cash Credits</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Export surplus units generated on weekends, holidays, and low-load hours back to DESCO/DPDC/BREB to offset future bills.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Tariff Inflation Hedge</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Lock in your cost of energy for the next 25 years. As conventional electricity prices rise, your solar ROI multiplies every year.
            </p>
          </div>
        </div>

        {/* In-Depth: Bangladesh Net Metering Explained */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 text-white shadow-xl">
          <div className="max-w-3xl space-y-3 mb-10">
            <Badge variant="solar" size="sm" className="font-bold">
              National Policy Breakdown
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              How Solar Net Metering Works in Bangladesh (SREDA Guidelines)
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Under the Ministry of Power, Energy & Mineral Resources and SREDA Net Metering Guidelines, consumers with three-phase utility connections can legally connect their solar plants to the national grid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="text-3xl font-black text-amber-400">01</div>
              <h3 className="font-bold text-base text-white">Daytime Generation & Self-Consumption</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Your rooftop solar panels power your appliances, ACs, and factory machinery first. Zero grid electricity is drawn during high sun hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="text-3xl font-black text-sky-400">02</div>
              <h3 className="font-bold text-base text-white">Surplus Export via Bi-Directional Meter</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Any extra kWh not consumed on site flows automatically into the national distribution grid. Your bi-directional meter records exported units.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="text-3xl font-black text-emerald-400">03</div>
              <h3 className="font-bold text-base text-white">Monthly Utility Bill Netting & Rollover</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                At the end of each billing cycle (DESCO/DPDC/BREB), imported grid units are subtracted from exported solar units. Net credits roll over to following months.
              </p>
            </div>
          </div>
        </div>

        {/* System Type Comparison Table */}
        <div className="mb-20 space-y-6">
          <SectionHeader
            badge="Architecture Comparison"
            title="On-Grid vs. Off-Grid vs. Hybrid Solar Systems"
            subtitle="Understanding the right solar architecture for your specific energy patterns, load shedding tolerance, and budget."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="py-4 px-5 font-bold text-slate-900">System Parameter</th>
                  <th className="py-4 px-5 font-bold text-sky-700">On-Grid (Grid-Tied)</th>
                  <th className="py-4 px-5 font-bold text-indigo-700">Off-Grid (Standalone)</th>
                  <th className="py-4 px-5 font-bold text-amber-700">Smart Hybrid System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-5 font-semibold text-slate-900 bg-slate-50/50">
                      {row.feature}
                    </td>
                    <td className="py-4 px-5 text-slate-600">{row.onGrid}</td>
                    <td className="py-4 px-5 text-slate-600">{row.offGrid}</td>
                    <td className="py-4 px-5 text-slate-900 font-medium bg-amber-50/20">
                      {row.hybrid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Environmental & ESG Value */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Badge variant="success" size="sm" className="font-bold">
              ESG & Sustainability Impact
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Driving Bangladesh&apos;s Clean Energy Transition & Global Export Competitiveness
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Global fashion brands, EU importers, and international supply chain standards require Bangladeshi manufacturers to demonstrate clear carbon reduction roadmaps. A 100 kWp rooftop solar installation achieves:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Over 110,000 kg of CO2 emissions avoided</strong> per year compared to coal/gas grid electricity.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Equivalent to planting ~5,000 mature trees</strong> over a 25-year operational lifecycle.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Earns crucial LEED & ISO 50001 certification credits</strong> for green garment factory rating.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-sky-900 text-white shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <Leaf className="h-8 w-8 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Solar Return Summary</h3>
            </div>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between py-2 border-b border-sky-800">
                <span className="text-slate-300">Levelized Cost of Energy (LCOE):</span>
                <span className="font-bold text-emerald-300">~BDT 3.5 – 4.5 / kWh</span>
              </div>
              <div className="flex justify-between py-2 border-b border-sky-800">
                <span className="text-slate-300">Current Grid Commercial Tariff:</span>
                <span className="font-bold text-amber-300">~BDT 11.5 – 14.5 / kWh</span>
              </div>
              <div className="flex justify-between py-2 border-b border-sky-800">
                <span className="text-slate-300">Net Energy Cost Savings:</span>
                <span className="font-bold text-emerald-400">Up to 65% – 75% per Unit</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-300">Panel Guaranteed Performance:</span>
                <span className="font-bold text-white">25 – 30 Years Linear Output</span>
              </div>
            </div>
            <Button
              variant="solar"
              size="md"
              href="/contact"
              className="w-full justify-center shadow-md font-bold"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Get Custom Feasibility & ROI Calculation
            </Button>
          </div>
        </div>

        {/* Global CTA */}
        <CTABanner />
      </Container>
    </div>
    </>
  );
}
