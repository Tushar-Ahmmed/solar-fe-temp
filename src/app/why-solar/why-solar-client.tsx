"use client";

import React from "react";
import {
  TrendingDown,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Leaf,
  DollarSign,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/home/cta-banner";
import { useLanguage } from "@/context/language-context";

export function WhySolarClient() {
  const { t } = useLanguage();

  const comparisonData = [
    {
      feature: t("whySolar.featGridDep", "Grid Dependency"),
      onGrid: t("whySolar.gridDepOn", "100% synchronized with grid"),
      offGrid: t("whySolar.gridDepOff", "Fully autonomous / zero grid"),
      hybrid: t("whySolar.gridDepHyb", "Works both with & without grid"),
    },
    {
      feature: t("whySolar.featBattery", "Battery Bank Required?"),
      onGrid: t("whySolar.batteryOn", "No (Lowest initial cost)"),
      offGrid: t("whySolar.batteryOff", "Yes (High battery capacity needed)"),
      hybrid: t("whySolar.batteryHyb", "Optional / Modular lithium battery"),
    },
    {
      feature: t("whySolar.featBackup", "Load Shedding Power Backup"),
      onGrid: t("whySolar.backupOn", "No (Shuts off during grid outages)"),
      offGrid: t("whySolar.backupOff", "Yes (24/7 continuous backup)"),
      hybrid: t("whySolar.backupHyb", "Yes (Instant 10ms seamless transfer)"),
    },
    {
      feature: t("whySolar.featNetMeter", "Net Metering Bill Credit (DESCO/DPDC)"),
      onGrid: t("whySolar.netMeterOn", "Yes (Direct bill credit export)"),
      offGrid: t("whySolar.netMeterOff", "No (Completely isolated)"),
      hybrid: t("whySolar.netMeterHyb", "Yes (Self-consumption + export credits)"),
    },
    {
      feature: t("whySolar.featRoi", "Typical Payback Period (ROI)"),
      onGrid: t("whySolar.roiOn", "3.0 – 4.0 Years"),
      offGrid: t("whySolar.roiOff", "5.0 – 6.5 Years"),
      hybrid: t("whySolar.roiHyb", "3.8 – 4.8 Years"),
    },
    {
      feature: t("whySolar.featBestFor", "Best Suited For in Bangladesh"),
      onGrid: t("whySolar.bestForOn", "Commercial factories & daytime offices"),
      offGrid: t("whySolar.bestForOff", "Remote agro farms, fish hatcheries, islands"),
      hybrid: t("whySolar.bestForHyb", "Residences, hospitals, continuous factories"),
    },
  ];

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: t("nav.whySolar", "Why Solar") }]} />

        {/* Page Hero Header */}
        <div className="mt-4 mb-16 max-w-4xl">
          <Badge variant="solar" size="sm" className="font-bold mb-3 uppercase tracking-wider">
            {t("whySolar.heroBadge", "Energy Economics Bangladesh")}
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t("whySolar.heroTitle", "The Economics of Solar Power in Bangladesh: Beat Tariff Hikes & Gain Energy Freedom")}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-medium">
            {t("whySolar.heroSubtitle", "With regular grid tariff hikes, industrial gas constraints, and frequent load shedding, engineered rooftop solar is no longer just an environmental gesture—it is the single highest-return capital investment for Bangladeshi homes and enterprises.")}
          </p>
        </div>

        {/* 4 Core Pillars of Solar Value */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <TrendingDown className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">
              {t("whySolar.benefit1Title", "70% to 90% Bill Reduction")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {t("whySolar.benefit1Desc", "Generate self-sustaining power directly on your roof during peak sunshine hours and bypass expensive upper-slab utility tariffs.")}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <DollarSign className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">
              {t("whySolar.benefit4Title", "Rapid 3.5 – 5 Year ROI")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {t("whySolar.benefit4Desc", "Your solar system pays for itself in less than 5 years. For the remaining 20+ years of panel life, you generate 100% free electricity.")}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="h-12 w-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">
              {t("whySolar.benefit3Title", "Net Metering Cash Credits")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {t("whySolar.benefit3Desc", "Export surplus units generated on weekends, holidays, and low-load hours back to DESCO/DPDC/BREB to offset future bills.")}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">
              {t("whySolar.benefit2Title", "Tariff Inflation Hedge")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {t("whySolar.benefit2Desc", "Lock in your cost of energy for the next 25 years. As conventional electricity prices rise, your solar ROI multiplies every year.")}
            </p>
          </div>
        </div>

        {/* In-Depth: Bangladesh Net Metering Explained */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 text-white shadow-xl">
          <div className="max-w-3xl space-y-3 mb-10">
            <Badge variant="solar" size="sm" className="font-bold">
              {t("whySolar.policyBadge", "National Policy Breakdown")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {t("whySolar.policyTitle", "How Solar Net Metering Works in Bangladesh (SREDA Guidelines)")}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t("whySolar.policyDesc", "Under the Ministry of Power, Energy & Mineral Resources and SREDA Net Metering Guidelines, consumers with three-phase utility connections can legally connect their solar plants to the national grid.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="text-3xl font-black text-amber-400">01</div>
              <h3 className="font-bold text-base text-white">{t("whySolar.step1Title", "Daytime Generation & Self-Consumption")}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t("whySolar.step1Desc", "Your rooftop solar panels power your appliances, ACs, and factory machinery first. Zero grid electricity is drawn during high sun hours.")}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="text-3xl font-black text-sky-400">02</div>
              <h3 className="font-bold text-base text-white">{t("whySolar.step2Title", "Surplus Export via Bi-Directional Meter")}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t("whySolar.step2Desc", "Any extra kWh not consumed on site flows automatically into the national distribution grid. Your bi-directional meter records exported units.")}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="text-3xl font-black text-emerald-400">03</div>
              <h3 className="font-bold text-base text-white">{t("whySolar.step3Title", "Monthly Utility Bill Netting & Rollover")}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t("whySolar.step3Desc", "At the end of each billing cycle (DESCO/DPDC/BREB), imported grid units are subtracted from exported solar units. Net credits roll over to following months.")}
              </p>
            </div>
          </div>
        </div>

        {/* System Type Comparison Table */}
        <div className="mb-20 space-y-6">
          <SectionHeader
            badge={t("whySolar.compBadge", "Architecture Comparison")}
            title={t("whySolar.compTitle", "On-Grid vs. Off-Grid vs. Hybrid Solar Systems")}
            subtitle={t("whySolar.compSubtitle", "Understanding the right solar architecture for your specific energy patterns, load shedding tolerance, and budget.")}
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="py-4 px-5 font-bold text-slate-900">{t("whySolar.colParam", "System Parameter")}</th>
                  <th className="py-4 px-5 font-bold text-sky-700">{t("whySolar.onGrid", "On-Grid (Grid-Tied)")}</th>
                  <th className="py-4 px-5 font-bold text-indigo-700">{t("whySolar.offGrid", "Off-Grid (Standalone)")}</th>
                  <th className="py-4 px-5 font-bold text-amber-700">{t("whySolar.hybrid", "Smart Hybrid System")}</th>
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
              {t("whySolar.esgBadge", "ESG & Sustainability Impact")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t("whySolar.esgTitle", "Driving Bangladesh's Clean Energy Transition & Global Export Competitiveness")}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t("whySolar.esgDesc", "Global fashion brands, EU importers, and international supply chain standards require Bangladeshi manufacturers to demonstrate clear carbon reduction roadmaps. A 100 kWp rooftop solar installation achieves:")}
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{t("whySolar.esgPoint1", "Over 110,000 kg of CO2 emissions avoided per year compared to coal/gas grid electricity.")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{t("whySolar.esgPoint2", "Equivalent to planting ~5,000 mature trees over a 25-year operational lifecycle.")}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{t("whySolar.esgPoint3", "Earns crucial LEED & ISO 50001 certification credits for green garment factory rating.")}</span>
              </li>
            </ul>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-sky-900 text-white shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <Leaf className="h-8 w-8 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">{t("whySolar.summaryTitle", "Solar Return Summary")}</h3>
            </div>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between py-2 border-b border-sky-800">
                <span className="text-slate-300">{t("whySolar.lcoeLabel", "Levelized Cost of Energy (LCOE):")}</span>
                <span className="font-bold text-emerald-300">~BDT 3.5 – 4.5 / kWh</span>
              </div>
              <div className="flex justify-between py-2 border-b border-sky-800">
                <span className="text-slate-300">{t("whySolar.gridTariffLabel", "Current Grid Commercial Tariff:")}</span>
                <span className="font-bold text-amber-300">~BDT 11.5 – 14.5 / kWh</span>
              </div>
              <div className="flex justify-between py-2 border-b border-sky-800">
                <span className="text-slate-300">{t("whySolar.savingsLabel", "Net Energy Cost Savings:")}</span>
                <span className="font-bold text-emerald-400">{t("whySolar.savingsValue", "Up to 65% – 75% per Unit")}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-300">{t("whySolar.guaranteeLabel", "Panel Guaranteed Performance:")}</span>
                <span className="font-bold text-white">{t("whySolar.guaranteeValue", "25 – 30 Years Linear Output")}</span>
              </div>
            </div>
            <Button
              variant="solar"
              size="md"
              href="/contact"
              className="w-full justify-center shadow-md font-bold"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              {t("whySolar.calcCta", "Get Custom Feasibility & ROI Calculation")}
            </Button>
          </div>
        </div>

        {/* Global CTA */}
        <CTABanner />
      </Container>
    </div>
  );
}
