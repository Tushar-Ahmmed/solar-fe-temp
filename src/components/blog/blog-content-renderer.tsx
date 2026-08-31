import React from "react";
import Link from "next/link";
import { Hash, Calculator, CheckCircle2 } from "lucide-react";

interface BlogContentRendererProps {
  content: string;
}

// Utility to create a URL-safe heading ID
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Helper to replace markdown bold (**text**) and markdown links ([text](url))
function renderInlineContent(text: string): React.ReactNode {
  const tokens: React.ReactNode[] = [];
  let remaining = text;
  let keyIdx = 0;

  while (remaining.length > 0) {
    const linkMatch = remaining.match(/\[(.*?)\]\((.*?)\)/);
    const boldMatch = remaining.match(/\*\*(.*?)\*\*/);

    let firstMatchIndex = -1;
    let matchType: "link" | "bold" | null = null;

    if (linkMatch && linkMatch.index !== undefined) {
      firstMatchIndex = linkMatch.index;
      matchType = "link";
    }

    if (boldMatch && boldMatch.index !== undefined) {
      if (firstMatchIndex === -1 || boldMatch.index < firstMatchIndex) {
        firstMatchIndex = boldMatch.index;
        matchType = "bold";
      }
    }

    if (matchType === null || firstMatchIndex === -1) {
      tokens.push(remaining);
      break;
    }

    if (firstMatchIndex > 0) {
      tokens.push(remaining.substring(0, firstMatchIndex));
    }

    if (matchType === "bold" && boldMatch) {
      tokens.push(
        <strong key={`bold-${keyIdx++}`} className="font-bold text-slate-900">
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.substring(firstMatchIndex + boldMatch[0].length);
    } else if (matchType === "link" && linkMatch) {
      const isInternal = linkMatch[2].startsWith("/") || linkMatch[2].startsWith("#");
      if (isInternal) {
        tokens.push(
          <Link
            key={`link-${keyIdx++}`}
            href={linkMatch[2]}
            className="text-sky-600 hover:text-sky-700 font-semibold underline underline-offset-2 transition-colors"
          >
            {linkMatch[1]}
          </Link>
        );
      } else {
        tokens.push(
          <a
            key={`link-${keyIdx++}`}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:text-sky-700 font-semibold underline underline-offset-2 transition-colors"
          >
            {linkMatch[1]}
          </a>
        );
      }
      remaining = remaining.substring(firstMatchIndex + linkMatch[0].length);
    }
  }

  return <>{tokens}</>;
}

export function BlogContentRenderer({ content }: BlogContentRendererProps) {
  const rawLines = content.split("\n");
  const elements: React.ReactNode[] = [];

  let i = 0;
  let elementIndex = 0;

  while (i < rawLines.length) {
    const line = rawLines[i];
    const trimmed = line.trim();

    // 1. Math / Formula Blocks ($$...$$)
    if (trimmed.startsWith("$$") && trimmed.endsWith("$$") && trimmed.length > 4) {
      const formula = trimmed.substring(2, trimmed.length - 2).trim();
      const cleanFormula = formula
        .replace(/\\text\{([^}]+)\}/g, "$1")
        .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "($1 ÷ $2)")
        .replace(/\\approx/g, "≈")
        .replace(/\\rightarrow/g, "➔")
        .replace(/\\times/g, "×");

      elements.push(
        <div
          key={`formula-${elementIndex++}`}
          className="my-6 p-4 sm:p-5 rounded-2xl bg-slate-900 text-amber-300 font-mono text-xs sm:text-sm border border-slate-700 shadow-md flex items-center gap-3 overflow-x-auto"
        >
          <div className="h-8 w-8 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
            <Calculator className="h-4 w-4" />
          </div>
          <div className="font-semibold tracking-wide whitespace-nowrap">
            {cleanFormula}
          </div>
        </div>
      );
      i++;
      continue;
    }

    // 2. Markdown Tables (| header | header |)
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableLines: string[] = [];
      while (i < rawLines.length && rawLines[i].trim().startsWith("|") && rawLines[i].trim().endsWith("|")) {
        tableLines.push(rawLines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const headerRow = tableLines[0]
          .split("|")
          .map((c) => c.trim())
          .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);

        const bodyRows = tableLines.slice(2).map((row) =>
          row
            .split("|")
            .map((c) => c.trim())
            .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1)
        );

        elements.push(
          <div
            key={`table-${elementIndex++}`}
            className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs"
          >
            <table className="w-full text-left text-xs sm:text-sm text-slate-700 border-collapse">
              <thead className="bg-slate-50 text-slate-900 border-b border-slate-200 uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  {headerRow.map((h, hIdx) => (
                    <th key={hIdx} className="px-4 sm:px-6 py-3.5">
                      {renderInlineContent(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {bodyRows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="hover:bg-sky-50/50 transition-colors odd:bg-white even:bg-slate-50/40"
                  >
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 sm:px-6 py-3.5 whitespace-normal">
                        {renderInlineContent(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // 3. Headings Level 2 (## Heading)
    if (trimmed.startsWith("## ")) {
      const headingText = trimmed.replace("## ", "");
      const headingId = slugifyHeading(headingText);
      elements.push(
        <h2
          key={`h2-${elementIndex++}`}
          id={headingId}
          className="group text-2xl sm:text-3xl font-extrabold text-slate-900 mt-10 mb-4 tracking-tight scroll-mt-24 flex items-center gap-2"
        >
          <span>{headingText}</span>
          <a
            href={`#${headingId}`}
            className="opacity-0 group-hover:opacity-100 text-sky-500 hover:text-sky-600 transition-opacity"
            aria-label={`Link to ${headingText}`}
          >
            <Hash className="h-5 w-5" />
          </a>
        </h2>
      );
      i++;
      continue;
    }

    // 4. Headings Level 3 (### Heading)
    if (trimmed.startsWith("### ")) {
      const headingText = trimmed.replace("### ", "");
      const headingId = slugifyHeading(headingText);
      elements.push(
        <h3
          key={`h3-${elementIndex++}`}
          id={headingId}
          className="group text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-3 tracking-tight scroll-mt-24 flex items-center gap-2"
        >
          <span>{headingText}</span>
          <a
            href={`#${headingId}`}
            className="opacity-0 group-hover:opacity-100 text-sky-500 hover:text-sky-600 transition-opacity"
            aria-label={`Link to ${headingText}`}
          >
            <Hash className="h-4 w-4" />
          </a>
        </h3>
      );
      i++;
      continue;
    }

    // 5. Bullet Lists (* item or - item)
    if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
      const listItems: string[] = [];
      while (
        i < rawLines.length &&
        (rawLines[i].trim().startsWith("* ") || rawLines[i].trim().startsWith("- "))
      ) {
        listItems.push(rawLines[i].trim().replace(/^[\*\-]\s+/, ""));
        i++;
      }

      elements.push(
        <ul
          key={`ul-${elementIndex++}`}
          className="my-4 space-y-2.5 pl-2"
        >
          {listItems.map((item, lIdx) => (
            <li
              key={lIdx}
              className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed"
            >
              <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
              <div>{renderInlineContent(item)}</div>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // 6. Numbered Lists (1. item, 2. item)
    if (/^\d+\.\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < rawLines.length && /^\d+\.\s+/.test(rawLines[i].trim())) {
        listItems.push(rawLines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }

      elements.push(
        <ol
          key={`ol-${elementIndex++}`}
          className="my-4 space-y-3 pl-2 list-none"
        >
          {listItems.map((item, lIdx) => (
            <li
              key={lIdx}
              className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm leading-relaxed"
            >
              <span className="h-6 w-6 rounded-lg bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {lIdx + 1}
              </span>
              <div className="pt-0.5">{renderInlineContent(item)}</div>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // 7. Callout / Blockquotes (> Quote)
    if (trimmed.startsWith("> ")) {
      const quoteText = trimmed.replace(/^>\s*/, "");
      elements.push(
        <div
          key={`quote-${elementIndex++}`}
          className="my-6 p-5 rounded-2xl bg-sky-50 border-l-4 border-sky-600 text-slate-800 text-xs sm:text-sm font-medium leading-relaxed"
        >
          {renderInlineContent(quoteText)}
        </div>
      );
      i++;
      continue;
    }

    // 8. Empty line spacing
    if (trimmed === "") {
      i++;
      continue;
    }

    // 9. Standard Paragraph
    elements.push(
      <p
        key={`p-${elementIndex++}`}
        className="text-slate-700 leading-relaxed text-sm sm:text-base my-3 font-normal"
      >
        {renderInlineContent(trimmed)}
      </p>
    );

    i++;
  }

  return <div className="prose-content space-y-2">{elements}</div>;
}
