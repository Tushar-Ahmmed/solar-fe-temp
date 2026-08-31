import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, HelpCircle, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { productsData, getProductBySlug, getRelatedProducts } from "@/data/products";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ProductGallery,
  ProductSpecsTable,
  ProductQuoteCard,
  ProductCard,
} from "@/components/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const url = `${siteConfig.url}/products/${product.slug}`;

  return {
    title: product.seo.metaTitle,
    description: product.seo.metaDescription,
    keywords: product.seo.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: product.seo.metaTitle,
      description: product.seo.metaDescription,
      url,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo.metaTitle,
      description: product.seo.metaDescription,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);
  const whatsappUrl = generateWhatsAppLink({
    productName: product.name,
    productModel: product.modelNumber,
  });

  // Schema.org Product Structured Data
  const productImages = [
    product.image,
    ...(product.gallery || []),
  ].map((img) => (img.startsWith("http") ? img : `${siteConfig.url}${img}`));

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: productImages,
    description: product.shortDescription,
    sku: product.modelNumber || product.id,
    mpn: product.modelNumber || product.id,
    category: product.categoryName,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/products/${product.slug}`,
      priceCurrency: "BDT",
      price: "0",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: siteConfig.legalName,
      },
    },
  };

  // Schema.org BreadcrumbList Structured Data
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
      {
        "@type": "ListItem",
        position: 3,
        name: product.categoryName,
        item: `${siteConfig.url}/products?category=${product.category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
        item: `${siteConfig.url}/products/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
        <Container>
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
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
                      Model: {product.modelNumber}
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
                  Key Engineering Features
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
                    Technical Specifications
                  </h2>
                  <span className="text-xs text-slate-400">Standard Test Conditions (STC)</span>
                </div>
                <ProductSpecsTable specifications={product.specifications} />
              </div>

              {/* Applications in Bangladesh */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Target Applications in Bangladesh
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
                  Customer Benefits & Value
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
                  Quick Overview
                </h3>
                <div className="space-y-2.5 text-xs">
                  {product.keySpecs.capacityOrPower && (
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Power / Capacity:</span>
                      <span className="font-bold text-slate-900">{product.keySpecs.capacityOrPower}</span>
                    </div>
                  )}
                  {product.keySpecs.efficiency && (
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Efficiency:</span>
                      <span className="font-bold text-slate-900">{product.keySpecs.efficiency}</span>
                    </div>
                  )}
                  {product.keySpecs.type && (
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Technology:</span>
                      <span className="font-bold text-slate-900">{product.keySpecs.type}</span>
                    </div>
                  )}
                  {product.keySpecs.voltage && (
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-500">Voltage:</span>
                      <span className="font-bold text-slate-900">{product.keySpecs.voltage}</span>
                    </div>
                  )}
                  {product.keySpecs.warrantyYears && (
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-500">Warranty:</span>
                      <span className="font-bold text-sky-600">{product.keySpecs.warrantyYears} Years</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Technical Help Box */}
              <div className="rounded-2xl bg-slate-900 text-white p-6 border border-slate-800 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <HelpCircle className="h-4 w-4" />
                  <span>Technical Support</span>
                </div>
                <h4 className="font-bold text-sm text-white">Need system compatibility advice?</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our engineers will verify whether this equipment matches your existing inverter, battery bank, or sanction load.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  href={whatsappUrl}
                  className="w-full text-xs justify-center text-white border-slate-700 hover:bg-slate-800"
                  leftIcon={<MessageSquare className="h-3.5 w-3.5 text-emerald-400" />}
                >
                  Consult Engineer
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
                    Related Equipment & Accessories
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Complementary components to complete your solar power system.
                  </p>
                </div>
                <Button variant="outline" size="sm" href="/products" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  All Products
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
    </>
  );
}
