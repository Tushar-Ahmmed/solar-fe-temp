"use client";

import { useEffect } from "react";
import { siteConfig, seoByLanguage } from "@/config/site";
import { useLanguage } from "@/context/language-context";

export function LanguageMeta() {
  const { language } = useLanguage();

  useEffect(() => {
    const seo = seoByLanguage[language] ?? seoByLanguage.en;
    const locale = language === "bn" ? "bn_BD" : "en_BD";

    document.documentElement.lang = language;
    document.title = seo.title;

    const ensureMeta = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        Object.entries(attributes).forEach(([key, value]) => {
          element?.setAttribute(key, value);
        });
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => {
        element?.setAttribute(key, value);
      });
      return element;
    };

    ensureMeta('meta[name="description"]', { name: "description", content: seo.description });
    ensureMeta('meta[name="keywords"]', { name: "keywords", content: seo.keywords.join(", ") });
    ensureMeta('meta[property="og:title"]', { property: "og:title", content: seo.ogTitle });
    ensureMeta('meta[property="og:description"]', { property: "og:description", content: seo.ogDescription });
    ensureMeta('meta[property="og:locale"]', { property: "og:locale", content: locale });
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.ogTitle });
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seo.ogDescription });
    ensureMeta('meta[property="og:image"]', {
      property: "og:image",
      content: `${siteConfig.url}/images/banners/hero-solar-banner.webp`,
    });

    const canonicalLink = document.head.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", siteConfig.url);
    if (!canonicalLink.parentElement) {
      document.head.appendChild(canonicalLink);
    }

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: seo.schemaName,
      alternateName: seo.schemaAlternateName,
      url: siteConfig.url,
      description: seo.description,
      publisher: {
        "@type": "Organization",
        name: siteConfig.legalName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/banners/hero-solar-banner.webp`,
        },
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/products?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    };

    let schemaScript = document.head.querySelector("script[data-schema='website']") as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.dataset.schema = "website";
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(websiteSchema);
  }, [language]);

  return null;
}
