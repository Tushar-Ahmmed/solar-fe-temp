"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { faqsData } from "@/data/faqs";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/context/language-context";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { TranslationKey } from "@/lib/i18n/translations";

export function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const whatsappUrl = generateWhatsAppLink({
    inquiryType: "technical",
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <Container size="md">
        <SectionHeader
          badge={t("faq.badge", "Frequently Asked Questions")}
          title={t("faq.title", "Everything You Need to Know About Solar in Bangladesh")}
          subtitle={t(
            "faq.subtitle",
            "Clear, direct answers about costs, warranties, load shedding backup, and government net metering policies."
          )}
        />

        <div className="space-y-3.5">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const qKey = `faq.${faq.id}.q` as TranslationKey;
            const aKey = `faq.${faq.id}.a` as TranslationKey;

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:text-sky-600 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base pr-4">
                    <HelpCircle className="h-4 w-4 text-sky-500 shrink-0" />
                    {t(qKey, faq.question)}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-sky-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {t(aKey, faq.answer)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-sky-50 border border-sky-100 text-center space-y-3">
          <h4 className="font-bold text-slate-900 text-base">
            {t("faqExt.haveMoreQuestions", "Have a specific technical question?")}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            {t(
              "contact.responseGuarantee",
              "Our certified solar engineers are ready to answer your technical questions via WhatsApp or phone consultation."
            )}
          </p>
          <Button
            variant="whatsapp"
            size="sm"
            href={whatsappUrl}
            className="inline-flex items-center"
            leftIcon={<MessageSquare className="h-4 w-4" />}
          >
            {t("faqExt.chatWithEngineer", "Ask an Engineer on WhatsApp")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
