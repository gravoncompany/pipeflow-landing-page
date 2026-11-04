import type { ReactNode } from "react";
import { Lock } from "lucide-react";

export function BrowserFrame({ children, url = "app.pipeflow.com.br", tone = "dark", className = "" }: { children: ReactNode; url?: string; tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  return (
    <div className={`overflow-hidden rounded-2xl ${dark ? "bg-navy-800 ring-1 ring-white/10 shadow-glow" : "bg-white ring-1 ring-navy-900/10 shadow-card"} ${className}`}>
      <div className={`flex items-center gap-3 px-4 py-3 ${dark ? "border-b border-white/5 bg-navy-900/80" : "border-b border-navy-900/5 bg-slate-50"}`}>
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className={`mx-auto flex max-w-xs flex-1 items-center justify-center gap-1.5 truncate rounded-md px-3 py-1 text-[11px] ${dark ? "bg-white/5 text-slate-400" : "bg-white text-slate-500 ring-1 ring-navy-900/5"}`}>
          <Lock className="h-3 w-3 shrink-0" aria-hidden />
          <span className="truncate">{url}</span>
        </div>
        <div className="w-10" aria-hidden />
      </div>
      {children}
    </div>
  );
}
