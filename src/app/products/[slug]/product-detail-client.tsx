"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, HelpCircle, MessageSquare } from "lucide-react";
import { Product } from "@/types";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import {
  ProductGallery,
  ProductSpecsTable,
  ProductQuoteCard,
  ProductCard,
} from "@/components/products";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { t } = useLanguage();
  const whatsappUrl = generateWhatsAppLink({
    productName: product.name,
    productModel: product.modelNumber,
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: t("breadcrumb.products", "Products"), href: "/products" },
            { label: product.categoryName, href: `/products?category=${product.category}` },
            { label: product.name },
          ]}
        />

        {/* Main Product Hero Grid */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Gallery & Comprehensive Details */}
          <div className="lg:col-span-7 space-y-10">
            {/* Product Gallery */}
            <ProductGallery
              mainImage={product.image}
              gallery={product.gallery}
              productName={product.name}
            />

            {/* Title & Core Overview */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="solar" size="sm" className="font-bold">
                  {product.categoryName}
                </Badge>
                {product.modelNumber && (
                  <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 text-xs font-mono">
                    {t("product.modelLabel", "Model:")} {product.modelNumber}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-base text-slate-600 font-medium leading-relaxed">
                {product.tagline}
              </p>

              <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                <p>{product.description}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {t("product.keyEngFeatures", "Key Engineering Features")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1"
                  >
                    <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
                      <Zap className="h-4 w-4 text-amber-500 shrink-0" />
                      <span>{feature.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pl-6">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Technical Specifications Table */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  {t("product.technicalSpecs", "Technical Specifications")}
                </h2>
                <span className="text-xs text-slate-400">
                  {t("product.stcNote", "Standard Test Conditions (STC)")}
                </span>
              </div>
              <ProductSpecsTable specifications={product.specifications} />
            </div>

            {/* Applications in Bangladesh */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {t("product.targetApplications", "Target Applications in Bangladesh")}
              </h2>
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {t("product.customerBenefits", "Customer Benefits & Value")}
              </h2>
              <div className="p-5 rounded-xl bg-sky-50/50 border border-sky-100 shadow-xs">
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ShieldCheck className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Conversion & Inquiry Sidebar */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <ProductQuoteCard product={product} />

            {/* Quick Specs Highlight Box */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider">
                {t("product.quickOverview", "Quick Overview")}
              </h3>
              <div className="space-y-2.5 text-xs">
                {product.keySpecs.capacityOrPower && (
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">{t("product.powerCapacity", "Power / Capacity:")}</span>
                    <span className="font-bold text-slate-900">{product.keySpecs.capacityOrPower}</span>
                  </div>
                )}
                {product.keySpecs.efficiency && (
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">{t("product.efficiencyLabel", "Efficiency:")}</span>
                    <span className="font-bold text-slate-900">{product.keySpecs.efficiency}</span>
                  </div>
                )}
                {product.keySpecs.type && (
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">{t("product.technology", "Technology:")}</span>
                    <span className="font-bold text-slate-900">{product.keySpecs.type}</span>
                  </div>
                )}
                {product.keySpecs.voltage && (
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">{t("product.voltage", "Voltage:")}</span>
                    <span className="font-bold text-slate-900">{product.keySpecs.voltage}</span>
                  </div>
                )}
                {product.keySpecs.warrantyYears && (
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">{t("product.warranty", "Warranty:")}</span>
                    <span className="font-bold text-sky-600">
                      {product.keySpecs.warrantyYears} {t("product.warrantyYearsUnit", "Years")}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Technical Help Box */}
            <div className="rounded-2xl bg-slate-900 text-white p-6 border border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <HelpCircle className="h-4 w-4" />
                <span>{t("product.technicalSupport", "Technical Support")}</span>
              </div>
              <h4 className="font-bold text-sm text-white">
                {t("product.compatibilityAdvice", "Need system compatibility advice?")}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t(
                  "product.compatibilityDesc",
                  "Our engineers will verify whether this equipment matches your existing inverter, battery bank, or sanction load."
                )}
              </p>
              <Button
                variant="outline"
                size="sm"
                href={whatsappUrl}
                className="w-full text-xs justify-center text-white border-slate-700 hover:bg-slate-800"
                leftIcon={<MessageSquare className="h-3.5 w-3.5 text-emerald-400" />}
              >
                {t("product.consultEngineer", "Consult Engineer")}
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {t("product.relatedEquipment", "Related Equipment & Accessories")}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {t("product.relatedDesc", "Complementary components to complete your solar power system.")}
                </p>
              </div>
              <Button variant="outline" size="sm" href="/products" rightIcon={<ArrowRight className="h-4 w-4" />}>
                {t("product.allProducts", "All Products")}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
