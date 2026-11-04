import { CheckCheck, MessageCircle, Phone, Search } from "lucide-react";

const contacts = [
  { n: "Marina · Clínica Beta", m: "Pode me enviar a proposta?", active: true, unread: 2 },
  { n: "Rafael · Loja Gama", m: "Obrigado pelo retorno!", unread: 0 },
  { n: "Ana · Studio Delta", m: "Qual o prazo de implantação?", unread: 1 },
];

/** Ilustração da caixa de conversas centralizada (dados fictícios). */
export function ChatMock() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-navy-900/10">
      <div className="grid sm:grid-cols-[220px_1fr]">
        <div className="hidden border-r border-slate-100 sm:block">
          <div className="flex items-center gap-2 border-b border-slate-100 p-3">
            <div className="flex flex-1 items-center gap-2 rounded-lg bg-slate-50 px-2.5 py-2 text-xs text-slate-400">
              <Search className="h-3.5 w-3.5" aria-hidden /> Buscar conversa
            </div>
          </div>
          {contacts.map((c) => (
            <div key={c.n} className={`flex items-center gap-2.5 border-b border-slate-50 p-3 ${c.active ? "bg-brand-50" : ""}`}>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-300 to-brand-500 text-[11px] font-bold text-white">
                {c.n[0]}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-navy-900">{c.n}</p>
                <p className="truncate text-[11px] text-slate-500">{c.m}</p>
              </div>
              {c.unread > 0 && <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-500 px-1 text-[9px] font-bold text-white">{c.unread}</span>}
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3 border-b border-slate-100 p-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-300 to-brand-500 text-[11px] font-bold text-white">M</span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-navy-900">Marina · Clínica Beta</p>
              <p className="text-[10px] text-slate-500">Etapa: Proposta · Origem: Instagram</p>
            </div>
            <Phone className="h-4 w-4 text-slate-400" aria-hidden />
          </div>
          <div className="flex-1 space-y-2.5 bg-[#F4F7FB] p-4">
            <Bubble side="in">Olá! Vi o anúncio de vocês. Atendem clínicas com 3 unidades?</Bubble>
            <Bubble side="out">Atendemos sim, Marina! Posso entender melhor o volume de atendimentos de vocês?</Bubble>
            <Bubble side="in">Hoje são em média 40 agendamentos por dia. Pode me enviar a proposta?</Bubble>
            <div className="flex justify-center pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[10px] font-medium text-brand-600 shadow-sm ring-1 ring-brand-100">
                <MessageCircle className="h-3 w-3" aria-hidden /> Conversa vinculada ao card do lead
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "in" | "out"; children: string }) {
  const out = side === "out";
  return (
    <div className={`flex ${out ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-[12px] leading-snug shadow-sm ${out ? "rounded-br-sm bg-brand-500 text-white" : "rounded-bl-sm bg-white text-navy-900"}`}>
        {children}
        {out && <CheckCheck className="ml-1 inline h-3 w-3 text-brand-100" aria-hidden />}
      </div>
    </div>
  );
}
