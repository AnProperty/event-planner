"use client";

import Section from "../Section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <Section
      id="faq"
      eyebrow="FAQs"
      title="Common questions"
      subtitle="Straight answers so you can plan with confidence."
    >
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1" className="border-white/10">
            <AccordionTrigger className="text-left text-white hover:no-underline">
              Do you handle both on‑ground execution and the tech platform?
            </AccordionTrigger>
            <AccordionContent className="text-white/70">
              Yes. We’re a full‑service partner—venue setup, crew, AV, and
              helpdesk on site, plus the dashboard for registrations, QR
              check‑ins, badges, agenda, and analytics.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2" className="border-white/10">
            <AccordionTrigger className="text-left text-white hover:no-underline">
              Can we pick just a few services instead of the full package?
            </AccordionTrigger>
            <AccordionContent className="text-white/70">
              Absolutely. Everything is modular—choose individual services or
              let us run end‑to‑end.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3" className="border-white/10">
            <AccordionTrigger className="text-left text-white hover:no-underline">
              How do you manage check‑in if the internet is slow or drops?
            </AccordionTrigger>
            <AccordionContent className="text-white/70">
              We use redundant devices and offline fallback. Scans queue locally
              and sync when the connection returns—so gates keep moving.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4" className="border-white/10">
            <AccordionTrigger className="text-left text-white hover:no-underline">
              What about data privacy and access control?
            </AccordionTrigger>
            <AccordionContent className="text-white/70">
              Least‑privilege roles, encrypted transport, and a clear data
              retention policy. We can also delete data on request after the
              event concludes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}
