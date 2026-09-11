"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { getFeaturedArticles } from "@/data/blog";
import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function EducationalPreview() {
  const { t } = useLanguage();
  const articles = getFeaturedArticles();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeader
            badge={t("blog.badge", "Solar Guide & Knowledge Base")}
            title={t("blog.title", "Latest Solar Insights & Technical Guides")}
            subtitle={t(
              "blog.subtitle",
              "Authoritative articles on net metering policy, system sizing formulas, and battery chemistry comparisons in Bangladesh."
            )}
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Button
            variant="outline"
            href="/blog"
            className="self-start md:self-auto shrink-0"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            {t("blog.viewAll", "Explore All Guides")}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              hoverable
              className="flex flex-col overflow-hidden bg-white border-slate-200"
            >
              <div className="relative aspect-16/9 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="primary" size="sm" className="font-bold">
                    {article.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readingTimeMinutes} {t("blog.readingTime", "min read")}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5" />
                      {article.author.name}
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug hover:text-sky-600 transition-colors">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{t("blog.readArticle", "Read Full Guide")}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
