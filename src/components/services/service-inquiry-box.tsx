"use client";

import React from "react";
import { Phone, MessageSquare, ShieldCheck, Clock, FileCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

interface ServiceInquiryBoxProps {
  serviceTitle: string;
}

export function ServiceInquiryBox({ serviceTitle }: ServiceInquiryBoxProps) {
  const { t } = useLanguage();
  const whatsappUrl = generateWhatsAppLink({
    serviceTitle,
    inquiryType: "technical",
  });

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
      <div className="space-y-2">
        <span className="inline-block px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider">
          {t("service.turnkeyBadge", "Turnkey EPC & Consultation")}
        </span>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          {t("service.surveyTitle", "Request a Technical Survey & Proposal")}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          {t(
            "service.surveyDesc",
            "Speak directly with our solar engineers in Dhaka for rooftop feasibility, single-line diagrams, and financial ROI simulations."
          )}
        </p>
      </div>

      {/* Trust Points */}
      <div className="space-y-2.5 py-3 border-y border-slate-100 text-xs text-slate-700">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>{t("service.iebEngineers", "IEB Registered Electrical Engineers")}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Clock className="h-4 w-4 text-sky-600 shrink-0" />
          <span>{t("service.fastResponse", "Fast Survey Response within 24-48 Hours")}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <FileCheck className="h-4 w-4 text-indigo-600 shrink-0" />
          <span>{t("service.netMeteringLiaison", "Full DESCO/DPDC/BREB Net Metering Liaison")}</span>
        </div>
      </div>

      {/* Conversion Actions */}
      <div className="space-y-3">
        <Button
          variant="whatsapp"
          size="lg"
          href={whatsappUrl}
          className="w-full justify-center text-sm shadow-md"
          leftIcon={<MessageSquare className="h-4 w-4" />}
        >
          {t("service.consultOnWhatsApp", "Consult on WhatsApp")}
        </Button>

        <Button
          variant="outline"
          size="md"
          href={`tel:${siteConfig.phoneRaw}`}
          className="w-full justify-center text-xs"
          leftIcon={<Phone className="h-3.5 w-3.5 text-sky-600" />}
        >
          {t("service.callHotline", "Call Hotline:")} {siteConfig.phone}
        </Button>
      </div>

      <div className="pt-2 text-center text-[11px] text-slate-400">
        {t("service.officeHours", "Office hours:")} {siteConfig.businessHours.days},{" "}
        {siteConfig.businessHours.hours}
      </div>
    </div>
  );
}
