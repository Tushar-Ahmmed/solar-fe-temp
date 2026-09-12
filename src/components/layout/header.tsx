"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, MessageSquare, ArrowRight } from "lucide-react";
import { siteConfig, mainNav } from "@/config/site";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/context/language-context";
import { TranslationKey } from "@/lib/i18n/translations";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { LanguageToggle } from "./language-toggle";

const navKeyMap: Record<string, TranslationKey> = {
  "/": "nav.home",
  "/products": "nav.products",
  "/services": "nav.services",
  "/why-solar": "nav.whySolar",
  "/why-us": "nav.whyUs",
  "/blog": "nav.blog",
  "/about": "nav.about",
  "/contact": "nav.contact",
};

export function Header() {
  const pathname = usePathname();
  const whatsappUrl = generateWhatsAppLink();
  const { t } = useLanguage();

  return (
    <header className="lg:sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <Container className="flex h-16 sm:h-20 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-sky-600 to-sky-700 flex items-center justify-center text-white shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform duration-200">
            <Sun className="h-6 w-6 text-amber-300 animate-pulse" />
          </div>
          <div>
            <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight block leading-tight">
              {siteConfig.name.split(" ")[0]}
              <span className="text-sky-600">{siteConfig.name.split(" ")[1]}</span>
            </span>
            <span className="text-[11px] text-slate-500 font-medium tracking-wide uppercase block">
              {t("header.tagline", "Bangladesh")}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
          {mainNav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            const translatedLabel = navKeyMap[item.href]
              ? t(navKeyMap[item.href], item.title)
              : item.title;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-sky-600 bg-sky-50 font-semibold"
                    : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                }`}
              >
                {translatedLabel}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions & Language Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle variant="header" />
          <Button
            variant="ghost"
            size="sm"
            href={whatsappUrl}
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 font-semibold"
            leftIcon={<MessageSquare className="h-4 w-4" />}
          >
            {t("header.chatWhatsApp", "WhatsApp")}
          </Button>
          <Button
            variant="primary"
            size="sm"
            href="/contact"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            {t("header.getQuote", "Get a Quote")}
          </Button>
        </div>

        {/* Mobile Header Actions: Compact Toggle & Mobile Nav Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle variant="compact" />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

