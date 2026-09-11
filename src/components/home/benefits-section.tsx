"use client";

import React from "react";
import Link from "next/link";
import { TrendingDown, ShieldAlert, Zap, Globe, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export function BenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <TrendingDown className="h-6 w-6 text-emerald-600" />,
      title: t("benefits.card1Title", "Hedge Against Rising Electricity Tariffs"),
      description: t(
        "benefits.card1Desc",
        "Utility electricity tariffs in Bangladesh continue to rise across residential and industrial brackets. A solar installation fixes your unit generation cost at a fraction of the grid price for 25+ years."
      ),
      metric: t("benefits.card1Metric", "70-90% Lower Monthly Bills"),
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: t("benefits.card2Title", "Zero-Downtime Backup During Load Shedding"),
      description: t(
        "benefits.card2Desc",
        "Forget noisy diesel generators and frequent fuel expenses. Smart hybrid solar inverters with LiFePO4 batteries switch in under 10 milliseconds to keep critical appliances and machinery active."
      ),
      metric: t("benefits.card2Metric", "< 10ms Auto Transfer"),
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-sky-600" />,
      title: t("benefits.card3Title", "SREDA Net Metering Bill Offsets"),
      description: t(
        "benefits.card3Desc",
        "Export daytime surplus electricity to DESCO, DPDC, BREB, or NESCO. Surplus units roll over monthly to offset nighttime or monsoon grid consumption, eliminating wasted energy."
      ),
      metric: t("benefits.card3Metric", "100% Legal & Approved"),
    },
    {
      icon: <Globe className="h-6 w-6 text-indigo-600" />,
      title: t("benefits.card4Title", "LEED & Green Factory Compliance"),
      description: t(
        "benefits.card4Desc",
        "For export-oriented RMG and manufacturing factories, solar energy directly reduces Scope 2 carbon footprint and fulfills global buyer environmental compliance standards."
      ),
      metric: t("benefits.card4Metric", "Global ESG Standard"),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <Container>
        <SectionHeader
          badge={t("benefits.badge", "The Solar Advantage")}
          title={t("benefits.title", "Why Switching to Solar Makes Financial Sense in Bangladesh")}
          subtitle={t(
            "benefits.subtitle",
            "With rising electricity tariffs and frequent power disruptions, rooftop solar delivers immediate monetary returns and lifelong power reliability."
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white shadow-xs border border-slate-200">
                    {benefit.icon}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">
                    {benefit.metric}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <Button variant="solar" href="/why-solar" rightIcon={<ArrowRight className="h-4 w-4" />}>
            {t("benefits.btnGuide", "Read the Complete Solar Benefits Guide")}
          </Button>
          <Link
            href="/blog/how-many-solar-panels-needed-for-home-bangladesh"
            className="text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
          >
            {t("benefits.linkSizing", "Calculate Your Home Solar Sizing →")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
