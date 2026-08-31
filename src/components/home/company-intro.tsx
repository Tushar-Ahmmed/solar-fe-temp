import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Award, Compass, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export function CompanyIntro() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Engineering Identity */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badge="About Our Company"
              title="Engineering Precision Solar Systems Across Bangladesh"
              subtitle="We do not just sell equipment — we deliver turnkey, engineered photovoltaic power plants designed to withstand Bangladesh's tropical weather, wind loads, and grid variations."
              align="left"
              className="mb-6"
            />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded on the principles of engineering excellence and uncompromising equipment quality, <strong>{siteConfig.legalName}</strong> provides end-to-end solar EPC (Engineering, Procurement, and Construction) services. From residential rooftop systems in Dhaka to megawatt-scale industrial solar plants in Gazipur, Narayanganj, and Chittagong.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <ShieldCheck className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Tier-1 Direct Sourcing</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Authentic serial numbers with manufacturer warranties.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <Compass className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Custom 3D Shading Design</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Helioscope & PVSyst simulation for precise generation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <Award className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">150 km/h Wind Rated Racking</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Hot-dip galvanized frames compliant with BNBC.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Full Net-Metering Liaison</h4>
                  <p className="text-xs text-slate-500 mt-0.5">We handle all utility paperwork from start to finish.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="primary" href="/about" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Learn More About Us
              </Button>
              <Link
                href="/why-us"
                className="text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors inline-flex items-center gap-1"
              >
                <span>View our engineering standards</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Company Credential Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-sky-400 font-bold">
                    Official Headquarters
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">{siteConfig.address.area}, Dhaka</h3>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400">
                  Open for Visits
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <div className="text-slate-400 text-xs">Operational Commitment:</div>
                  <div className="font-medium text-slate-200 mt-0.5">
                    Turnkey execution, certified BOS components, and lifetime technical hotline support.
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                  <div>
                    <div className="text-slate-400 text-xs">Core Focus</div>
                    <div className="font-semibold text-white mt-0.5">Residential & C&I</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs">Coverage</div>
                    <div className="font-semibold text-white mt-0.5">All 64 Districts</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <div className="text-slate-400 text-xs">Direct Office Consultation:</div>
                  <div className="font-semibold text-sky-400 mt-0.5">
                    {siteConfig.phone} (Hotline)
                  </div>
                </div>
              </div>

              <Button
                variant="solar"
                href="/contact"
                className="w-full justify-center"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Schedule Technical Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
