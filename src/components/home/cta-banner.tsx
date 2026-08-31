import React from "react";
import { Phone, MessageSquare, ArrowRight, Sun } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  const whatsappUrl = generateWhatsAppLink({
    inquiryType: "quote",
  });

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white border-b border-slate-800">
      {/* Background Solar Sun Glow */}
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <Container size="md" className="relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-semibold uppercase tracking-wider">
          <Sun className="h-3.5 w-3.5 text-amber-300" />
          Free Rooftop Survey & Feasibility Calculation
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
          Ready to Slash Your Electricity Bills and Power Your Property with Solar?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Contact our Dhaka engineering team today for a comprehensive 3D shadow analysis, bill savings calculation, and customized equipment proposal.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Button
            variant="solar"
            size="lg"
            href="/contact"
            className="w-full sm:w-auto"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Get a Free System Quote
          </Button>

          <Button
            variant="whatsapp"
            size="lg"
            href={whatsappUrl}
            className="w-full sm:w-auto"
            leftIcon={<MessageSquare className="h-4 w-4" />}
          >
            WhatsApp Consultation
          </Button>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-sky-400" />
            <span>Direct Hotline: <strong className="text-white">{siteConfig.phone}</strong></span>
          </a>
          <span>•</span>
          <span>Saturday – Thursday: 9:00 AM – 6:00 PM</span>
        </div>
      </Container>
    </section>
  );
}
