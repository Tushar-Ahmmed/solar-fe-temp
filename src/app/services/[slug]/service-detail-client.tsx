"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, PackageCheck, Target } from "lucide-react";
import { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceProcessTimeline, ServiceInquiryBox } from "@/components/services";
import { useLanguage } from "@/context/language-context";

interface ServiceDetailClientProps {
  service: Service;
  otherServices: Service[];
}

export function ServiceDetailClient({ service, otherServices }: ServiceDetailClientProps) {
  const { t } = useLanguage();

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: t("breadcrumb.services", "Services"), href: "/services" },
            { label: service.title },
          ]}
        />

        {/* Main Grid */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Main Content Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Hero Banner Image */}
            <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <Badge variant="solar" size="sm" className="font-bold">
                  {t("service.turnkeyEngineering", "Turnkey Engineering")}
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {service.title}
                </h1>
              </div>
            </div>

            {/* Service Overview & Target Audience */}
            <div className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {t("service.overviewScope", "Overview & Engineering Scope")}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {service.description}
              </p>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Target className="h-4 w-4 text-sky-600" />
                  {t("service.targetClients", "Target Clients & Beneficiaries:")}
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.targetAudience.map((audience, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-100"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step-by-Step Engineering Execution Timeline */}
            <div className="space-y-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {t("service.engExecutionProcess", "Engineering & Execution Process")}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {t(
                    "service.processMethodology",
                    "Our structured 5-phase methodology ensures zero system failure and 100% regulatory compliance."
                  )}
                </p>
              </div>

              <ServiceProcessTimeline steps={service.processSteps} />
            </div>

            {/* Scope Deliverables & Hardware BOM */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <PackageCheck className="h-6 w-6 text-sky-600" />
                {t("service.whatWeDeliver", "What We Deliver (Hardware & Engineering Scope)")}
              </h2>
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Benefits & Financial Value */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {t("service.businessBenefits", "Business & Financial Benefits")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-gradient-to-br from-white to-sky-50/40 border border-slate-200 shadow-xs space-y-1.5"
                  >
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                      <ShieldCheck className="h-4 w-4 text-sky-600 shrink-0" />
                      <span>{benefit.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable For */}
            {service.suitableFor && service.suitableFor.length > 0 && (
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
                <h3 className="font-bold text-sm text-amber-950 uppercase tracking-wider">
                  {t("service.idealScenarios", "Ideal Deployment Scenarios:")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.suitableFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white text-slate-800 text-xs font-semibold shadow-2xs border border-amber-200"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sticky Column: Consultation & Inquiry Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <ServiceInquiryBox serviceTitle={service.title} />

            {/* Service Navigation Widget */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs space-y-4">
              <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">
                {t("service.otherServices", "Other Services")}
              </h4>
              <div className="space-y-2">
                {otherServices.map((other) => (
                  <Link
                    key={other.id}
                    href={`/services/${other.slug}`}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-700 hover:text-sky-600 transition-colors group"
                  >
                    <span className="line-clamp-1">{other.title}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            href="/services"
            leftIcon={<ArrowLeft className="h-4 w-4" />}
          >
            {t("service.backToServices", "Back to All Services")}
          </Button>
          <Button
            variant="primary"
            size="sm"
            href="/contact"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            {t("service.bookSiteSurvey", "Book Site Survey")}
          </Button>
        </div>
      </Container>
    </div>
  );
}
