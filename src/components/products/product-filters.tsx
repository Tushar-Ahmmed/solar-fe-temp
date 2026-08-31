"use client";

import React from "react";
import { productCategories } from "@/data/categories";
import { ProductCategory } from "@/types";

interface ProductFiltersProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  totalProductsCount: number;
}

export function ProductFilters({
  selectedCategory,
  onSelectCategory,
  totalProductsCount,
}: ProductFiltersProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none" role="group" aria-label="Filter products by category">
      <button
        type="button"
        onClick={() => onSelectCategory("all")}
        aria-pressed={selectedCategory === "all"}
        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
          selectedCategory === "all"
            ? "bg-sky-600 text-white shadow-sm"
            : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
        }`}
      >
        All Products ({totalProductsCount})
      </button>

      {productCategories.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id as ProductCategory)}
            aria-pressed={isSelected}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
              isSelected
                ? "bg-sky-600 text-white shadow-sm"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
