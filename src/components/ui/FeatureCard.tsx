import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Props = { icon: LucideIcon; title: string; description: string; tone?: "light" | "dark"; delay?: number };

export function FeatureCard({ icon: Icon, title, description, tone = "light", delay = 0 }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
          dark
            ? "bg-white/[.03] ring-1 ring-white/10 hover:bg-white/[.06] hover:ring-brand-400/40"
            : "bg-white shadow-card ring-1 ring-navy-900/5 hover:ring-brand-500/30"
        }`}
      >
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
            dark ? "bg-brand-500/15 text-brand-300" : "bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white"
          }`}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <h3 className={`mt-5 text-lg font-bold ${dark ? "text-white" : "text-navy-900"}`}>{title}</h3>
        <p className={`mt-2 text-[15px] leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>{description}</p>
      </div>
    </Reveal>
  );
}
