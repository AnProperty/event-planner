import { Metadata } from "next";
import ServiceHero from "@/components/services/service-hero";
import ServiceCategories from "@/components/services/service-categories";
import DetailedServicesGrid from "@/components/services/detailed-services-grid";
import MiniProcess from "@/components/services/mini-process";
import ServicesFaq from "@/components/services/faq";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Services — End‑to‑End Event Management & Tech Platform",
  description:
    "We handle on‑ground execution and provide an all‑in‑one event tech dashboard—registration, QR check‑in, badges, agenda, and analytics.",
};

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      <ServiceHero />
      <ServiceCategories />
      <DetailedServicesGrid />
      <MiniProcess />
      <ServicesFaq />
      <CTASection />
    </main>
  );
}
