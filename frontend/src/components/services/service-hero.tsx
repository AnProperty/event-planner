import Link from "next/link";
import Eyebrow from "../Eyebrow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Truck,
  MonitorSmartphone,
  QrCode,
  BarChart3,
} from "lucide-react";

export default function ServiceHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Orbs & beam */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>Our Services</Eyebrow>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
              Everything you need to run a flawless event
            </h1>
            <p className="mt-5 text-lg text-white/70">
              One accountable partner for on‑ground execution{" "}
              <span className="text-white/60">and</span> an all‑in‑one
              dashboard: registrations, QR check‑ins, badges, agenda, and
              analytics.
            </p>
            <div className="mt-8">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-primary/25 transition"
                aria-label="Plan your event with us"
              >
                Plan Your Event With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right: highlights */}
          <div className="lg:col-span-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-white/10 bg-white/[0.03] backdrop-blur-md">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Truck className="h-5 w-5" />
                    On‑Ground Crew
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/75">
                  Vendor coordination, venue setup, helpdesk, and show calling.
                </CardContent>
              </Card>
              <Card className="border-white/10 bg-white/[0.03] backdrop-blur-md ring-1 ring-primary/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-white">
                    <MonitorSmartphone className="h-5 w-5" />
                    Event Tech
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/75">
                  Registration, landing pages, dashboards, and automations.
                </CardContent>
              </Card>
              <Card className="border-white/10 bg-white/[0.03] backdrop-blur-md">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-white">
                    <QrCode className="h-5 w-5" />
                    Access Control
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/75">
                  High‑throughput QR lanes, badge printing, and zone RBAC.
                </CardContent>
              </Card>
              <Card className="border-white/10 bg-white/[0.03] backdrop-blur-md ring-1 ring-emerald-300/25">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BarChart3 className="h-5 w-5" />
                    Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/75">
                  Real‑time numbers for registrations, attendance, and leads.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
