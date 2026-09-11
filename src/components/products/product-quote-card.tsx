"use client";

import React from "react";
import { MessageSquare, Phone, ShieldCheck, Truck, CheckCircle2, FileText } from "lucide-react";
import { Product } from "@/types";
import { siteConfig } from "@/config/site";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

interface ProductQuoteCardProps {
  product: Product;
}

export function ProductQuoteCard({ product }: ProductQuoteCardProps) {
  const { t } = useLanguage();
  const whatsappUrl = generateWhatsAppLink({
    productName: product.name,
    productModel: product.modelNumber,
  });

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
      {/* Availability & Badge */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
            {t("product.availabilityStatus", "Availability Status")}
          </span>
          <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-sm mt-0.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {t("product.inStockReady", "In Stock / Ready for Dispatch")}
          </span>
        </div>
        {product.keySpecs.warrantyYears && (
          <div className="text-right">
            <span className="text-xs text-slate-400 block">
              {t("product.warranty", "Warranty")}
            </span>
            <span className="font-bold text-slate-900 text-sm">
              {product.keySpecs.warrantyYears} {t("product.warrantyYearsUnit", "Years")}
            </span>
          </div>
        )}
      </div>

      {/* Primary Conversion CTAs */}
      <div className="space-y-3">
        <Button
          variant="whatsapp"
          size="lg"
          href={whatsappUrl}
          className="w-full justify-center text-sm font-semibold"
          leftIcon={<MessageSquare className="h-4 w-4" />}
        >
          {t("product.whatsappInquiry", "WhatsApp Instant Inquiry")}
        </Button>

        <Button
          variant="solar"
          size="lg"
          href={`/contact?product=${encodeURIComponent(product.name)}`}
          className="w-full justify-center text-sm font-semibold"
          leftIcon={<FileText className="h-4 w-4" />}
        >
          {t("product.requestQuotation", "Request Official Quotation")}
        </Button>

        <Button
          variant="outline"
          size="md"
          href={`tel:${siteConfig.phoneRaw}`}
          className="w-full justify-center text-xs text-slate-700 font-medium"
          leftIcon={<Phone className="h-3.5 w-3.5 text-sky-600" />}
        >
          {t("product.callHotline", "Call Hotline:")} {siteConfig.phone}
        </Button>
      </div>

      {/* Assurance / Trust Points */}
      <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-sky-600 shrink-0" />
          <span>{t("product.genuineHardware", "100% Genuine Tier-1 Hardware with Serial Verification")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-amber-600 shrink-0" />
          <span>{t("product.deliveryNote", "Delivery & Certified Installation Across All 64 Districts")}</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>{t("product.sredaNote", "SREDA Net-Metering & DESCO/DPDC Approval Guidance")}</span>
        </div>
      </div>
    </div>
  );
}
