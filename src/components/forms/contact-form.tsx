"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  MessageSquare,
  Send,
  Mail,
  CheckCircle2,
  Copy,
  Check,
  Code2,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  monthlyBill: string;
  division: string;
  interestedIn: string;
  message: string;
}

function ContactFormContent() {
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const prefilledProduct = searchParams.get("product") || "";
  const prefilledService = searchParams.get("service") || "";

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    propertyType: "residential",
    monthlyBill: "",
    division: "Dhaka",
    interestedIn: prefilledProduct || prefilledService || "General Solar System Consultation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        interestedIn: `${t("form.prefilledProduct", "Product")}: ${prefilledProduct}`,
        message:
          prev.message ||
          t(
            "form.prefilledProductMessage",
            `I would like to request an official quotation and availability for the "${prefilledProduct}".`
          ),
      }));
    } else if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        interestedIn: `${t("form.prefilledService", "Service")}: ${prefilledService}`,
        message:
          prev.message ||
          t(
            "form.prefilledServiceMessage",
            `I am interested in scheduling a technical consultation for "${prefilledService}".`
          ),
      }));
    }
  }, [prefilledProduct, prefilledService, t]);

  const formattedInquiryText = `*Solar Inquiry — ${siteConfig.name}*
• *Customer Name:* ${formData.name || "N/A"}
• *Phone:* ${formData.phone || "N/A"}
• *Email:* ${formData.email || "N/A"}
• *Property Type:* ${formData.propertyType}
• *Project Location:* ${formData.division} Division
• *Avg. Electricity Bill:* BDT ${formData.monthlyBill || "Not Specified"}
• *Interest / Item:* ${formData.interestedIn}
• *Requirements:* ${formData.message || "Requesting engineering feasibility and price quotation."}`;

  const handleWhatsAppDirect = () => {
    const url = generateWhatsAppLink({ customMessage: formattedInquiryText });
    window.open(url, "_blank");
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(
      `Solar Quotation Request: ${formData.interestedIn} (${formData.name})`
    );
    const body = encodeURIComponent(
      `Hello SolarPower Bangladesh Engineering Team,\n\nPlease find my solar power inquiry details below:\n\n` +
        `Full Name: ${formData.name}\n` +
        `Phone / WhatsApp: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Property Type: ${formData.propertyType}\n` +
        `Project Division: ${formData.division}\n` +
        `Avg Monthly Electricity Bill: BDT ${formData.monthlyBill}\n` +
        `Interested In: ${formData.interestedIn}\n` +
        `Additional Notes: ${formData.message}\n\n` +
        `Looking forward to your technical proposal.\n` +
        `Best regards,\n${formData.name}`
    );
    window.location.href = `mailto:${siteConfig.salesEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleInvalid = (event: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    event.currentTarget.setCustomValidity(t("form.validation.required", "Please fill in this field."));
  };

  const clearInvalid = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    event.currentTarget.setCustomValidity("");
  };

  const handleCopySummary = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(formattedInquiryText);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    }
  };

  if (submitted) {
    return (
      <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {t("form.summaryTitle", "Inquiry Summary Ready")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {t("form.summaryDesc", "Your inquiry details for")} <strong className="text-slate-800">{formData.name}</strong> {t("form.summaryDesc2", "have been formatted. Connect directly through your preferred channel:")}
            </p>
          </div>
        </div>

        {/* Formatted Inquiry Box */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 space-y-2 relative">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
            <span className="font-bold text-slate-700 text-[11px] uppercase tracking-wider">
              {t("form.payloadLabel", "Structured Inquiry Payload")}
            </span>
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-600 hover:text-sky-700 cursor-pointer"
            >
              {copiedSummary ? (
                <>
                  <Check className="h-3 w-3 text-emerald-600" />
                  <span className="text-emerald-600">{t("form.copied", "Copied!")}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>{t("form.copyText", "Copy Text")}</span>
                </>
              )}
            </button>
          </div>
          <pre className="whitespace-pre-wrap text-slate-700 font-mono leading-relaxed pt-1">
            {formattedInquiryText}
          </pre>
        </div>

        {/* Immediate Direct Triggers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <Button
            variant="whatsapp"
            size="md"
            onClick={handleWhatsAppDirect}
            className="w-full justify-center font-bold shadow-md"
            leftIcon={<MessageSquare className="h-4 w-4" />}
          >
            {t("form.dispatchWhatsApp", "Dispatch to WhatsApp Desk")}
          </Button>

          <Button
            variant="primary"
            size="md"
            onClick={handleEmailDirect}
            className="w-full justify-center font-bold shadow-md"
            leftIcon={<Mail className="h-4 w-4" />}
          >
            {t("form.dispatchEmail", "Send via Official Email")}
          </Button>
        </div>

        {/* Architecture Note for Future Backend Integration */}
        <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs text-slate-600 space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-sky-900 text-[11px] uppercase tracking-wider">
            <Code2 className="h-3.5 w-3.5 text-sky-600" />
            {t("form.apiLabel", "Backend API Contract Ready")}
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            {t("form.apiDesc", "In full production deployment, this client form dispatches to")} <code className="px-1.5 py-0.5 rounded bg-white border border-sky-200 font-mono text-sky-800 text-[10px]">POST /api/v1/leads/inquiries</code> {t("form.apiDesc2", "to auto-generate CRM tickets in the solar management system.")}
          </p>
        </div>

        <div className="pt-2 text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSubmitted(false)}
            className="text-xs text-slate-500"
          >
            {t("form.modifyBtn", "← Modify / Submit Another Request")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5"
    >
      <div className="space-y-1">
        {(prefilledProduct || prefilledService) && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold mb-2">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            {t("form.inquiryBadge", "Inquiry for:")} {prefilledProduct || prefilledService}
          </div>
        )}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {t("form.title", "Request a Free Solar Site Survey & Quotation")}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          {t("form.subtitle", "Fill in your details below. Our Dhaka engineering team prepares detailed load estimations and single-line diagrams.")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="text-xs font-bold text-slate-700">
            {t("form.fullName", "Full Name")} <span className="text-rose-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            type="text"
            required
            aria-required="true"
            placeholder={t("form.namePlaceholder", "e.g. Tushar Ahmed")}
            value={formData.name}
            onInvalid={handleInvalid}
            onInput={clearInvalid}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50 focus:bg-white transition-all"
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label htmlFor="contact-phone" className="text-xs font-bold text-slate-700">
            {t("form.phone", "Phone / WhatsApp Number")} <span className="text-rose-500">*</span>
          </label>
          <input
            id="contact-phone"
            name="tel"
            autoComplete="tel"
            type="tel"
            required
            aria-required="true"
            placeholder={t("form.phonePlaceholder", "e.g. +880 17XX-XXXXXX")}
            value={formData.phone}
            onInvalid={handleInvalid}
            onInput={clearInvalid}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="text-xs font-bold text-slate-700">
            {t("form.email", "Email Address (Optional)")}
          </label>
          <input
            id="contact-email"
            name="email"
            autoComplete="email"
            type="email"
            placeholder={t("form.emailPlaceholder", "e.g. name@company.com")}
            value={formData.email}
            onInvalid={handleInvalid}
            onInput={clearInvalid}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50 focus:bg-white transition-all"
          />
        </div>

        {/* Property Type */}
        <div className="space-y-1.5">
          <label htmlFor="contact-property-type" className="text-xs font-bold text-slate-700">
            {t("form.propertyType", "Property / Project Type")} <span className="text-rose-500">*</span>
          </label>
          <select
            id="contact-property-type"
            name="propertyType"
            value={formData.propertyType}
            onInvalid={handleInvalid}
            onInput={clearInvalid}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50 focus:bg-white transition-all"
          >
            <option value="residential">{t("form.propertyResidential", "Residential (Home / Duplex / Apartment)")}</option>
            <option value="commercial">{t("form.propertyCommercial", "Commercial Building / Office")}</option>
            <option value="industrial">{t("form.propertyIndustrial", "Industrial Factory / RMG Mill")}</option>
            <option value="agricultural">{t("form.propertyAgro", "Agro-farm / Solar Water Pump")}</option>
            <option value="maintenance">{t("form.propertyMaintenance", "Maintenance of Existing Plant")}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Monthly Electricity Bill */}
        <div className="space-y-1.5">
          <label htmlFor="contact-bill" className="text-xs font-bold text-slate-700">
            {t("form.monthlyBill", "Avg. Monthly Electricity Bill (BDT)")}
          </label>
          <input
            id="contact-bill"
            name="monthlyBill"
            type="text"
            placeholder={t("form.billPlaceholder", "e.g. BDT 15,000 / month")}
            value={formData.monthlyBill}
            onInvalid={handleInvalid}
            onInput={clearInvalid}
            onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50 focus:bg-white transition-all"
          />
        </div>

        {/* Location / Division */}
        <div className="space-y-1.5">
          <label htmlFor="contact-division" className="text-xs font-bold text-slate-700">
            {t("form.division", "Project Location / Division")} <span className="text-rose-500">*</span>
          </label>
          <select
            id="contact-division"
            name="division"
            value={formData.division}
            onInvalid={handleInvalid}
            onInput={clearInvalid}
            onChange={(e) => setFormData({ ...formData, division: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50 focus:bg-white transition-all"
          >
            <option value="Dhaka">{t("form.dhakaDivision", "Dhaka Division (Dhaka, Gazipur, Narayanganj)")}</option>
            <option value="Chittagong">{t("form.chittagongDivision", "Chittagong Division")}</option>
            <option value="Sylhet">{t("form.sylhetDivision", "Sylhet Division")}</option>
            <option value="Rajshahi">{t("form.rajshahiDivision", "Rajshahi Division")}</option>
            <option value="Rangpur">{t("form.rangpurDivision", "Rangpur Division")}</option>
            <option value="Khulna">{t("form.khulnaDivision", "Khulna Division")}</option>
            <option value="Barishal">{t("form.barishalDivision", "Barishal Division")}</option>
            <option value="Mymensingh">{t("form.mymensinghDivision", "Mymensingh Division")}</option>
          </select>
        </div>
      </div>

      {/* Specific Requirements / Notes */}
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-xs font-bold text-slate-700">
          {t("form.message", "Specific Requirements / Notes")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          placeholder={t("form.messagePlaceholder", "Mention your roof size, backup load requirements (ACs, refrigerators), or net metering sanction details...")}
          value={formData.message}
          onInvalid={handleInvalid}
          onInput={clearInvalid}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50 focus:bg-white resize-none transition-all"
        />
      </div>

      {/* Action Buttons */}
      <div className="pt-3 flex flex-col sm:flex-row gap-3">
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="flex-1 justify-center shadow-md font-bold cursor-pointer"
          leftIcon={<Send className="h-4 w-4" />}
        >
          {t("form.submit", "Review & Submit Proposal Request")}
        </Button>
        <Button
          type="button"
          variant="whatsapp"
          size="md"
          onClick={handleWhatsAppDirect}
          className="flex-1 justify-center shadow-md font-bold cursor-pointer"
          leftIcon={<MessageSquare className="h-4 w-4" />}
        >
          {t("form.sendWhatsApp", "Send via WhatsApp Instantly")}
        </Button>
      </div>

      <div className="text-center text-[11px] text-slate-400">
        {t("form.privacy", "We respect your privacy. Your contact info is strictly used for feasibility and quote preparation.")}
      </div>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="p-10 rounded-3xl bg-white border border-slate-200 text-center text-xs text-slate-500">
          Loading contact form...
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}
