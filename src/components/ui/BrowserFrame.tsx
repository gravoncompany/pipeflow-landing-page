import type { ReactNode } from "react";

export function BrowserFrame({ children, title, tone = "dark", className = "" }: { children: ReactNode; title?: string; tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  return (
    <div className={`overflow-hidden rounded-2xl ${dark ? "bg-navy-800 ring-1 ring-white/10 shadow-glow" : "bg-white ring-1 ring-navy-900/10 shadow-card"} ${className}`}>
      <div className={`flex items-center gap-3 px-4 py-2.5 ${dark ? "border-b border-white/5 bg-navy-900/80" : "border-b border-navy-900/5 bg-slate-50"}`}>
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        {title && (
          <p className={`mx-auto max-w-xs flex-1 truncate text-center text-[11px] font-medium ${dark ? "text-slate-400" : "text-slate-500"}`}>{title}</p>
        )}
        <div className="w-10" aria-hidden />
      </div>
      {children}
    </div>
  );
}
