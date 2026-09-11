# Translation Guide

## Source Of Truth

- UI strings live in `src/lib/i18n/translations.ts`.
- Supported languages are `en` and `bn`.
- Translation keys use dot notation, such as `form.submit` or `nav.products`.
- The English dictionary defines the `TranslationKey` type.
- The language preference is stored in `localStorage` under `solar_bd_language`.

## Adding A UI String

1. Add the key and English value to `translations.en`.
2. Add the same key and Bangla value to `translations.bn`.
3. Use `t("namespace.key", "English fallback")` in a component.
4. Keep the fallback short and equivalent to the English dictionary value.
5. Run `npm run qa:phase9` to detect missing keys.
6. Run `npm run build` before merging.

Example:

```tsx
const { t } = useLanguage();

<Button>{t("contact.requestSurvey", "Request a survey")}</Button>
```

## Data With Two Languages

For product, service, and blog content that is indexed or displayed as structured data, keep language-specific fields in the data model. Use the active language when rendering:

```ts
const title = language === "bn" ? item.title_bn : item.title_en;
```

Keep slugs and internal URLs in English so existing links and search indexing remain stable.

## Review Checklist

- Does the Bangla text sound natural to a Bangladesh customer?
- Are units, phone numbers, product models, and brand names unchanged?
- Is the same meaning preserved without translating technical names incorrectly?
- Does the longer string fit on mobile?
- Does `npm run qa:phase9` pass?
