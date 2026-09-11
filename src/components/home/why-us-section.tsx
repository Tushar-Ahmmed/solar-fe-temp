"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Cpu, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export function WhyUsSection() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-sky-400" />,
      title: t("whyUs.card1Title", "100% Genuine Tier-1 Equipment"),
      description: t(
        "whyUs.card1Desc",
        "Every solar module, inverter, and battery is sourced with verifiable manufacturer serial numbers. No counterfeit panels or downgraded B-grade cells."
      ),
    },
    {
      icon: <Cpu className="h-6 w-6 text-amber-400" />,
      title: t("whyUs.card2Title", "Engineered 3D Shading Simulation"),
      description: t(
        "whyUs.card2Desc",
        "Our engineers model your exact rooftop orientation, surrounding obstacles, and parapet walls to guarantee optimal tilt angles and realistic generation output."
      ),
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-400" />,
      title: t("whyUs.card3Title", "Local Bangladesh Warranty & Support"),
      description: t(
        "whyUs.card3Desc",
        "We are headquartered in Dhaka with mobile service technicians ready to handle preventative cleaning, thermal audits, and warranty replacements swiftly."
      ),
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-cyan-400" />,
      title: t("whyUs.card4Title", "Transparent & Truthful ROI Projections"),
      description: t(
        "whyUs.card4Desc",
        "We never promise unrealistic 100% free electricity or exaggerated savings. You receive factual, engineered financial and technical feasibility dossiers."
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
      <Container>
        <SectionHeader
          badge={t("whyUs.badge", "Why SolarPower BD")}
          badgeVariant="solar"
          isDark
          title={t("whyUs.title", "Engineering Standards You Can Trust")}
          subtitle={t(
            "whyUs.subtitle",
            "We set ourselves apart by delivering transparent warranties, authentic equipment, and verified single-line diagram (SLD) engineering designs."
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 w-fit">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <Button variant="solar" href="/why-us" rightIcon={<ArrowRight className="h-4 w-4" />}>
            {t("whyUs.exploreStandards", "Explore Our Quality Standards")}
          </Button>
          <Link
            href="/about"
            className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            {t("whyUs.meetTeam", "Meet Our Engineering Team →")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
