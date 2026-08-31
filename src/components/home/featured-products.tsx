import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeader
            badge="Featured Equipment"
            title="Tier-1 Solar Panels, Inverters & Lithium Storage"
            subtitle="Engineered for maximum kilowatt-hour yield, high temperature resistance, and decades of dependable generation."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Button
            variant="outline"
            href="/products"
            className="self-start md:self-auto shrink-0"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Browse All Products
          </Button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product) => {
            const productWhatsAppUrl = generateWhatsAppLink({
              productName: product.name,
              productModel: product.modelNumber,
            });

            return (
              <Card
                key={product.id}
                hoverable
                className="flex flex-col overflow-hidden border-slate-200 bg-white"
              >
                {/* Product Image Box */}
                <div className="relative aspect-4/3 w-full bg-slate-900 overflow-hidden group">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="solar" size="sm" className="font-bold">
                      {product.categoryName}
                    </Badge>
                  </div>
                  {product.modelNumber && (
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-xs text-[11px] font-mono text-slate-300 border border-slate-800">
                      {product.modelNumber}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <CardContent className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-slate-900 leading-snug hover:text-sky-600 transition-colors">
                      <Link href={`/products/${product.slug}`}>{product.name}</Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Key Specs Pills */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                    {product.keySpecs.capacityOrPower && (
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <Zap className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                        <span className="font-semibold truncate">{product.keySpecs.capacityOrPower}</span>
                      </div>
                    )}
                    {product.keySpecs.efficiency && (
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span className="font-semibold truncate">Eff: {product.keySpecs.efficiency}</span>
                      </div>
                    )}
                    {product.keySpecs.warrantyYears && (
                      <div className="flex items-center gap-1.5 text-slate-700 col-span-2">
                        <ShieldCheck className="h-3.5 w-3.5 text-sky-500 shrink-0" />
                        <span>{product.keySpecs.warrantyYears}-Year Manufacturer Warranty</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      href={`/products/${product.slug}`}
                      className="w-full text-xs justify-center"
                    >
                      View Specs
                    </Button>
                    <Button
                      variant="whatsapp"
                      size="sm"
                      href={productWhatsAppUrl}
                      className="w-full text-xs justify-center"
                      leftIcon={<MessageSquare className="h-3.5 w-3.5" />}
                    >
                      Inquire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
