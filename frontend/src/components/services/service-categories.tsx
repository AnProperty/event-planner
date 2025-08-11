import Section from "../Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, MonitorSmartphone, Gauge, CheckCircle2 } from "lucide-react";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span aria-hidden>
        <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-300" />
      </span>
      <span className="text-white/80">{children}</span>
    </li>
  );
}

export default function ServiceCategories() {
  return (
    <Section
      id="categories"
      eyebrow="Service Categories"
      title="One team for ground ops and platform"
      subtitle="Choose what you need—or hand us the full run‑of‑show. We align every moving part with a single source of truth."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        <Card className="border-white/10 bg-white/[0.03] backdrop-blur-md ring-1 ring-primary/30">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <Building className="h-5 w-5" />
              On‑Site Event Operations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mt-2 text-white/75">
              <Bullet>Venue setup, stage, sound & lighting</Bullet>
              <Bullet>Vendor coordination & crew staffing</Bullet>
              <Bullet>Helpdesk, queue & guest flow management</Bullet>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/[0.03] backdrop-blur-md">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <MonitorSmartphone className="h-5 w-5" />
              Event Technology Platform
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mt-2 text-white/75">
              <Bullet>Registration, forms & ticketing</Bullet>
              <Bullet>QR check‑in, badging & access control</Bullet>
              <Bullet>Agenda, speakers & notifications</Bullet>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/[0.03] backdrop-blur-md ring-1 ring-emerald-300/25">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white">
              <Gauge className="h-5 w-5" />
              Insights & Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mt-2 text-white/75">
              <Bullet>Real‑time dashboards & reports</Bullet>
              <Bullet>Lead capture & post‑event exports</Bullet>
              <Bullet>Risk mapping & runbooks</Bullet>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
