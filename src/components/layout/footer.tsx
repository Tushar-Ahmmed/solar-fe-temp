"use client";

import React from "react";
import Link from "next/link";
import { Sun, Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { productCategories } from "@/data/categories";
import { servicesData } from "@/data/services";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/ui/container";

export function Footer() {
  const whatsappUrl = generateWhatsAppLink();
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      {/* Top Banner / Value Proposition Bar */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">{t("footer.pillar1Title", "Tier-1 Guaranteed PV Modules")}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{t("footer.pillar1Desc", "25 to 30 Years linear power warranty")}</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400 shrink-0">
                <Sun className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">{t("footer.pillar2Title", "Net Metering Integration")}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{t("footer.pillar2Desc", "DESCO, DPDC, BREB & NESCO approvals")}</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">{t("footer.pillar3Title", "Dedicated Solar Support")}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{t("footer.pillar3Desc", "Direct WhatsApp & phone technical assistance")}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="py-14 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Col 1 & 2: Brand Information */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-sky-600 flex items-center justify-center text-white shadow-md">
                  <Sun className="h-6 w-6 text-amber-300" />
                </div>
                <div>
                  <span className="font-bold text-xl text-white tracking-tight">
                    {siteConfig.name}
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    {siteConfig.legalName}
                  </span>
                </div>
              </Link>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                {siteConfig.shortDescription}
              </p>

              {/* Service Areas */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                  {t("footer.coverageTitle", "Service Coverage in Bangladesh:")}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {siteConfig.serviceAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-sm bg-slate-900 border border-slate-800 text-[11px] text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Col 3: Products */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                {t("footer.productsTitle", "Solar Products")}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {productCategories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/products?category=${cat.id}`}
                      className="hover:text-sky-400 transition-colors flex items-center gap-1"
                    >
                      <ArrowRight className="h-3 w-3 text-slate-600" />
                      <span>{cat.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Services */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                {t("footer.servicesTitle", "Engineering Services")}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {servicesData.slice(0, 5).map((serv) => (
                  <li key={serv.id}>
                    <Link
                      href={`/services/${serv.slug}`}
                      className="hover:text-sky-400 transition-colors flex items-center gap-1"
                    >
                      <ArrowRight className="h-3 w-3 text-slate-600" />
                      <span className="line-clamp-1">{serv.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Contact & Office */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                {t("footer.contactTitle", "Contact & Support")}
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.address.street}, {siteConfig.address.area}, {siteConfig.address.city}-{siteConfig.address.postalCode}, Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MessageSquare className="h-4 w-4 text-emerald-400 shrink-0" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {t("footer.whatsappLabel", "WhatsApp")}: {siteConfig.whatsapp}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5 pt-1 border-t border-slate-900 text-slate-500 text-xs">
                  <Clock className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.businessHours.days}
                    <br />
                    {siteConfig.businessHours.hours}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar: Copyright & Quick Links */}
      <div className="border-t border-slate-900 py-6 bg-slate-950">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.legalName}. {t("footer.rights", "All rights reserved. Operating across Bangladesh.")}
          </p>

          <div className="flex items-center gap-6">
            <Link href="/why-solar" className="hover:text-slate-400 transition-colors">
              {t("nav.whySolar", "Why Solar")}
            </Link>
            <Link href="/why-us" className="hover:text-slate-400 transition-colors">
              {t("nav.whyUs", "Why Choose Us")}
            </Link>
            <Link href="/blog" className="hover:text-slate-400 transition-colors">
              {t("nav.blog", "Solar Guides")}
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              {t("nav.contact", "Contact")}
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
