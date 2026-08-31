import React from "react";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  ShieldAlert,
  Headphones,
  Navigation,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Contact Us | Solar Rooftop Survey & Quote Banani Dhaka",
  description:
    "Get in touch with SolarPower Bangladesh. Visit our Banani, Dhaka headquarters or request an on-site rooftop solar survey and quotation across Bangladesh.",
  keywords: [
    "solar company contact Dhaka",
    "solar panel quote Bangladesh",
    "solar company Banani Dhaka",
    "solar rooftop survey Bangladesh",
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact SolarPower Bangladesh | Rooftop Solar Surveys & Engineering",
    description:
      "Direct technical consultation, rooftop solar surveys, and net metering liaison across Bangladesh.",
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: "/images/banners/hero-solar-banner.webp",
        width: 1200,
        height: 630,
        alt: "Contact SolarPower Bangladesh",
      },
    ],
  },
};

export default function ContactPage() {
  const generalWhatsApp = generateWhatsAppLink({
    inquiryType: "general",
  });

  // Schema.org LocalBusiness & ContactPage JSON-LD
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: `${siteConfig.url}/contact`,
    logo: `${siteConfig.url}/images/banners/hero-solar-banner.webp`,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.area,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.coordinates?.latitude || 23.7937,
      longitude: siteConfig.address.coordinates?.longitude || 90.4066,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact SolarPower Bangladesh",
    description: "Contact our Dhaka headquarters for rooftop solar site surveys and quotes",
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phoneRaw,
      email: siteConfig.email,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: `${siteConfig.url}/contact`,
      },
    ],
  };

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.address.coordinates?.latitude || 23.7937},${siteConfig.address.coordinates?.longitude || 90.4066}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
        <Container>
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ label: "Contact Us" }]} />

          {/* Page Header */}
          <div className="mt-4 mb-12 sm:mb-16">
            <SectionHeader
              badge="Direct Consultation"
              title="Let's Power Your Property with Clean, Engineered Solar"
              subtitle="Connect with our licensed electrical engineers in Dhaka for a free rooftop solar assessment, Single Line Diagram (SLD), and detailed financial feasibility."
            />
          </div>

          {/* Main Grid: Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Contact Details & Channels */}
            <div className="lg:col-span-5 space-y-6">
              {/* Headquarters Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">Dhaka Headquarters</h3>
                      <p className="text-xs text-slate-500">Corporate & Engineering Office</p>
                    </div>
                  </div>

                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-xl transition-colors"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    Directions
                  </a>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 space-y-1 pl-13 leading-relaxed">
                  <p className="font-semibold text-slate-900">{siteConfig.legalName}</p>
                  <p>{siteConfig.address.street}</p>
                  <p>
                    {siteConfig.address.area}, {siteConfig.address.city} - {siteConfig.address.postalCode}
                  </p>
                  <p className="text-slate-500">{siteConfig.address.country}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Open for in-person technical appointments (Sat - Thu)</span>
                </div>
              </div>

              {/* Direct Channels Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">
                  Direct Contact Channels
                </h4>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2.5 text-slate-700">
                      <Phone className="h-4 w-4 text-sky-600 shrink-0" />
                      <span>General Hotline</span>
                    </div>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="font-bold text-sky-600 hover:text-sky-700"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                    <div className="flex items-center gap-2.5 text-slate-700">
                      <MessageSquare className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>WhatsApp Desk</span>
                    </div>
                    <a
                      href={generalWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      {siteConfig.whatsapp}
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2.5 text-slate-700">
                      <Mail className="h-4 w-4 text-slate-500 shrink-0" />
                      <span>Sales & Quotes</span>
                    </div>
                    <a
                      href={`mailto:${siteConfig.salesEmail}`}
                      className="font-semibold text-slate-900 hover:text-sky-600"
                    >
                      {siteConfig.salesEmail}
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2.5 text-slate-700">
                      <Headphones className="h-4 w-4 text-slate-500 shrink-0" />
                      <span>Engineering Support</span>
                    </div>
                    <a
                      href={`mailto:${siteConfig.supportEmail}`}
                      className="font-semibold text-slate-900 hover:text-sky-600"
                    >
                      {siteConfig.supportEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Working Hours & Emergency */}
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 text-white shadow-md space-y-4">
                <div className="flex items-center gap-2.5 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Clock className="h-4 w-4" />
                  <span>Operating Hours</span>
                </div>

                <div className="space-y-1 text-xs text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span>Working Days:</span>
                    <span className="font-bold text-white">{siteConfig.businessHours.days}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span>Office Timing:</span>
                    <span className="font-bold text-white">{siteConfig.businessHours.hours}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Weekly Holiday:</span>
                    <span className="font-bold text-rose-400">{siteConfig.businessHours.closedOn}</span>
                  </div>
                </div>

                {siteConfig.emergencyPhone && (
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <ShieldAlert className="h-3.5 w-3.5 text-amber-400" />
                      Emergency Technical On-Call:
                    </span>
                    <a
                      href={`tel:${siteConfig.emergencyPhone.replace(/\s+/g, "")}`}
                      className="font-mono font-bold text-amber-400"
                    >
                      {siteConfig.emergencyPhone}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Lead Capture Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>

          {/* Division Coverage Strip */}
          <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-sky-600" />
              <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">
                Nationwide Field Survey & EPC Coverage
              </h4>
            </div>
            <p className="text-xs text-slate-500">
              Our engineering teams travel for on-site irradiance modeling and rooftop surveys across all divisions:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {siteConfig.serviceAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold"
                >
                  ✓ {area}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
