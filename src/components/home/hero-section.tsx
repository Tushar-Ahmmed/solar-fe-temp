"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Sun, Award, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const { t } = useLanguage();
  const whatsappUrl = generateWhatsAppLink({
    inquiryType: "quote",
  });

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Eyebrow Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <Badge variant="solar" className="px-3 py-1 font-bold text-xs">
                <Sun className="h-3.5 w-3.5 mr-1" />
                {t("hero.badge", "Bangladesh Solar Energy Specialists")}
              </Badge>
              <span className="text-xs text-slate-400 hidden sm:inline-flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                {t("hero.sreda", "SREDA Guidelines Compliant")}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold tracking-tight leading-[1.15] text-white">
              {t("hero.title", "Reliable Solar Power for")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300">
                {t("hero.titleHighlight", "Homes & Factories")}
              </span>{" "}
              {t("hero.titleEnd", "Across Bangladesh")}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t(
                "hero.description",
                "Cut electricity bills by up to 70-90% with Tier-1 solar modules, intelligent hybrid inverters, and lithium storage. Designed for uninterrupted power during load shedding and utility net metering."
              )}
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-300 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{t("hero.benefit1", "25-Year Linear Power Warranty")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{t("hero.benefit2", "DESCO / DPDC / BREB Net Metering")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{t("hero.benefit3", "Zero-Downtime Lithium UPS Backup")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{t("hero.benefit4", "IEB-Certified Electrical Engineers")}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <Button
                variant="solar"
                size="lg"
                href="/contact"
                className="w-full sm:w-auto font-semibold"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                {t("hero.ctaPrimary", "Request Rooftop Feasibility")}
              </Button>

              <Button
                variant="whatsapp"
                size="lg"
                href={whatsappUrl}
                className="w-full sm:w-auto font-semibold"
                leftIcon={<MessageSquare className="h-4 w-4" />}
              >
                {t("hero.ctaSecondary", "Chat on WhatsApp")}
              </Button>
            </div>

            {/* Trust Note */}
            <p className="text-xs text-slate-400 pt-1">
              {t("hero.trustNote", "Direct consultation with our engineers • Hotline:")}{" "}
              <a href={`tel:${siteConfig.phoneRaw}`} className="text-sky-400 hover:underline font-semibold">
                {siteConfig.phone}
              </a>
            </p>
          </div>

          {/* Right Column: Hero Visual Graphic / Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 p-3 sm:p-4 border border-slate-700/80 shadow-2xl backdrop-blur-xs">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
                <Image
                  src="/images/banners/hero-solar-banner.webp"
                  alt="Engineered rooftop solar installation in Bangladesh"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />

                {/* Floating Metric Badges */}
                <div className="absolute top-3 left-3 rounded-lg bg-slate-950/85 backdrop-blur-md px-3 py-2 border border-slate-800 text-left shadow-lg">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                    <Sun className="h-3.5 w-3.5" />
                    <span>{t("hero.cardTier1", "Tier-1 PV Modules")}</span>
                  </div>
                  <div className="text-[11px] text-slate-300">
                    {t("hero.cardTier1Sub", "Monocrystalline Half-Cut")}
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 rounded-lg bg-slate-950/85 backdrop-blur-md px-3 py-2 border border-slate-800 text-left shadow-lg">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                    <Zap className="h-3.5 w-3.5" />
                    <span>{t("hero.cardEfficiency", "98.2% Conversion")}</span>
                  </div>
                  <div className="text-[11px] text-slate-300">
                    {t("hero.cardEfficiencySub", "Smart MPPT Inverters")}
                  </div>
                </div>
              </div>

              {/* Quick Spec Highlights */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="font-bold text-sky-400 text-sm sm:text-base">
                    {t("hero.statWarranty", "25+ Yrs")}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {t("hero.statWarrantyLabel", "Power Warranty")}
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="font-bold text-amber-400 text-sm sm:text-base">
                    {t("hero.statSavings", "70-90%")}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {t("hero.statSavingsLabel", "Bill Reduction")}
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="font-bold text-emerald-400 text-sm sm:text-base">
                    {t("hero.statRoi", "3.5-5 Yrs")}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {t("hero.statRoiLabel", "Typical ROI")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Metric Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <ShieldCheck className="h-7 w-7 text-sky-400 shrink-0" />
            <div>
              <div className="text-base font-bold text-white">
                {t("hero.trustTier1", "Tier-1 Hardware")}
              </div>
              <div className="text-xs text-slate-400">
                {t("hero.trustTier1Sub", "Strict quality certification")}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Sun className="h-7 w-7 text-amber-400 shrink-0" />
            <div>
              <div className="text-base font-bold text-white">
                {t("hero.trustNetMeter", "Net-Metering Liaison")}
              </div>
              <div className="text-xs text-slate-400">
                {t("hero.trustNetMeterSub", "DESCO, DPDC & BREB")}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Zap className="h-7 w-7 text-emerald-400 shrink-0" />
            <div>
              <div className="text-base font-bold text-white">
                {t("hero.trustLithium", "LiFePO4 Storage")}
              </div>
              <div className="text-xs text-slate-400">
                {t("hero.trustLithiumSub", "6,000+ deep cycle life")}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Award className="h-7 w-7 text-cyan-400 shrink-0" />
            <div>
              <div className="text-base font-bold text-white">
                {t("hero.trustEngineers", "Certified Engineers")}
              </div>
              <div className="text-xs text-slate-400">
                {t("hero.trustEngineersSub", "Custom 3D CAD modeling")}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
