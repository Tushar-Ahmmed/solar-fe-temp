"use client";

import React from "react";
import { Phone, MessageSquare, Calculator } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/context/language-context";

export function StickyActions() {
  const whatsappUrl = generateWhatsAppLink();
  const { t } = useLanguage();

  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-3 shadow-lg lg:hidden">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-semibold active:bg-slate-200 transition-colors"
        >
          <Phone className="h-4 w-4 text-sky-600 mb-0.5" />
          <span>{t("sticky.call", "Call Now")}</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-600 text-white text-[11px] font-semibold active:bg-emerald-700 transition-colors shadow-xs"
        >
          <MessageSquare className="h-4 w-4 text-white mb-0.5" />
          <span>{t("sticky.whatsapp", "WhatsApp")}</span>
        </a>

        <a
          href="/contact"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-sky-600 text-white text-[11px] font-semibold active:bg-sky-700 transition-colors shadow-xs"
        >
          <Calculator className="h-4 w-4 text-white mb-0.5" />
          <span>{t("sticky.quote", "Get Quote")}</span>
        </a>
      </div>
    </aside>
  );
}
