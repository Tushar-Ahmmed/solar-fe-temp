import { siteConfig } from "@/config/site";

export interface WhatsAppMessageOptions {
  productName?: string;
  productModel?: string;
  serviceTitle?: string;
  articleTitle?: string;
  inquiryType?: "quote" | "technical" | "general" | "maintenance";
  customMessage?: string;
}

export function generateWhatsAppLink(options: WhatsAppMessageOptions = {}): string {
  const { productName, productModel, serviceTitle, articleTitle, inquiryType, customMessage } = options;
  const phoneNumber = siteConfig.whatsappRaw;

  let message = "";

  if (customMessage) {
    message = customMessage;
  } else if (productName) {
    message = `Hello ${siteConfig.name}, I am interested in the "${productName}"${
      productModel ? ` (Model: ${productModel})` : ""
    } listed on your website. Could you please share the availability, specifications, and current pricing details?`;
  } else if (serviceTitle) {
    message = `Hello ${siteConfig.name}, I would like to inquire about your "${serviceTitle}" service. Could you please arrange a technical consultation or survey?`;
  } else if (articleTitle) {
    message = `Hello ${siteConfig.name}, I was reading your solar guide: "${articleTitle}" on your website and would like to consult with an engineer on this topic.`;
  } else if (inquiryType === "quote") {
    message = `Hello ${siteConfig.name}, I am looking for a solar power system quote for my home/business in Bangladesh. Please advise on how to proceed.`;
  } else if (inquiryType === "maintenance") {
    message = `Hello ${siteConfig.name}, I need maintenance/inspection support for an existing solar installation.`;
  } else {
    message = `Hello ${siteConfig.name}, I visited your website and would like to learn more about your solar products and solutions.`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
