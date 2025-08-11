"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Ticket,
  QrCode,
  Layout,
  BarChart3,
  Users2,
  ShieldCheck,
  CalendarRange,
  CreditCard,
  Mail,
  ArrowRight,
} from "lucide-react";

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  href?: string;
};

const features: Feature[] = [
  {
    icon: Ticket,
    title: "Registration & Ticketing",
    desc: "Custom forms, promo codes, paid/free tickets, invoices, and attendee caps.",
    href: "/platform#registration",
  },
  {
    icon: QrCode,
    title: "QR Check‑in & Badging",
    desc: "Fast, secure entry with live status and printable/onsite badges.",
    href: "/platform#checkin",
  },
  {
    icon: Layout,
    title: "Event Websites",
    desc: "Launch branded pages with schedules, speakers, and sponsors—no code.",
    href: "/platform#websites",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    desc: "Real‑time dashboards for registrations, attendance, and conversion funnels.",
    href: "/platform#analytics",
  },
  {
    icon: Users2,
    title: "CRM & Segments",
    desc: "Centralize contacts, segment audiences, and track engagement.",
    href: "/platform#crm",
  },
  {
    icon: ShieldCheck,
    title: "Roles & Permissions",
    desc: "Granular RBAC for teams, vendors, and partners—least‑privilege by default.",
    href: "/platform#rbac",
  },
  {
    icon: CalendarRange,
    title: "Agenda & Speakers",
    desc: "Manage sessions, rooms, speakers, and publish changes instantly.",
    href: "/platform#agenda",
  },
  {
    icon: CreditCard,
    title: "Payments & Coupons",
    desc: "Collect payments with your preferred gateway and run discount campaigns.",
    href: "/platform#payments",
  },
  {
    icon: Mail,
    title: "Email & SMS Automations",
    desc: "Confirmations, reminders, and post‑event follow‑ups with templates.",
    href: "/platform#automations",
  },
];

export default function CapabilitiesSection() {
  const reduced = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : 0.6,
        when: "beforeChildren",
        staggerChildren: reduced ? 0 : 0.06,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.4 } },
  };

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      className="relative py-20 md:py-24 bg-black"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            Platform Capabilities
          </span>
          <h2
            id="capabilities-title"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            One platform for everything
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-white/70">
            Build pages, sell tickets, check‑in guests, and measure impact—from
            a single, unified dashboard.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.ul
          role="list"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {features.map((f) => (
            <motion.li
              key={f.title}
              variants={item}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 backdrop-blur-sm transition-colors hover:border-white/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm md:text-base text-white/70">
                    {f.desc}
                  </p>
                </div>
              </div>

              {f.href && (
                <div className="mt-5">
                  <Link
                    href={f.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition"
                    aria-label={`Learn more about ${f.title}`}
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              )}

              {/* subtle glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 ring-primary/30 transition" />
            </motion.li>
          ))}
        </motion.ul>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-12 flex items-center justify-center">
          <Link
            href="/platform"
            className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-primary/25 transition"
            aria-label="Explore the Platform"
          >
            Explore the Platform
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
