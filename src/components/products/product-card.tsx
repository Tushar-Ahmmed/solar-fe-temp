"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import { Product } from "@/types";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage();
  const productWhatsAppUrl = generateWhatsAppLink({
    productName: product.name,
    productModel: product.modelNumber,
  });

  return (
    <Card hoverable className="flex flex-col overflow-hidden border-slate-200 bg-white">
      {/* Product Image Area */}
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
              <span className="font-semibold truncate">
                {t("product.efficiencyLabel", "Eff:")}{" "}
                {product.keySpecs.efficiency}
              </span>
            </div>
          )}
          {product.keySpecs.warrantyYears && (
            <div className="flex items-center gap-1.5 text-slate-700 col-span-2">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-500 shrink-0" />
              <span>
                {product.keySpecs.warrantyYears}-{t("product.warrantyYearsUnit", "Year")}{" "}
                {t("product.warranty", "Manufacturer Warranty")}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            href={`/products/${product.slug}`}
            className="w-full text-xs justify-center"
            rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
          >
            {t("product.specsBtn", "Specs")}
          </Button>
          <Button
            variant="whatsapp"
            size="sm"
            href={productWhatsAppUrl}
            className="w-full text-xs justify-center"
            leftIcon={<MessageSquare className="h-3.5 w-3.5" />}
          >
            {t("product.inquireBtn", "Inquire")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
