"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, BookOpen } from "lucide-react";
import { blogArticles } from "@/data/blog";
import { BlogCard } from "@/components/blog";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/home/cta-banner";
import { useLanguage } from "@/context/language-context";

function BlogFilterContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const categories = [
    "All",
    "System Guides",
    "Policy & Savings",
    "Buying Guide",
    "Battery Technology",
    "Inverter Technology",
    "Commercial & Industrial",
    "Maintenance",
    "Installation Tips",
  ];

  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" ||
      article.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: t("blog.badge", "Solar Guide & Knowledge Base") }]} />

        {/* Header */}
        <div className="mt-4 mb-10">
          <SectionHeader
            badge={t("blog.knowledgeBaseBadge", "Engineering Knowledge Base")}
            title={t("blog.knowledgeBaseTitle", "Solar Energy Guides & Technical Insights for Bangladesh")}
            subtitle={t(
              "blog.subtitle",
              "Authoritative articles on net metering policy, system sizing formulas, battery chemistry comparisons, and industrial solar economics."
            )}
          />
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                aria-label={t("blog.searchAria", "Search solar guides and articles")}
                placeholder={t("blog.searchPlaceholder", "Search solar guides, net metering, sizing...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
              />
            </div>

            {/* Total Results Counter */}
            <div className="text-xs text-slate-500 font-medium">
              {t("pagination.showing", "Showing")}{" "}
              <span className="font-bold text-slate-900">{filteredArticles.length}</span>{" "}
              {t("blog.expertArticles", "expert articles")}
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="group" aria-label={t("blog.filterByCategory", "Filter articles by category")}>
            {categories.map((cat) => {
              const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isSelected
                      ? "bg-sky-600 text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {cat === "All" ? t("blog.allCategories", "All") : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
            <BookOpen className="h-10 w-10 text-slate-400 mx-auto" />
            <h3 className="font-bold text-slate-900 text-base">{t("blog.noArticlesFound", "No articles found")}</h3>
            <p className="text-xs text-slate-500">
              {t("blog.noArticlesHint", "Try adjusting your search query or switching to another category.")}
            </p>
          </div>
        )}

        {/* Global CTA */}
        <div className="mt-20">
          <CTABanner />
        </div>
      </Container>
    </div>
  );
}

export function BlogClient() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-slate-500 text-sm">
          Loading solar guides...
        </div>
      }
    >
      <BlogFilterContent />
    </Suspense>
  );
}
