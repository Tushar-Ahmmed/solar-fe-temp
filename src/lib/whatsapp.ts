import { siteConfig } from "@/config/site";

export interface WhatsAppMessageOptions {
  productName?: string;
  productModel?: string;
  serviceTitle?: string;
  articleTitle?: string;
  inquiryType?: "quote" | "technical" | "general" | "maintenance";
  customMessage?: string;
}

function getPreferredLanguage(): "en" | "bn" {
  if (typeof window === "undefined") return "en";

  try {
    return window.localStorage.getItem("solar_bd_language") === "bn" ? "bn" : "en";
  } catch {
    return "en";
  }
}

export function generateWhatsAppLink(options: WhatsAppMessageOptions = {}): string {
  const { productName, productModel, serviceTitle, articleTitle, inquiryType, customMessage } = options;
  const phoneNumber = siteConfig.whatsappRaw;
  const language = getPreferredLanguage();

  let message = "";

  if (customMessage) {
    message = customMessage;
  } else if (productName) {
    message =
      language === "bn"
        ? `হ্যালো ${siteConfig.name}, আপনার ওয়েবসাইটে থাকা "${productName}"${
            productModel ? ` (মডেল: ${productModel})` : ""
          } পণ্যটি সম্পর্কে জানতে চাই। এর প্রাপ্যতা, স্পেসিফিকেশন ও বর্তমান মূল্য জানাবেন কি?`
        : `Hello ${siteConfig.name}, I am interested in the "${productName}"${
            productModel ? ` (Model: ${productModel})` : ""
          } listed on your website. Could you please share the availability, specifications, and current pricing details?`;
  } else if (serviceTitle) {
    message =
      language === "bn"
        ? `হ্যালো ${siteConfig.name}, আপনাদের "${serviceTitle}" সেবা সম্পর্কে জানতে চাই। একটি কারিগরি পরামর্শ বা সার্ভের ব্যবস্থা করবেন কি?`
        : `Hello ${siteConfig.name}, I would like to inquire about your "${serviceTitle}" service. Could you please arrange a technical consultation or survey?`;
  } else if (articleTitle) {
    message =
      language === "bn"
        ? `হ্যালো ${siteConfig.name}, আপনাদের ওয়েবসাইটে "${articleTitle}" সোলার গাইডটি পড়েছি। এই বিষয়ে একজন ইঞ্জিনিয়ারের পরামর্শ নিতে চাই।`
        : `Hello ${siteConfig.name}, I was reading your solar guide: "${articleTitle}" on your website and would like to consult with an engineer on this topic.`;
  } else if (inquiryType === "quote") {
    message =
      language === "bn"
        ? `হ্যালো ${siteConfig.name}, বাংলাদেশে আমার বাড়ি/ব্যবসার জন্য একটি সোলার সিস্টেমের কোটেশন চাই। কীভাবে এগোব, জানাবেন।`
        : `Hello ${siteConfig.name}, I am looking for a solar power system quote for my home/business in Bangladesh. Please advise on how to proceed.`;
  } else if (inquiryType === "maintenance") {
    message =
      language === "bn"
        ? `হ্যালো ${siteConfig.name}, বিদ্যমান সোলার ইনস্টলেশনের রক্ষণাবেক্ষণ/পরিদর্শন সহায়তা প্রয়োজন।`
        : `Hello ${siteConfig.name}, I need maintenance/inspection support for an existing solar installation.`;
  } else {
    message =
      language === "bn"
        ? `হ্যালো ${siteConfig.name}, আপনাদের ওয়েবসাইট দেখে সোলার পণ্য ও সমাধান সম্পর্কে আরও জানতে চাই।`
        : `Hello ${siteConfig.name}, I visited your website and would like to learn more about your solar products and solutions.`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
