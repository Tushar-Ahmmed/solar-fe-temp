"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare, Sun, ChevronRight } from "lucide-react";
import { siteConfig, mainNav } from "@/config/site";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = generateWhatsAppLink();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        className="p-2 text-slate-700 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <div className="h-9 w-9 rounded-lg bg-sky-600 flex items-center justify-center text-white shadow-sm">
              <Sun className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <span className="font-bold text-base text-slate-900 tracking-tight block leading-none">
                {siteConfig.name}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Engineering Solar Solutions
              </span>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation drawer"
            className="p-2 text-slate-500 hover:text-slate-900 rounded-lg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {mainNav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-sky-50 text-sky-700 font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                }`}
              >
                <span>{item.title}</span>
                <ChevronRight className={`h-4 w-4 ${isActive ? "text-sky-600" : "text-slate-400"}`} />
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer / Quick Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2.5">
          <div className="text-xs text-slate-500 mb-1">Direct Assistance</div>
          <Button
            variant="whatsapp"
            href={whatsappUrl}
            className="w-full justify-center"
            leftIcon={<MessageSquare className="h-4 w-4" />}
          >
            Chat on WhatsApp
          </Button>

          <Button
            variant="outline"
            href={`tel:${siteConfig.phoneRaw}`}
            className="w-full justify-center text-slate-800"
            leftIcon={<Phone className="h-4 w-4 text-sky-600" />}
          >
            Call {siteConfig.phone}
          </Button>
        </div>
      </div>
    </div>
  );
}
