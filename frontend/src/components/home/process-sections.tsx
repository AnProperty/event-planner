"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarCheck2,
  LaptopMinimal,
  PartyPopper,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: CalendarCheck2,
    title: "1. Discovery & Planning",
    desc: "We meet to understand your goals, audience, and budget, then design a custom event plan.",
  },
  {
    icon: LaptopMinimal,
    title: "2. Tech & On-Ground Setup",
    desc: "We prepare your dashboard, website, registration tools, and coordinate all physical logistics.",
  },
  {
    icon: PartyPopper,
    title: "3. Event Day Execution",
    desc: "From guest check-in to live program management — our on-site team runs everything seamlessly.",
  },
  {
    icon: BarChart3,
    title: "4. Post-Event Insights",
    desc: "You get detailed analytics, attendee feedback, and recommendations for your next event.",
  },
];

export default function ProcessSection() {
  const reduced = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.6 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduced ? 0 : 0.08 * i,
        duration: reduced ? 0 : 0.4,
      },
    }),
  };

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative py-20 md:py-24 bg-black"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            How It Works
          </span>
          <h2
            id="process-title"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Our 4-Step Event Flow
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-white/70">
            We combine clear communication, precise execution, and smart tech —
            so you can focus on enjoying your event.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                <step.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-white/70">{step.desc}</p>

              {/* Step number indicator */}
              <div className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold text-sm shadow-lg">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
