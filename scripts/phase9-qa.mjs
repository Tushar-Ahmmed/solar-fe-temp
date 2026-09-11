import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceRoot = path.join(root, "src");
const failures = [];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

const sourceFiles = walk(sourceRoot).filter((filePath) => /\.(ts|tsx)$/.test(filePath));
const translationSource = read("src/lib/i18n/translations.ts");
const translationKeyPattern = /"([A-Za-z0-9_.-]+)"\s*:/g;
const translationKeys = new Set();
let match;

while ((match = translationKeyPattern.exec(translationSource))) {
  translationKeys.add(match[1]);
}

const usedKeys = new Set();
for (const filePath of sourceFiles) {
  const source = fs.readFileSync(filePath, "utf8");
  const callPattern = /\bt\(\s*["']([^"']+)["']/g;
  while ((match = callPattern.exec(source))) {
    usedKeys.add(match[1]);
  }
}

const missingKeys = [...usedKeys].filter((key) => !translationKeys.has(key));
if (missingKeys.length) {
  failures.push(`Missing translation keys: ${missingKeys.join(", ")}`);
}

const translationSections = translationSource.match(/\b(en|bn):\s*\{/g) || [];
if (!translationSections.includes("en: {") || !translationSections.includes("bn: {")) {
  failures.push("Translation dictionary must contain both en and bn sections.");
}

const requiredRoutes = [
  "src/app/sitemap.ts",
  "src/app/robots.ts",
  "src/app/layout.tsx",
  "src/components/layout/language-meta.tsx",
  "src/lib/whatsapp.ts",
];
for (const relativePath of requiredRoutes) {
  if (!fs.existsSync(path.join(root, relativePath))) {
    failures.push(`Missing required SEO/i18n file: ${relativePath}`);
  }
}

const sitemap = read("src/app/sitemap.ts");
for (const route of ["/products", "/services", "/blog", "/about", "/contact"]) {
  if (!sitemap.includes(route)) {
    failures.push(`Sitemap does not include ${route}.`);
  }
}

const whatsapp = read("src/lib/whatsapp.ts");
for (const phrase of ["হ্যালো", "সোলার", "localStorage"]) {
  if (!whatsapp.includes(phrase)) {
    failures.push(`WhatsApp language support is missing: ${phrase}`);
  }
}

const languageMeta = read("src/components/layout/language-meta.tsx");
for (const phrase of ["og:locale", "keywords", "application/ld+json", "document.documentElement.lang"]) {
  if (!languageMeta.includes(phrase)) {
    failures.push(`Language metadata check failed: ${phrase}`);
  }
}

if (failures.length) {
  console.error("Phase 9 QA failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Phase 9 QA passed:");
console.log(`- ${usedKeys.size} translation calls checked`);
console.log(`- ${translationKeys.size} dictionary keys found`);
console.log("- English and Bangla dictionaries present");
console.log("- Sitemap, robots, metadata, and WhatsApp checks passed");
