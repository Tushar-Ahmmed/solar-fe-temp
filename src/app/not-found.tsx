import React from "react";
import Link from "next/link";
import { Sun, Home, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28 bg-slate-50 min-h-[70vh] flex items-center">
      <Container className="max-w-2xl text-center space-y-8">
        <div className="h-20 w-20 rounded-3xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto shadow-inner">
          <Sun className="h-10 w-10 animate-spin-slow" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            404 Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The page you are looking for has moved or does not exist.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            The link you clicked may be broken or the page was renamed. Explore our solar engineering products, services, and guides below.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <Link
            href="/"
            className="p-3 rounded-xl bg-slate-50 hover:bg-sky-50 hover:text-sky-600 font-semibold text-slate-700 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="p-3 rounded-xl bg-slate-50 hover:bg-sky-50 hover:text-sky-600 font-semibold text-slate-700 transition-colors"
          >
            Products
          </Link>
          <Link
            href="/services"
            className="p-3 rounded-xl bg-slate-50 hover:bg-sky-50 hover:text-sky-600 font-semibold text-slate-700 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/why-solar"
            className="p-3 rounded-xl bg-slate-50 hover:bg-sky-50 hover:text-sky-600 font-semibold text-slate-700 transition-colors"
          >
            Why Solar
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="primary"
            size="md"
            href="/"
            leftIcon={<Home className="h-4 w-4" />}
          >
            Return to Homepage
          </Button>
          <Button
            variant="outline"
            size="md"
            href="/contact"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Contact Engineering Desk
          </Button>
        </div>
      </Container>
    </div>
  );
}
