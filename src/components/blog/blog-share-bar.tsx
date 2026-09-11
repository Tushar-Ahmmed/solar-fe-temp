"use client";

import React, { useState } from "react";
import { MessageSquare, Share2, Check, Copy } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/language-context";

interface BlogShareBarProps {
  articleTitle: string;
  slug: string;
}

export function BlogShareBar({ articleTitle, slug }: BlogShareBarProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const articleUrl = `${siteConfig.url}/blog/${slug}`;

  const whatsappInquiryUrl = generateWhatsAppLink({
    articleTitle: articleTitle,
  });

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareOnLinkedin = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
      {/* WhatsApp Engineer Consultation */}
      <a
        href={whatsappInquiryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all hover:shadow-md cursor-pointer"
      >
        <MessageSquare className="h-4 w-4 text-emerald-100" />
        <span>{t("blog.askEngineerGuide", "Ask Engineer About This Guide")}</span>
      </a>

      {/* Social Sharing Actions */}
      <div className="flex items-center justify-end gap-2 text-xs text-slate-600">
        <span className="hidden sm:inline-flex items-center gap-1 font-semibold text-slate-500 mr-1">
          <Share2 className="h-3.5 w-3.5" />
          {t("blog.shareArticle", "Share:")}
        </span>

        {/* Facebook */}
        <button
          onClick={shareOnFacebook}
          className="p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-colors cursor-pointer"
          aria-label="Share on Facebook"
          title="Share on Facebook"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>

        {/* LinkedIn */}
        <button
          onClick={shareOnLinkedin}
          className="p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-colors cursor-pointer"
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </button>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
            copied
              ? "bg-emerald-50 text-emerald-700 border-emerald-300"
              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
          }`}
          aria-label="Copy link to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              <span>{t("ui.copied", "Copied!")}</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-slate-500" />
              <span>{t("form.copyText", "Copy Link")}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
