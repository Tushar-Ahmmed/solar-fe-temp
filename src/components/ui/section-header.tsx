import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "default" | "primary" | "solar" | "success" | "warning" | "outline" | "slate";
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
  isDark?: boolean;
}

export function SectionHeader({
  badge,
  badgeVariant = "primary",
  title,
  subtitle,
  align = "center",
  className,
  titleAs: TitleComponent = "h2",
  isDark = false,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col space-y-3 max-w-3xl mb-10 sm:mb-14",
        alignmentClasses[align],
        className
      )}
    >
      {badge && (
        <Badge
          variant={isDark ? "solar" : badgeVariant}
          className={cn("uppercase tracking-wider font-bold text-[11px] mb-1")}
        >
          {badge}
        </Badge>
      )}
      <TitleComponent
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight",
          isDark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </TitleComponent>
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
