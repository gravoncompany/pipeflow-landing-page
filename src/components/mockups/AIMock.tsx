import { Sparkles, Quote, ArrowRight, ShieldCheck } from "lucide-react";

/** Ilustração de uma análise de IA com evidências e proposta revisável (dados fictícios). */
export function AIMock() {
  return (
    <div className="relative rounded-2xl bg-navy-800 p-5 shadow-glow ring-1 ring-white/10 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
          <Sparkles className="h-4 w-4" aria-hidden />
        </span>
        <div>
          <p className="text-sm font-bold text-white">Análise da conversa</p>
          <p className="text-[11px] text-slate-400">Lead: Clínica Beta · WhatsApp</p>
        </div>
        <span className="ml-auto rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-400/20">Perfil aderente</span>
      </div>

      <div className="mt-5 space-y-2.5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Evidências encontradas na conversa</p>
        {["“Atendem clínicas com 3 unidades?”", "“40 agendamentos por dia”", "“Pode me enviar a proposta?”"].map((q) => (
          <div key={q} className="flex items-start gap-2 rounded-lg bg-white/[.03] p-2.5 ring-1 ring-white/5">
            <Quote className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400" aria-hidden />
            <p className="text-xs text-slate-300">{q}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-brand-500/10 p-3.5 ring-1 ring-brand-400/30">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-300">Sugestão para revisão</p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-white">
          <span className="rounded-md bg-white/10 px-2 py-1">Qualificação</span>
          <ArrowRight className="h-3.5 w-3.5 text-brand-300" aria-hidden />
          <span className="rounded-md bg-brand-500 px-2 py-1 font-semibold">Proposta</span>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="flex-1 rounded-lg bg-brand-500 py-2 text-center text-xs font-semibold text-white">Confirmar</span>
          <span className="flex-1 rounded-lg bg-white/5 py-2 text-center text-xs font-semibold text-slate-300 ring-1 ring-white/10">Cancelar</span>
        </div>
      </div>
      <p className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-400">
        <ShieldCheck className="h-3.5 w-3.5 text-brand-300" aria-hidden /> A IA sugere; quem decide é o seu time.
      </p>
    </div>
  );
}
