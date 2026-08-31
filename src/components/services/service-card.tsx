import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Home, Building2, RefreshCw, Wrench, Sprout } from "lucide-react";
import { Service } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="h-6 w-6 text-sky-600" />,
  Building2: <Building2 className="h-6 w-6 text-amber-600" />,
  RefreshCw: <RefreshCw className="h-6 w-6 text-emerald-600" />,
  Wrench: <Wrench className="h-6 w-6 text-indigo-600" />,
  Sprout: <Sprout className="h-6 w-6 text-teal-600" />,
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hoverable className="flex flex-col overflow-hidden bg-white border-slate-200 shadow-xs h-full">
      <div className="relative aspect-16/9 w-full bg-slate-900 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3.5 left-3.5 p-2.5 rounded-xl bg-white/95 backdrop-blur-md shadow-md">
          {iconMap[service.iconName] || <Home className="h-6 w-6 text-sky-600" />}
        </div>
        {service.isFeatured && (
          <div className="absolute top-3.5 right-3.5">
            <Badge variant="solar" size="sm" className="font-bold shadow-xs">
              Popular Solution
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-slate-900 hover:text-sky-600 transition-colors">
            <Link href={`/services/${service.slug}`}>{service.title}</Link>
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Target Audience Badges */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Recommended For:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {service.targetAudience.slice(0, 3).map((audience, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>

        {/* Core Benefits Preview */}
        <div className="space-y-2 pt-4 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Key Advantages:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {service.benefits.slice(0, 3).map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{benefit.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-100">
          <Button
            variant="primary"
            size="sm"
            href={`/services/${service.slug}`}
            className="w-full justify-center group"
            rightIcon={<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
          >
            Explore Engineering Scope & Process
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
