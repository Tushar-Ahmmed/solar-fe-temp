"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
  variant?: "topbar" | "header" | "mobile";
}

export function LanguageToggle({ className, variant = "header" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === "topbar") {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-lg bg-slate-800/90 p-0.5 border border-slate-700 text-xs font-semibold select-none",
          className
        )}
        role="group"
        aria-label="Language selection"
      >
        <button
          type="button"
          onClick={() => setLanguage("en")}
          aria-pressed={language === "en"}
          className={cn(
            "px-2 py-0.5 rounded-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400",
            language === "en"
              ? "bg-sky-600 text-white font-bold shadow-xs"
              : "text-slate-400 hover:text-slate-200"
          )}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLanguage("bn")}
          aria-pressed={language === "bn"}
          className={cn(
            "px-2 py-0.5 rounded-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400",
            language === "bn"
              ? "bg-sky-600 text-white font-bold shadow-xs"
              : "text-slate-400 hover:text-slate-200"
          )}
        >
          বাংলা
        </button>
      </div>
    );
  }

  if (variant === "mobile") {
    return (
      <div
        className={cn(
          "flex items-center justify-between p-3 rounded-2xl bg-slate-100/90 border border-slate-200",
          className
        )}
      >
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <Globe className="h-4 w-4 text-sky-600" />
          <span>Language / ভাষা</span>
        </div>
        <div
          className="inline-flex items-center rounded-xl bg-white p-1 border border-slate-200 shadow-2xs text-xs font-semibold"
          role="group"
          aria-label="Mobile language selector"
        >
          <button
            type="button"
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
            className={cn(
              "px-3 py-1.5 rounded-lg transition-all cursor-pointer",
              language === "en"
                ? "bg-sky-600 text-white font-bold shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLanguage("bn")}
            aria-pressed={language === "bn"}
            className={cn(
              "px-3 py-1.5 rounded-lg transition-all cursor-pointer",
              language === "bn"
                ? "bg-sky-600 text-white font-bold shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            বাংলা
          </button>
        </div>
      </div>
    );
  }

  // Default "header" style
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-xl bg-slate-100 p-1 border border-slate-200/80 text-xs font-semibold select-none",
        className
      )}
      role="group"
      aria-label="Language selector"
    >
      <Globe className="h-3.5 w-3.5 text-slate-400 ml-1 mr-0.5" />
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={cn(
          "px-2.5 py-1 rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
          language === "en"
            ? "bg-white text-sky-700 font-bold shadow-xs border border-slate-200/50"
            : "text-slate-600 hover:text-slate-900"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("bn")}
        aria-pressed={language === "bn"}
        className={cn(
          "px-2.5 py-1 rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
          language === "bn"
            ? "bg-sky-600 text-white font-bold shadow-xs"
            : "text-slate-600 hover:text-slate-900"
        )}
      >
        বাংলা
      </button>
    </div>
  );
}
