import Section from "../Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarRange,
  QrCode,
  Layout,
  Ticket,
  Megaphone,
  BarChart3,
  Wrench,
  BadgeCheck,
  ReceiptText,
  CheckCircle2,
} from "lucide-react";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 aria-hidden className="h-4 w-4 mt-0.5 text-emerald-300" />
      <span className="text-white/80">{children}</span>
    </li>
  );
}

const items = [
  {
    icon: CalendarRange,
    title: "Registration & Scheduling",
    desc: "Launch branded forms, manage slots, and publish agendas.",
    points: [
      "Custom fields & validations",
      "Capacity & waitlists",
      "Speaker/session pages",
    ],
  },
  {
    icon: QrCode,
    title: "QR Check‑in & Badging",
    desc: "Fast lanes with offline fallback and anti‑duplication scanning.",
    points: [
      "On‑site printers",
      "Zone‑based access control",
      "Crew/vendor passes",
    ],
  },
  {
    icon: Layout,
    title: "Event Websites & Pages",
    desc: "Beautiful landing pages to convert visitors into attendees.",
    points: [
      "Themes & sections",
      "Sponsors & exhibitors",
      "SEO‑friendly structure",
    ],
  },
  {
    icon: Ticket,
    title: "Tickets, Coupons & Invoices",
    desc: "Simple or tiered pricing with discounts and compliant invoicing.",
    points: [
      "Promo codes & bundles",
      "Email confirmations & receipts",
      "Finance exports",
    ],
  },
  {
    icon: Megaphone,
    title: "Comms & Automations",
    desc: "Confirmations, reminders, and post‑event follow‑ups.",
    points: [
      "Email & SMS templates",
      "Schedule by segment",
      "Feedback surveys",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Track registrations, attendance, and lead conversions.",
    points: [
      "Real‑time dashboards",
      "CSV/Excel exports",
      "Attribution snapshots",
    ],
  },
  {
    icon: Wrench,
    title: "Stage, Sound & Lighting",
    desc: "AV planning, cueing, and show calling for time‑tight programs.",
    points: ["Cue sheets & timers", "Tech run‑through", "Backup devices"],
  },
  {
    icon: BadgeCheck,
    title: "Helpdesk & Floor Ops",
    desc: "Queue management, reprints, and guest assistance.",
    points: ["Lost badge workflows", "VIP routing", "Incident paths"],
  },
  {
    icon: ReceiptText,
    title: "Data & Privacy Basics",
    desc: "Least‑privilege access and privacy‑first handling.",
    points: [
      "RBAC for teams/vendors",
      "Encrypted transport",
      "Data retention policy",
    ],
  },
] as const;

export default function DetailedServicesGrid() {
  return (
    <Section
      id="details"
      eyebrow="Detailed Services"
      title="Pick individual services or a turnkey package"
      subtitle="Modular building blocks so you can scale from a small AGM to a multi‑track expo."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {items.map(({ icon: Icon, title, desc, points }) => (
          <Card
            key={title}
            className="border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 transition"
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <span>
                  <Icon className="h-5 w-5" />
                </span>
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/75">
              <p>{desc}</p>
              <ul className="mt-3 space-y-2">
                {points.map((p) => (
                  <Bullet key={p}>{p}</Bullet>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
