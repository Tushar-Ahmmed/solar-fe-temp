"use client";

import React from "react";
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
import { useLanguage } from "@/context/language-context";

export function WhyUsClient() {
  const { t } = useLanguage();

  const comparisonItems = [
    {
      feature: t("whyUs.rowDesign", "Engineering Design & Modeling"),
      ourStandard: t("whyUs.rowDesignOur", "3D irradiance modeling, shadow analysis & IEB stamped SLD drawings"),
      others: t("whyUs.rowDesignOther", "Rough rule-of-thumb estimates without shade or load analysis"),
    },
    {
      feature: t("whyUs.rowPanels", "Solar PV Module Quality"),
      ourStandard: t("whyUs.rowPanelsOur", "100% Tier-1 BloombergNEF (Mono PERC / N-Type TOPCon) with barcode tracking"),
      others: t("whyUs.rowPanelsOther", "Unbranded, B-grade, or re-labeled panels with rapid efficiency degradation"),
    },
    {
      feature: t("whyUs.rowSafety", "Inverter & Switchgear Safety"),
      ourStandard: t("whyUs.rowSafetyOur", "AFCI arc-fault safety, Type II DC SPDs, genuine MC4 connectors & TUV cables"),
      others: t("whyUs.rowSafetyOther", "Generic AC breakers on DC circuits (high risk of electrical fire)"),
    },
    {
      feature: t("whyUs.rowStructure", "Rooftop Mounting Structure"),
      ourStandard: t("whyUs.rowStructureOur", "Hot-Dip Galvanized (HDG 80+ microns) / Anodized Al6005-T5 rated for 160+ km/h winds"),
      others: t("whyUs.rowStructureOther", "Standard painted MS steel prone to severe rust within 2–3 years in Bangladesh monsoon"),
    },
    {
      feature: t("whyUs.rowLiaison", "Net Metering Approvals"),
      ourStandard: t("whyUs.rowLiaisonOur", "End-to-end liaison with DESCO, DPDC, BREB, NESCO, and WZPDCL"),
      others: t("whyUs.rowLiaisonOther", "Client left to navigate complex utility bureaucracy alone"),
    },
    {
      feature: t("whyUs.rowSupport", "Local Warranty & Support"),
      ourStandard: t("whyUs.rowSupportOur", "Dhaka-based engineering team, on-site diagnostics, 24/7 WhatsApp triage"),
      others: t("whyUs.rowSupportOther", "Disappearing middlemen with no local after-sales support"),
    },
  ];

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: t("nav.whyUs", "Why Choose Us") }]} />

        {/* Page Hero Header */}
        <div className="mt-4 mb-16 max-w-4xl">
          <Badge variant="primary" size="sm" className="font-bold mb-3 uppercase tracking-wider">
            {t("whyUs.standardBadge", "Our Engineering Standard")}
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t("whyUs.heroTitle", "Engineered for Decades of Relentless Performance: The SolarPower BD Difference")}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-medium">
            {t("whyUs.heroSubtitle", "A solar power system is a 25-year infrastructure investment. We never compromise on component authenticity, safety switchgear, or structural integrity. Here is how our engineering rigor protects your capital.")}
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
            badge={t("whyUs.rigorBadge", "Engineering Rigor")}
            title={t("whyUs.pillarsTitle", "The 4 Pillars Behind Every Turnkey Installation")}
            subtitle={t("whyUs.pillarsSubtitle", "Every single system we commission undergoes rigorous technical validation by certified electrical engineers.")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                1. {t("whyUs.pillar1Title", "Licensed IEB Engineers & 3D Simulation")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t("whyUs.pillar1Desc", "We don't guess your energy production. Our electrical engineers use specialized PV simulation software to account for rooftop orientation, azimuth, shadow obstacles, and Bangladesh solar irradiance to calculate accurate monthly kWh generation.")}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                2. {t("whyUs.pillar2Title", "100% Genuine Tier-1 Sourcing Only")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t("whyUs.pillar2Desc", "We partner exclusively with BloombergNEF Tier-1 module manufacturers and internationally certified inverter brands. Every panel and inverter carries a verifiable manufacturer barcode and official warranty certificate.")}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                3. {t("whyUs.pillar3Title", "Cyclone-Rated Mounting & Fire Safety BOS")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t("whyUs.pillar3Desc", "Bangladesh faces heavy monsoons and coastal cyclones. Our mounting systems use 80+ micron hot-dip galvanized steel or AL6005-T5 aluminum rated for 160+ km/h winds, paired with dedicated DC surge protection devices (SPDs) and earthing rods.")}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                4. {t("whyUs.pillar4Title", "Responsive Dhaka Support & 25-Year Warranty")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t("whyUs.pillar4Desc", "Our support does not end at commissioning. Headquartered in Banani, Dhaka, our dedicated technical team provides responsive on-site troubleshooting, routine preventative maintenance, and instant WhatsApp support.")}
              </p>
            </div>
          </div>
        </div>

        {/* Comparison: Us vs Uncertified Local Vendors */}
        <div className="mb-20 space-y-6">
          <SectionHeader
            badge={t("whyUs.compareBadge", "Direct Comparison")}
            title={t("whyUs.comparisonTitle", "SolarPower Bangladesh vs. Uncertified Local Vendors")}
            subtitle={t("whyUs.comparisonSubtitle", "Understand why cheap cut-price installations end up costing 3x more due to frequent equipment burnouts and zero warranty support.")}
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="py-4 px-5 font-bold text-slate-900 w-1/3">{t("whyUs.colFeature", "Quality Standard")}</th>
                  <th className="py-4 px-5 font-bold text-sky-700 w-1/3 bg-sky-50/50">{t("whyUs.colOurStandard", "SolarPower Bangladesh")}</th>
                  <th className="py-4 px-5 font-bold text-rose-700 w-1/3">{t("whyUs.colOthers", "Uncertified Local Vendors")}</th>
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
              {t("whyUs.nationwideBadge", "Nationwide Service Coverage")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t("whyUs.nationwideTitle", "Serving Residential, Industrial & Commercial Clients Across Bangladesh")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t("whyUs.nationwideDesc", "We deploy certified engineering teams for site surveys, installations, and maintenance across all major divisions and industrial economic zones.")}
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
  );
}
