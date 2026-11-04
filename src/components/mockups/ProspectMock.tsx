import { Building2, MapPin, Search, Filter, Plus } from "lucide-react";

const rows = [
  { n: "Empresa Ômega Ltda.", s: "Tecnologia", c: "São Paulo, SP" },
  { n: "Distribuidora Sigma", s: "Atacado", c: "Curitiba, PR" },
  { n: "Clínica Lambda", s: "Saúde", c: "Belo Horizonte, MG" },
  { n: "Construtora Kappa", s: "Construção", c: "Recife, PE" },
];

/** Ilustração da busca de empresas B2B (dados fictícios). */
export function ProspectMock() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-navy-900/10">
      <div className="space-y-3 border-b border-slate-100 p-4">
        <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2.5 ring-1 ring-slate-200">
          <Search className="h-4 w-4 text-slate-400" aria-hidden />
          <span className="text-sm text-slate-500">Segmento, cidade ou palavra-chave</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Segmento", "Estado", "Cidade", "Porte"].map((f) => (
            <span key={f} className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700">
              <Filter className="h-3 w-3" aria-hidden /> {f}
            </span>
          ))}
        </div>
      </div>
      <ul>
        {rows.map((r, i) => (
          <li key={r.n} className="flex items-center gap-3 border-b border-slate-50 px-4 py-3 last:border-0">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-brand-300">
              <Building2 className="h-4 w-4" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-navy-900">{r.n}</p>
              <p className="flex items-center gap-1 truncate text-[11px] text-slate-500">
                {r.s} · <MapPin className="h-3 w-3" aria-hidden /> {r.c}
              </p>
            </div>
            <span className={`inline-flex shrink-0 items-center gap-1 rounded-lg px-2.5 py-1.5 text-[11px] font-semibold ${i === 0 ? "bg-brand-500 text-white" : "bg-slate-100 text-slate-600"}`}>
              <Plus className="h-3 w-3" aria-hidden /> <span className="hidden sm:inline">Adicionar ao funil</span><span className="sm:hidden">Funil</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="border-t border-slate-100 px-4 py-2 text-right text-[10px] text-slate-400">Demonstração ilustrativa · dados fictícios</p>
    </div>
  );
}
