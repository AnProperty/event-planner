import Section from "../Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPinned, AudioLines, Megaphone, BarChart3 } from "lucide-react";

export default function MiniProcess() {
  return (
    <Section
      id="process"
      eyebrow="How We Work"
      title="A clear, four‑step flow"
      subtitle="Discovery → Prep → Showtime → Insights. You always know what’s next."
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
        {[
          {
            icon: MapPinned,
            title: "1) Discovery",
            desc: "Goals, audience, timeline, and risk map become a shared plan.",
          },
          {
            icon: AudioLines,
            title: "2) Prep",
            desc: "Dashboard, registrations, runbooks, vendors, and crew scheduling.",
          },
          {
            icon: Megaphone,
            title: "3) Showtime",
            desc: "On‑site ops, check‑in lanes, cueing, and live comms.",
          },
          {
            icon: BarChart3,
            title: "4) Insights",
            desc: "Reports, exports, and recommendations for your next event.",
          },
        ].map(({ icon: Icon, title, desc }) => (
          <Card
            key={title}
            className="border-white/10 bg-white/[0.03] backdrop-blur-md"
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Icon className="h-5 w-5" />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/75">{desc}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
