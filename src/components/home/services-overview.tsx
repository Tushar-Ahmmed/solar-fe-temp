import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Building2, RefreshCw, Wrench, Sprout } from "lucide-react";
import { servicesData } from "@/data/services";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicesOverview() {
  const iconMap: Record<string, React.ReactNode> = {
    Home: <Home className="h-6 w-6 text-sky-600" />,
    Building2: <Building2 className="h-6 w-6 text-amber-600" />,
    RefreshCw: <RefreshCw className="h-6 w-6 text-emerald-600" />,
    Wrench: <Wrench className="h-6 w-6 text-indigo-600" />,
    Sprout: <Sprout className="h-6 w-6 text-teal-600" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <Container>
        <SectionHeader
          badge="Turnkey Services"
          title="Complete End-to-End Solar Engineering Services"
          subtitle="From initial 3D shading simulation and utility approvals to certified installation and lifetime maintenance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            return (
              <Card
                key={service.id}
                hoverable
                className="flex flex-col overflow-hidden bg-white border-slate-200"
              >
                <div className="relative aspect-16/9 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md shadow-md">
                    {iconMap[service.iconName] || <Home className="h-6 w-6 text-sky-600" />}
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-slate-900 hover:text-sky-600 transition-colors">
                      <Link href={`/services/${service.slug}`}>{service.title}</Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-sky-600 font-bold">•</span>
                          <span className="line-clamp-1">{benefit.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Button
                      variant="outline"
                      size="sm"
                      href={`/services/${service.slug}`}
                      className="w-full text-xs justify-center group"
                      rightIcon={<ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />}
                    >
                      Service Workflow & Scope
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="primary" href="/services" rightIcon={<ArrowRight className="h-4 w-4" />}>
            Explore All Engineering Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
