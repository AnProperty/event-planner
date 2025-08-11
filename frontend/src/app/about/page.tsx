/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import {
  Sparkles,
  LayoutDashboard,
  QrCode,
  ShieldCheck,
  Timer,
  Cog,
  BarChart3,
  Globe2,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Compass,
  BadgeCheck,
  Cpu,
  Users2,
} from "lucide-react";

/* ---------------------------------- */
/* Metadata (server)                  */
/* ---------------------------------- */
export const metadata = {
  title: "About — Full‑Service Event Management & Tech Platform",
  description:
    "Bangladesh‑born, full‑service event partner. We run the on‑ground operations and the all‑in‑one tech platform—so you can plan, run, and measure events from one place.",
};

/* ---------------------------------- */
/* Small UI atoms (same file)         */
/* ---------------------------------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/80">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-18 md:py-24">
      {/* subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(90%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%),linear-gradient(to_bottom,transparent,transparent_65%,rgba(255,255,255,0.02)),repeating-linear-gradient(to_right,rgba(255,255,255,0.04)_0_1px,transparent_1px_120px),repeating-linear-gradient(to_bottom,rgba(255,255,255,0.04)_0_1px,transparent_1px_120px)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-white/70">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  title,
  children,
  tone = "default",
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
  tone?: "default" | "primary" | "emerald";
}) {
  const toneStyles =
    tone === "primary"
      ? "bg-white/[0.03] ring-1 ring-primary/30"
      : tone === "emerald"
      ? "bg-white/[0.03] ring-1 ring-emerald-300/25"
      : "bg-white/[0.03] ring-1 ring-white/10";

  const badgeBg =
    tone === "primary"
      ? "bg-primary/15 text-primary"
      : tone === "emerald"
      ? "bg-emerald-300/15 text-emerald-200"
      : "bg-white/[0.08] text-white/90";

  return (
    <div
      className={`rounded-2xl border border-white/10 backdrop-blur-md p-6 ${toneStyles}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`h-10 w-10 grid place-items-center rounded-xl ${badgeBg}`}
        >
          <span>
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="text-white/75">{children}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span>
        <CheckCircle2 aria-hidden className="h-4 w-4 mt-0.5 text-emerald-300" />
      </span>
      <span className="text-white/80">{children}</span>
    </li>
  );
}

function Divider() {
  return <hr className="border-white/10 my-10 md:my-12" />;
}

function IconStat({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
      <Icon className="h-5 w-5 text-white/90" />
      <span className="text-white/80">{label}</span>
    </div>
  );
}

function QuoteBlock() {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 md:p-10 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
      />
      <blockquote className="relative">
        <p className="text-xl md:text-2xl leading-relaxed text-white/90">
          “Events feel effortless when the ground team and the dashboard speak
          the same language. That’s the standard we build for every client.”
        </p>
        <footer className="mt-4 text-sm text-white/60">Founding Team</footer>
      </blockquote>
    </div>
  );
}

/* ---------------------------------- */
/* Page (server)                      */
/* ---------------------------------- */
export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO — split layout with luxe backdrop */}
      <section className="relative overflow-hidden">
        {/* Orbs & beams */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-6">
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
                We run the event <span className="text-primary">&</span> the
                tech
              </h1>
              <p className="mt-5 text-lg text-white/70">
                Bangladesh‑born, full‑service event partner—on‑ground crew, show
                calling, check‑in lanes, and an all‑in‑one dashboard to plan,
                run, and measure every moment.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <IconStat icon={BadgeCheck} label="Operational Runbooks" />
                <IconStat icon={Cpu} label="QR Check‑in & Access Control" />
                <IconStat icon={LayoutDashboard} label="Unified Dashboard" />
              </div>

              <div className="mt-8">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-primary/25 transition"
                  aria-label="Contact Us"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right: glass highlight grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1 space-y-4">
                  <Card icon={Sparkles} title="Design‑first" tone="primary">
                    Guests notice when everything just works. We obsess over the
                    details.
                  </Card>
                  <Card icon={QrCode} title="Seamless entry">
                    High‑throughput QR lanes, badge printing, and clear flows.
                  </Card>
                </div>
                <div className="col-span-1 space-y-4">
                  <Card icon={ShieldCheck} title="Reliability">
                    Offline fallbacks, device redundancy, and incident paths.
                  </Card>
                  <Card icon={BarChart3} title="Measurable ROI" tone="emerald">
                    From registrations to attendance to leads—see what worked.
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <Section
        id="mission"
        eyebrow="Our Mission"
        title="From chaos to clarity for every event"
        subtitle="We merge reliable on‑site operations with connected software so teams focus on outcomes—not firefighting."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <Card icon={Compass} title="Clarity over chaos">
            One plan, one team, one source of truth—no vendor ping‑pong.
          </Card>
          <Card icon={LayoutDashboard} title="One connected dashboard">
            Registration, check‑ins, agenda, comms, and analytics—truly in sync.
          </Card>
          <Card icon={ShieldCheck} title="Prepared, not lucky">
            Pre‑flight tests, backups, and clear escalation keep showtime
            smooth.
          </Card>
        </div>
      </Section>

      {/* WHY US */}
      <Section
        id="why-us"
        eyebrow="Why Us"
        title="What makes us different"
        subtitle="Full‑service partner: the crew, the lanes, the cueing—and the platform that keeps it all in sync."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          <Card icon={QrCode} title="On‑ground + Tech" tone="primary">
            One accountable team for logistics{" "}
            <span className="text-white/60">and</span> the platform—no finger
            pointing.
          </Card>
          <Card icon={Timer} title="Time‑tight shows">
            Run‑of‑show discipline: cues, timers, backups, and clear comms.
          </Card>
          <Card icon={Users2} title="Flows that scale">
            From AGMs to expos—capacity‑aware lanes, rooms, and helpdesks.
          </Card>
          <Card icon={Globe2} title="Built for Bangladesh">
            Local vendors & support with pricing that respects your budget.
          </Card>
        </div>

        <Divider />

        <QuoteBlock />
      </Section>

      {/* APPROACH */}
      <Section
        id="approach"
        eyebrow="Our Approach"
        title="Clear plans, accountable execution"
        subtitle="We align every moving part—from vendor calls to guest arrivals—using proven runbooks and a dashboard that reflects the ground truth."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <Card icon={Handshake} title="Discovery → Scope">
            <ul className="space-y-2 mt-2">
              <Bullet>Goals, audience, budget</Bullet>
              <Bullet>Venue shortlist & timeline</Bullet>
              <Bullet>Risk map & contingencies</Bullet>
            </ul>
          </Card>
          <Card icon={Cog} title="Build → Prep">
            <ul className="space-y-2 mt-2">
              <Bullet>Dashboard + registrations</Bullet>
              <Bullet>Vendors & AV plan</Bullet>
              <Bullet>Staffing & check‑in flows</Bullet>
            </ul>
          </Card>
          <Card icon={LayoutDashboard} title="Showtime → After">
            <ul className="space-y-2 mt-2">
              <Bullet>On‑site run of show</Bullet>
              <Bullet>Live dashboards & comms</Bullet>
              <Bullet>Post‑event analytics & assets</Bullet>
            </ul>
          </Card>
        </div>
      </Section>

      {/* RELIABILITY & PRIVACY */}
      <Section
        id="reliability"
        eyebrow="Reliability & Privacy"
        title="We prepare so your event doesn’t fail"
        subtitle="Clear comms, documented runbooks, and privacy‑first data handling underpin everything we do."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <Card icon={ShieldCheck} title="Operational safeguards">
            <ul className="space-y-2 mt-2">
              <Bullet>Redundant check‑in devices and offline fallback</Bullet>
              <Bullet>Clear incident paths and on‑site escalation</Bullet>
              <Bullet>Pre‑flight tests: AV, badges, networks, power</Bullet>
            </ul>
          </Card>
          <Card icon={ShieldCheck} title="Data & privacy basics" tone="emerald">
            <ul className="space-y-2 mt-2">
              <Bullet>Least‑privilege access with roles & permissions</Bullet>
              <Bullet>Encrypted transport and secure storage by default</Bullet>
              <Bullet>Data retention policy & deletion on request</Bullet>
            </ul>
          </Card>
        </div>

        <div className="mt-12 flex items-center justify-center">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-primary/25 transition"
            aria-label="Contact Us"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Section>
    </main>
  );
}
