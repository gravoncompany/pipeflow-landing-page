import { MessageCircle, Sparkles, Search, LayoutGrid, BarChart3, Settings, Bell } from "lucide-react";
import { BrowserFrame } from "../ui/BrowserFrame";

/** Demonstração ilustrativa da interface (dados fictícios, sem métricas de clientes). */
const columns = [
  { name: "Novo lead", color: "bg-sky-400", cards: [{ n: "Empresa Alfa", t: "Site · Google" }, { n: "Clínica Beta", t: "Instagram" }, { n: "Loja Gama", t: "WhatsApp" }] },
  { name: "Qualificação", color: "bg-brand-400", cards: [{ n: "Studio Delta", t: "IA: perfil aderente", ai: true }, { n: "Grupo Épsilon", t: "Meta Ads" }] },
  { name: "Proposta", color: "bg-violet-400", cards: [{ n: "Indústria Zeta", t: "Reunião agendada" }, { n: "Agência Eta", t: "Follow-up hoje" }] },
  { name: "Fechado", color: "bg-emerald-400", cards: [{ n: "Escola Teta", t: "Contrato enviado" }] },
];

export function PipelineMock() {
  return (
    <BrowserFrame className="text-left">
      <div className="flex">
        <aside className="hidden w-14 shrink-0 flex-col items-center gap-4 border-r border-white/5 bg-navy-900/60 py-5 sm:flex" aria-hidden>
          {[LayoutGrid, MessageCircle, Sparkles, Search, BarChart3, Settings].map((Icon, i) => (
            <span key={i} className={`flex h-9 w-9 items-center justify-center rounded-lg ${i === 0 ? "bg-brand-500 text-white" : "text-slate-500"}`}>
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </aside>
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Funil comercial</p>
              <p className="font-display text-sm font-bold text-white sm:text-base">Pipeline de vendas</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-300">
                <Bell className="h-4 w-4" aria-hidden />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 animate-pulse-dot rounded-full bg-sky-400" />
              </span>
              <span className="hidden rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white sm:inline">+ Novo lead</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {columns.map((col, ci) => (
              <div key={col.name} className={`rounded-xl bg-white/[.03] p-2.5 ring-1 ring-white/5 ${ci > 1 ? "hidden lg:block" : ""}`}>
                <div className="mb-2.5 flex items-center gap-2 px-1">
                  <span className={`h-2 w-2 rounded-full ${col.color}`} />
                  <span className="truncate text-[11px] font-semibold text-slate-300">{col.name}</span>
                  <span className="ml-auto text-[10px] text-slate-500">{col.cards.length}</span>
                </div>
                <div className="space-y-2">
                  {col.cards.map((c, i) => (
                    <div
                      key={c.n}
                      className={`rounded-lg bg-navy-700/70 p-2.5 ring-1 ring-white/5 ${"ai" in c && c.ai ? "ring-brand-400/50" : ""} ${ci === 1 && i === 0 ? "animate-float" : ""}`}
                    >
                      <p className="truncate text-xs font-semibold text-white">{c.n}</p>
                      <p className={`mt-1 flex items-center gap-1 truncate text-[10px] ${"ai" in c && c.ai ? "text-brand-300" : "text-slate-400"}`}>
                        {"ai" in c && c.ai && <Sparkles className="h-3 w-3 shrink-0" aria-hidden />}
                        {c.t}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-right text-[10px] text-slate-500">Demonstração ilustrativa · dados fictícios</p>
        </div>
      </div>
    </BrowserFrame>
  );
}
