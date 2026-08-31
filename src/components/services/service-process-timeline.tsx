import React from "react";
import { ServiceProcessStep } from "@/types";
import { CheckCircle } from "lucide-react";

interface ServiceProcessTimelineProps {
  steps: ServiceProcessStep[];
}

export function ServiceProcessTimeline({ steps }: ServiceProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Desktop connecting line */}
      <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-slate-200" />

      <div className="space-y-6 md:space-y-8">
        {steps.map((step) => (
          <div
            key={step.stepNumber}
            className="relative flex flex-col md:flex-row gap-4 md:gap-6 items-start p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-sky-300 transition-colors"
          >
            {/* Step Number Circle */}
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-600 text-white font-black text-lg sm:text-xl shadow-md z-10">
              {step.stepNumber < 10 ? `0${step.stepNumber}` : step.stepNumber}
            </div>

            {/* Step Details */}
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <CheckCircle className="h-3 w-3" />
                  Engineering Milestone
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
