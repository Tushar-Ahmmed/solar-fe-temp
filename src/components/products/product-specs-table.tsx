import React from "react";
import { ProductSpecItem } from "@/types";

interface ProductSpecsTableProps {
  specifications: ProductSpecItem[];
}

export function ProductSpecsTable({ specifications }: ProductSpecsTableProps) {
  // Group specifications by group
  const groupedSpecs = specifications.reduce<Record<string, ProductSpecItem[]>>(
    (acc, spec) => {
      const groupKey = spec.group || "General";
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(spec);
      return acc;
    },
    {}
  );

  return (
    <div className="space-y-6">
      {Object.entries(groupedSpecs).map(([groupName, items]) => (
        <div key={groupName} className="rounded-xl border border-slate-200 overflow-hidden bg-white">
          <div className="bg-slate-100/80 px-4 py-2.5 border-b border-slate-200">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">
              {groupName} Specifications
            </h4>
          </div>
          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 sm:grid-cols-2 p-3 sm:px-4 sm:py-3 gap-1 sm:gap-4 ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                }`}
              >
                <div className="font-medium text-slate-600">{item.label}</div>
                <div className="font-semibold text-slate-900 break-words">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
