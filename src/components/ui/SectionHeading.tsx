import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, align = "center", tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[.14em] ${
          dark ? "bg-white/5 text-brand-300 ring-1 ring-white/10" : "bg-brand-50 text-brand-600"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
        {eyebrow}
      </span>
      <h2 className={`mt-5 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[44px] ${dark ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
      )}
    </Reveal>
  );
}
