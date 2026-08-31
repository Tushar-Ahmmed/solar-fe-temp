"use client";

import React, { useState, useEffect } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";
import { slugifyHeading } from "./blog-content-renderer";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface BlogTOCProps {
  content: string;
}

export function BlogTOC({ content }: BlogTOCProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const lines = content.split("\n");
    const extracted: TOCItem[] = [];

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("## ")) {
        const text = trimmed.replace("## ", "");
        extracted.push({
          id: slugifyHeading(text),
          text,
          level: 2,
        });
      } else if (trimmed.startsWith("### ")) {
        const text = trimmed.replace("### ", "");
        extracted.push({
          id: slugifyHeading(text),
          text,
          level: 3,
        });
      }
    });

    setHeadings(extracted);
  }, [content]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0% -60% 0%" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 shadow-2xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left cursor-pointer group"
      >
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
          <List className="h-4 w-4 text-sky-600" />
          <span>Table of Contents</span>
          <span className="text-xs font-normal text-slate-500">
            ({headings.length} sections)
          </span>
        </div>
        <div className="text-slate-400 group-hover:text-slate-700 transition-colors">
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>

      {isOpen && (
        <nav className="mt-3.5 pt-3.5 border-t border-slate-200/80 space-y-1.5" aria-label="Table of Contents">
          {headings.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              className={`block text-xs py-1 transition-colors leading-snug rounded-md px-2 ${
                h.level === 3 ? "ml-3 text-slate-500 hover:text-slate-900" : "font-medium"
              } ${
                activeId === h.id
                  ? "text-sky-600 font-bold bg-sky-50"
                  : "text-slate-700 hover:text-sky-600 hover:bg-slate-100"
              }`}
            >
              {h.text}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
