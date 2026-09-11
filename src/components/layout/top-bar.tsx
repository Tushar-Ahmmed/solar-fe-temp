"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/ui/container";

export function TopBar() {
  const whatsappUrl = generateWhatsAppLink();
  const { t } = useLanguage();

  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800 hidden md:block">
      <Container className="flex items-center justify-between">
        {/* Left: Location & Hours */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="h-3.5 w-3.5 text-sky-400 shrink-0" />
            <span>{t("topbar.location", `${siteConfig.address.area}, ${siteConfig.address.city}, Bangladesh`)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock className="h-3.5 w-3.5 text-amber-400 shrink-0" />
            <span>{t("topbar.hours", `${siteConfig.businessHours.days}: ${siteConfig.businessHours.hours}`)}</span>
          </div>
        </div>

        {/* Right: Direct Contact & WhatsApp */}
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-slate-400" />
            <span>{siteConfig.email}</span>
          </a>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-1.5 font-medium text-sky-400 hover:text-sky-300 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>
              {t("topbar.hotline", "Hotline")}: {siteConfig.phone}
            </span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>{t("topbar.whatsapp", "WhatsApp Support")}</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
