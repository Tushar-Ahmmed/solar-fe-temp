"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";
import { BlogArticle } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

interface BlogCardProps {
  article: BlogArticle;
}

export function BlogCard({ article }: BlogCardProps) {
  const { t } = useLanguage();

  return (
    <Card hoverable className="flex flex-col overflow-hidden bg-white border-slate-200 shadow-xs h-full group">
      {/* Thumbnail */}
      <div className="relative aspect-16/9 w-full bg-slate-900 overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt || article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3.5 left-3.5">
          <Badge variant="primary" size="sm" className="font-bold shadow-xs">
            {article.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Metadata Bar */}
          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              {formatDate(article.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              {article.readingTimeMinutes} {t("blog.readingTime", "min read")}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
            <Link href={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        {/* Footer info: Author & Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold">
              <User className="h-3.5 w-3.5" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-slate-900 line-clamp-1">{article.author.name}</p>
              <p className="text-[10px] text-slate-500 line-clamp-1">{article.author.role}</p>
            </div>
          </div>

          <Link
            href={`/blog/${article.slug}`}
            className="text-xs font-bold text-sky-600 group-hover:text-sky-700 inline-flex items-center gap-1 transition-colors"
          >
            {t("common.read", "Read")} <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
