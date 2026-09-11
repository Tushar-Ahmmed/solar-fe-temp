"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Target,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { companyData } from "@/data/company";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/home/cta-banner";
import { useLanguage } from "@/context/language-context";

export function AboutClient() {
  const { t } = useLanguage();

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: t("breadcrumb.about", "About Us") }]} />

        {/* Hero Section */}
        <div className="mt-4 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="solar" size="sm" className="font-bold uppercase tracking-wider">
              {t("about.heroBadge", "Engineering Clean Energy Since 2020")}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t("about.heroTitle", "Pioneering Engineered Solar Power Infrastructure Across Bangladesh")}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              {t("about.heroSubtitle", siteConfig.description)}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Button variant="primary" size="md" href="/contact" rightIcon={<ArrowRight className="h-4 w-4" />}>
                {t("about.partnerBtn", "Partner with Our Engineers")}
              </Button>
              <Button variant="outline" size="md" href="/services">
                {t("about.exploreBtn", "Explore EPC Capabilities")}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl bg-slate-900">
            <Image
              src="/images/company/office-bangladesh.webp"
              alt="SolarPower Bangladesh Engineering HQ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/80">
              <div className="text-xs font-bold text-amber-400">{t("about.hqLabel", "Headquarters")}</div>
              <div className="text-xs text-slate-300">{t("about.hqDesc", "Banani, Dhaka • Nationwide Field Deployment")}</div>
            </div>
          </div>
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

        {/* Mission & Vision Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl space-y-4 relative overflow-hidden">
            <div className="h-12 w-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">{t("about.missionTitle", "Our Engineering Mission")}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t("about.missionDesc", "To eliminate energy vulnerability in Bangladesh by deploying technically rigorous, zero-failure solar systems that deliver predictable monetary returns, continuous power security, and measurable carbon offsets for residential and commercial property owners.")}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-sky-900 to-slate-900 text-white shadow-xl space-y-4 relative overflow-hidden">
            <div className="h-12 w-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">{t("about.visionTitle", "Our Long-Term Vision")}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t("about.visionDesc", "To be recognized as Bangladesh's most technically trusted solar EPC brand, setting the benchmark for equipment transparency, cyclone-resilient structural design, and lifelong customer support across all 8 administrative divisions.")}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20 space-y-10">
          <SectionHeader
            badge={t("about.valuesTitle", "Our Guiding Values")}
            title={t("about.valuesSubtitle", "Built on Integrity, Safety & Engineering Precision")}
            subtitle={t("about.valuesDesc", "We distinguish ourselves from brokers and uncertified traders by operating strictly as an engineering-driven solar organization.")}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {companyData.coreValues.map((value, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    {value.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Industry Compliance */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-8">
          <div className="max-w-2xl space-y-2">
            <Badge variant="primary" size="sm" className="font-bold">
              {t("about.standardsTitle", "Technical Standards")}
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t("about.complianceTitle", "Certifications & Regulatory Compliance")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {t("about.complianceSubtitle", "All system designs, single-line diagrams, and protection coordination schemes comply with international and national bodies.")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.certificationsPlaceholder.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
              >
                <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800 leading-snug">{cert}</span>
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
