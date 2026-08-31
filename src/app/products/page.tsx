import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { productsData } from "@/data/products";
import { ProductsClient } from "./products-client";

export const metadata: Metadata = {
  title: "Solar Products & Equipment Catalog | Solar Panels, Inverters, Batteries Bangladesh",
  description:
    "Explore our complete range of Tier-1 solar panels, hybrid inverters, LiFePO4 lithium batteries, MPPT charge controllers, and mounting structures in Bangladesh.",
  keywords: [
    "solar panels Bangladesh",
    "solar panel price Dhaka",
    "550W solar panel Bangladesh",
    "solar inverter price Bangladesh",
    "5kW hybrid inverter Dhaka",
    "LiFePO4 solar battery Bangladesh",
    "solar charge controller MPPT Bangladesh",
    "solar mounting stand Bangladesh",
  ],
  alternates: {
    canonical: `${siteConfig.url}/products`,
  },
  openGraph: {
    title: "Solar Products & Equipment Catalog | SolarPower Bangladesh",
    description:
      "Explore Tier-1 solar panels, hybrid inverters, and lithium energy storage systems in Bangladesh.",
    url: `${siteConfig.url}/products`,
    images: [
      {
        url: "/images/banners/hero-solar-banner.webp",
        width: 1200,
        height: 630,
        alt: "Solar Products Bangladesh",
      },
    ],
  },
};

export default function ProductsPage() {
  // Schema.org ItemList JSON-LD
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Solar Equipment & Products Catalog",
    description: "Tier-1 solar modules, hybrid inverters, and lithium batteries in Bangladesh",
    itemListElement: productsData.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${siteConfig.url}/products/${product.slug}`,
      image: `${siteConfig.url}${product.image}`,
    })),
  };

  // Schema.org BreadcrumbList JSON-LD
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
        name: "Products",
        item: `${siteConfig.url}/products`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductsClient />
    </>
  );
}
