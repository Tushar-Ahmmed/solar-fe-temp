"use client";

import React from "react";
import { BlogAuthor } from "@/types";
import { UserCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";

interface BlogAuthorBoxProps {
  author: BlogAuthor;
}

export function BlogAuthorBox({ author }: BlogAuthorBoxProps) {
  const { t } = useLanguage();

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-5">
      <div className="h-14 w-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
        {author.name.charAt(0)}
      </div>

      <div className="space-y-1 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-bold text-slate-900 text-base">{author.name}</h4>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
            <UserCheck className="h-3 w-3" />
            {t("blog.verifiedAuthor", "Verified Technical Author")}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 font-medium">{author.role}</p>
        <p className="text-xs text-slate-600 leading-relaxed pt-1">
          {t("blog.authorBio", "Specializing in solar photovoltaic design, SREDA net-metering compliance, and hybrid battery energy storage solutions for Bangladesh.")}
        </p>
      </div>
    </div>
  );
}
