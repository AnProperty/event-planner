"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Wrench,
  Truck,
  Megaphone,
  AudioLines,
  Users,
  BadgeCheck,
  MonitorSmartphone,
  CalendarRange,
  QrCode,
  Layers,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const onGround = [
  { icon: Truck, label: "Logistics & Vendor Coordination" },
  { icon: AudioLines, label: "Stage, Sound & Lighting" },
  { icon: Megaphone, label: "Show Calling & Run of Show" },
  { icon: Users, label: "On‑Site Crew & Helpdesk" },
  { icon: BadgeCheck, label: "Badging & Queue Management" },
  { icon: Wrench, label: "Booth & Experience Setup" },
];

const techSide = [
  { icon: MonitorSmartphone, label: "Event Site & Registration" },
  { icon: CalendarRange, label: "Agenda & Speaker Management" },
  { icon: QrCode, label: "QR Check‑in & Access Control" },
  { icon: Layers, label: "Tickets, Coupons & Invoices" },
  { icon: ShieldCheck, label: "RBAC for Teams & Vendors" },
  { icon: BarChart3, label: "Live Dashboards & Reports" },
];

export default function ServicesSection() {
  const reduced = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.5 } },
  };

  const listItem = {
    hidden: { opacity: 0, y: reduced ? 0 : 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduced ? 0 : 0.04 * i,
        duration: reduced ? 0 : 0.35,
      },
    }),
  };

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative py-20 md:py-24 bg-black"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            Full‑Service Promise
          </span>
          <h2
            id="services-title"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            We run the event <span className="text-primary">and</span> the tech
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-white/70">
            From physical setup to digital workflows—one team, one plan, one
            dashboard.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* On‑Ground */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                On‑Ground Management
              </h3>
              <span className="text-xs rounded-full bg-primary/10 text-primary px-3 py-1 border border-primary/30">
                On‑Site
              </span>
            </div>
            <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {onGround.map((item, i) => (
                <motion.li
                  key={item.label}
                  custom={i}
                  variants={listItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3"
                >
                  <item.icon
                    aria-hidden="true"
                    className="h-5 w-5 text-primary shrink-0 mt-0.5"
                  />
                  <span className="text-white/90">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech & Dashboard */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Tech & Dashboard
              </h3>
              <span className="text-xs rounded-full bg-emerald-400/10 text-emerald-300 px-3 py-1 border border-emerald-300/30">
                Platform
              </span>
            </div>
            <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techSide.map((item, i) => (
                <motion.li
                  key={item.label}
                  custom={i}
                  variants={listItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3"
                >
                  <item.icon
                    aria-hidden="true"
                    className="h-5 w-5 text-white/90 shrink-0 mt-0.5"
                  />
                  <span className="text-white/90">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
