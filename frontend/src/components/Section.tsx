import Eyebrow from "./Eyebrow";

export default function Section({
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
      {/* Luxe backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(90%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%),linear-gradient(to_bottom,transparent,transparent_65%,rgba(255,255,255,0.02)),repeating-linear-gradient(to_right,rgba(255,255,255,0.04)_0_1px,transparent_1px_120px),repeating-linear-gradient(to_bottom,rgba(255,255,255,0.04)_0_1px,transparent_1px_120px)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
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
