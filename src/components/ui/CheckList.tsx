import { Check } from "lucide-react";

export function CheckList({ items, tone = "light" }: { items: string[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${dark ? "bg-brand-500/20 text-brand-300" : "bg-brand-500 text-white"}`}>
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
          </span>
          <span className={`text-[15px] leading-relaxed ${dark ? "text-slate-300" : "text-slate-700"}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
