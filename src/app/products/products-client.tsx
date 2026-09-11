"use client";

import React, { useState } from "react";
import { productsData } from "@/data/products";
import { ProductFilters, ProductCard } from "@/components/products";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/language-context";

export function ProductsClient() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  const whatsappUrl = generateWhatsAppLink({
    inquiryType: "technical",
    customMessage: "Hello SolarPower Bangladesh, I need help selecting the right solar equipment for my project.",
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <Container>
        <Breadcrumbs items={[{ label: t("breadcrumb.products", "Products") }]} />

        <div className="mt-4 mb-8">
          <SectionHeader
            badge={t("product.catalogBadge", "Equipment Catalog")}
            title={t("product.catalogTitle", "Tier-1 Solar Panels, Inverters & Storage")}
            subtitle={t(
              "product.catalogSubtitle",
              "Browse our comprehensive inventory of high-efficiency photovoltaic modules, smart hybrid inverters, and lithium storage solutions engineered for Bangladesh."
            )}
            align="left"
            className="mb-8"
          />

          {/* Filter Pills */}
          <ProductFilters
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            totalProductsCount={productsData.length}
          />
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800">
              {t("product.noProductsFound", "No products found in this category")}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {t("product.noProductsHint", "Please select another category or check back later.")}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedCategory("all")}
              className="mt-4"
            >
              {t("product.viewAllProducts", "View All Products")}
            </Button>
          </div>
        )}

        {/* Help / Consultation Box */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-10 text-white border border-slate-800 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
              {t("product.consultationBadge", "Engineering Sizing Consultation")}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t("product.consultationTitle", "Not sure which capacity or inverter model you need?")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              {t(
                "product.consultationDesc",
                "Our electrical engineers will calculate your daily kilowatt-hour consumption and recommend the optimal panel and inverter combination."
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Button
              variant="whatsapp"
              size="md"
              href={whatsappUrl}
              className="w-full sm:w-auto text-xs justify-center"
              leftIcon={<MessageSquare className="h-4 w-4" />}
            >
              {t("product.askOnWhatsApp", "Ask on WhatsApp")}
            </Button>
            <Button
              variant="outline"
              size="md"
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full sm:w-auto text-xs justify-center text-slate-200 border-slate-700 hover:bg-slate-800"
              leftIcon={<Phone className="h-4 w-4 text-sky-400" />}
            >
              {t("product.callHotline", "Call:")} {siteConfig.phone}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
