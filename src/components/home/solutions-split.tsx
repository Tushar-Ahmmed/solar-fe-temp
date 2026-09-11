"use client";

import React from "react";
import Link from "next/link";
import { Home, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export function SolutionsSplit() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <Container>
        <SectionHeader
          badge={t("solutions.badge", "Tailored Solutions")}
          title={t("solutions.title", "Engineered for Every Energy Requirement")}
          subtitle={t(
            "solutions.subtitle",
            "Whether you are powering a residential apartment or an export garment factory, our solutions are customized for maximum ROI and zero downtime."
          )}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Residential Card */}
          <div className="rounded-2xl bg-gradient-to-br from-sky-950/90 to-slate-900 text-white p-8 sm:p-10 border border-sky-800/60 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Home className="h-40 w-40 text-sky-400" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                <Home className="h-3.5 w-3.5" />
                {t("solutions.resTitle", "Residential Rooftop Solar")}
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {t("solutions.resSubtitle", "For Homeowners, Duplexes & Apartments")}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                  {t(
                    "solutions.resDesc",
                    "Eliminate high electricity bills and protect your family from frequent load shedding. Seamless hybrid battery backup powers ACs, refrigerators, fans, and home offices silently."
                  )}
                </p>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-2">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{t("solutions.resPoint1", "Cuts residential electricity bills by 70% to 90%")}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{t("solutions.resPoint2", "10ms automatic transfer time during power outages")}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{t("solutions.resPoint3", "DESCO & DPDC bi-directional net-metering integration")}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{t("solutions.resPoint4", "Zero-maintenance LiFePO4 wall-mount lithium batteries")}</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800 relative z-10 flex flex-wrap items-center gap-4">
              <Button
                variant="solar"
                href="/services/residential-solar-solutions"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                {t("solutions.resCta", "Residential Solar Details")}
              </Button>
              <Link
                href="/contact"
                className="text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                {t("solutions.resSurveyLink", "Request Home Roof Survey →")}
              </Link>
            </div>
          </div>

          {/* Commercial & Industrial Card */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Building2 className="h-40 w-40 text-amber-400" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Building2 className="h-3.5 w-3.5" />
                {t("solutions.comTitle", "Commercial & Industrial (C&I)")}
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {t("solutions.comSubtitle", "For RMG, Factories & Warehouses")}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                  {t(
                    "solutions.comDesc",
                    "Turn expansive factory rooftops into high-yield power generating assets. Accelerate LEED green building certification, satisfy international buyer ESG requirements, and lower factory operating overheads."
                  )}
                </p>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-2">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>{t("solutions.comPoint1", "Fast payback period of 3.2 to 4.2 years")}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>{t("solutions.comPoint2", "High-capacity N-Type TOPCon bifacial modules")}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>{t("solutions.comPoint3", "HT/LT grid synchronization with BREB, DESCO & PDB")}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>{t("solutions.comPoint4", "Fire-safe AFCI string inverters & lightning protection")}</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800 relative z-10 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                href="/services/commercial-industrial-solar-solutions"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                {t("solutions.comCta", "Industrial Solar Details")}
              </Button>
              <Link
                href="/contact"
                className="text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                {t("solutions.comSurveyLink", "Request Industrial Feasibility →")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
