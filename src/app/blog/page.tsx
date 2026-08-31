import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { blogArticles } from "@/data/blog";
import { BlogClient } from "./blog-client";

export const metadata: Metadata = {
  title: "Solar Guides, Net Metering & Engineering Articles Bangladesh",
  description:
    "Explore authoritative solar power guides for Bangladesh: Net metering policies, rooftop system sizing formulas, hybrid inverter setups, and LiFePO4 battery guides.",
  keywords: [
    "solar energy guide Bangladesh",
    "solar net metering guide Dhaka",
    "solar panel sizing home Bangladesh",
    "LiFePO4 battery for solar Bangladesh",
    "factory rooftop solar guide Bangladesh",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Solar Guides & Engineering Knowledge Base | SolarPower Bangladesh",
    description:
      "Expert technical guides, sizing formulas, and policy insights on solar power systems in Bangladesh.",
    url: `${siteConfig.url}/blog`,
    images: [
      {
        url: "/images/banners/hero-solar-banner.webp",
        width: 1200,
        height: 630,
        alt: "Solar Guides Bangladesh",
      },
    ],
  },
};

export default function BlogPage() {
  // Schema.org Blog & BreadcrumbList JSON-LD
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "SolarPower Bangladesh Engineering Knowledge Base",
    description: "Technical solar guides, system sizing, battery comparisons, and policy insights",
    url: `${siteConfig.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/banners/hero-solar-banner.webp`,
      },
    },
    blogPost: blogArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/blog/${article.slug}`,
      datePublished: article.publishedAt,
      author: {
        "@type": "Person",
        name: article.author.name,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solar Guide",
        item: `${siteConfig.url}/blog`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogClient />
    </>
  );
}
