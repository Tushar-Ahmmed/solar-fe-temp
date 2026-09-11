"use client";

import React from "react";
import { Globe2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export interface LanguageToggleProps {
  variant?: "header" | "mobile" | "compact";
  className?: string;
}

export function LanguageToggle({
  variant = "header",
  className = "",
}: LanguageToggleProps) {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={
          language === "en"
            ? "Switch language to Bangla"
            : "Switch language to English"
        }
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-2xs ${className}`}
      >
        <Globe2 className="h-3.5 w-3.5 text-sky-600 shrink-0" />
        <span className="tracking-wide">
          {language === "en" ? "বাং" : "EN"}
        </span>
      </button>
    );
  }

  if (variant === "mobile") {
    return (
      <div
        className={`p-3 rounded-2xl bg-slate-100/90 border border-slate-200/80 ${className}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-xs">
              <Globe2 className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">
                {language === "en" ? "Language" : "ভাষা"}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                {language === "en" ? "English / বাংলা" : "বাংলা / English"}
              </div>
            </div>
          </div>

          <div
            role="group"
            aria-label="Language selection"
            className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-2xs"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              aria-label="Select English"
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 ${
                language === "en"
                  ? "bg-sky-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLanguage("bn")}
              aria-pressed={language === "bn"}
              aria-label="বাংলা নির্বাচন করুন"
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 ${
                language === "bn"
                  ? "bg-sky-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              বাংলা
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default: Header pill toggle (desktop)
  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-1 bg-slate-100/90 rounded-full border border-slate-200/80 shadow-2xs ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="Switch to English"
        className={`relative flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1 ${
          language === "en"
            ? "bg-white text-sky-700 shadow-xs"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        <Globe2 className="h-3.5 w-3.5" />
        <span>EN</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("bn")}
        aria-pressed={language === "bn"}
        aria-label="বাংলা ভাষায় পরিবর্তন করুন"
        className={`relative flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1 ${
          language === "bn"
            ? "bg-sky-600 text-white shadow-xs"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        <span>বাংলা</span>
      </button>
    </div>
  );
}
