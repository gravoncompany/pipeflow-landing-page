import { useState } from "react";
import { ArrowRight, Check, Crown, Minus, Star } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { features, plans, type FeatureValue, type Plan, type PlanId } from "../../config/plans";

export function Plans() {
  return (
    <section id="planos" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-40 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-brand-100/60 blur-[120px]" aria-hidden />
      <Container className="relative">
        <SectionHeading
          eyebrow="Planos"
          title="Escolha o plano ideal para a sua operação comercial"
          description="Assinaturas mensais com recursos que acompanham o crescimento do seu time. No Enterprise, as condições são personalizadas."
        />

        <div className="mx-auto mt-14 grid max-w-6xl items-stretch gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-5 xl:gap-7">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 90} className={`h-full ${plan.popular ? "order-first lg:order-none" : ""}`}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Comparison />
      </Container>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const popular = !!plan.popular;
  const enterprise = plan.id === "enterprise";
  const external = { target: "_blank", rel: "noopener noreferrer" } as const;

  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl p-6 sm:p-8 ${
        popular
          ? "bg-navy-950 text-white shadow-glow ring-2 ring-brand-500 lg:-my-4 lg:py-12"
          : "bg-white text-navy-900 shadow-card ring-1 ring-navy-900/10"
      }`}
      aria-label={`Plano ${plan.name}`}
    >
      {popular && (
        <>
          <div className="grid-bg pointer-events-none absolute inset-0 rounded-3xl opacity-70" aria-hidden />
          <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow">
            <Star className="h-3.5 w-3.5 fill-current" aria-hidden /> Mais popular
          </span>
        </>
      )}

      <div className="relative">
        <div className="flex items-center gap-2">
          {enterprise && <Crown className="h-5 w-5 text-brand-500" aria-hidden />}
          <h3 className={`text-xl font-extrabold ${popular ? "text-white" : "text-navy-900"}`}>
            Pipeflow <span className={popular ? "text-brand-300" : "text-brand-600"}>{plan.name}</span>
          </h3>
        </div>

        <div className="mt-5 flex min-h-[56px] items-end gap-1">
          {plan.price ? (
            <>
              <span className={`font-display text-5xl font-extrabold leading-none tracking-tight ${popular ? "text-white" : "text-navy-900"}`}>{plan.price}</span>
              <span className={`mb-1 text-base font-semibold ${popular ? "text-slate-300" : "text-slate-500"}`}>{plan.period}</span>
            </>
          ) : (
            <span className="font-display text-4xl font-extrabold leading-none tracking-tight text-navy-900">Sob consulta</span>
          )}
        </div>

        <p className={`mt-5 text-[15px] leading-relaxed ${popular ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p>

        <a
          href={plan.cta.href}
          {...external}
          className={`group mt-7 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[.98] ${
            popular
              ? "bg-brand-500 text-white shadow-glow hover:bg-brand-400 focus-visible:outline-brand-300"
              : enterprise
                ? "bg-navy-900 text-white hover:bg-navy-700 focus-visible:outline-brand-500"
                : "bg-brand-50 text-brand-700 ring-1 ring-brand-100 hover:bg-brand-500 hover:text-white focus-visible:outline-brand-500"
          }`}
        >
          {plan.cta.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </a>
        {enterprise && <p className="mt-2 text-center text-xs text-slate-500">Atendimento pelo WhatsApp comercial</p>}

        <div className={`my-7 h-px ${popular ? "bg-white/10" : "bg-slate-100"}`} />

        <p className={`text-sm font-bold ${popular ? "text-white" : "text-navy-900"}`}>{plan.highlightsTitle}</p>
        <ul className="mt-4 space-y-3">
          {plan.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3">
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${popular ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600"}`}>
                <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
              </span>
              <span className={`text-[15px] leading-snug ${popular ? "text-slate-200" : "text-slate-700"}`}>{h}</span>
            </li>
          ))}
        </ul>

        {plan.extra && (
          <div className="mt-7 rounded-2xl bg-brand-50 p-4 ring-1 ring-brand-100">
            <p className="text-sm font-bold text-navy-900">{plan.extra.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{plan.extra.text}</p>
          </div>
        )}
      </div>
    </article>
  );
}

const planOrder: PlanId[] = ["essencial", "profissional", "enterprise"];
const planName: Record<PlanId, string> = { essencial: "Essencial", profissional: "Profissional", enterprise: "Enterprise" };

function Value({ value, soon, dark = false }: { value: FeatureValue; soon?: boolean; dark?: boolean }) {
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center text-slate-300" aria-label="Não incluído">
        <Minus className="h-4 w-4" aria-hidden />
      </span>
    );
  }
  if (soon) {
    return <span className="inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">Em breve</span>;
  }
  if (value === true) {
    return (
      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${dark ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600"}`} aria-label="Incluído">
        <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
      </span>
    );
  }
  return <span className="text-sm font-semibold text-navy-900">{value}</span>;
}

function Comparison() {
  const [mobilePlan, setMobilePlan] = useState<PlanId>("profissional");

  return (
    <Reveal className="mx-auto mt-20 max-w-6xl">
      <h3 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">Compare todos os recursos</h3>
      <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-slate-600">Os recursos e limites variam conforme o plano contratado.</p>

      {/* Desktop / tablet: tabela comparativa */}
      <div className="mt-10 hidden overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-900/10 md:block">
        <table className="w-full table-fixed border-collapse text-left">
          <caption className="sr-only">Comparativo de recursos dos planos Pipeflow</caption>
          <thead>
            <tr className="bg-slate-50">
              <th scope="col" className="w-[40%] px-6 py-5 text-sm font-semibold text-slate-500">Funcionalidades</th>
              {planOrder.map((id) => {
                const plan = plans.find((p) => p.id === id)!;
                return (
                  <th key={id} scope="col" className={`px-4 py-5 text-center ${id === "profissional" ? "bg-navy-950 text-white" : "text-navy-900"}`}>
                    <span className="block font-display text-base font-extrabold">{planName[id]}</span>
                    <span className={`mt-1 block text-sm font-semibold ${id === "profissional" ? "text-brand-300" : "text-slate-500"}`}>
                      {plan.price ? `${plan.price}${plan.period}` : "Sob consulta"}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {features.map(({ label, icon: Icon, values, soon }) => (
              <tr key={label} className="border-t border-slate-100">
                <th scope="row" className="px-6 py-3.5 font-normal">
                  <span className="flex items-center gap-3 text-[15px] text-slate-700">
                    <Icon className="h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                    {label}
                  </span>
                </th>
                {planOrder.map((id) => (
                  <td key={id} className={`px-4 py-3.5 text-center ${id === "profissional" ? "bg-brand-50/60" : ""}`}>
                    <Value value={values[id]} soon={soon} dark={id === "profissional"} />
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-t border-slate-100">
              <td className="px-6 py-5" />
              {planOrder.map((id) => {
                const plan = plans.find((p) => p.id === id)!;
                return (
                  <td key={id} className={`px-4 py-5 text-center ${id === "profissional" ? "bg-brand-50/60" : ""}`}>
                    <a
                      href={plan.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex min-h-[44px] items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${
                        id === "profissional" ? "bg-brand-500 text-white hover:bg-brand-400" : "bg-navy-900 text-white hover:bg-navy-700"
                      }`}
                    >
                      {plan.cta.label}
                    </a>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Celular: um plano por vez, sem rolagem lateral */}
      <div className="mt-8 md:hidden">
        <div role="tablist" aria-label="Escolha o plano para comparar" className="grid grid-cols-3 gap-1 rounded-2xl bg-slate-100 p-1">
          {planOrder.map((id) => (
            <button
              key={id}
              role="tab"
              type="button"
              aria-selected={mobilePlan === id}
              aria-controls="comparativo-mobile"
              onClick={() => setMobilePlan(id)}
              className={`min-h-[44px] rounded-xl px-2 text-sm font-semibold transition ${mobilePlan === id ? "bg-navy-950 text-white shadow" : "text-slate-600"}`}
            >
              {planName[id]}
            </button>
          ))}
        </div>
        <ul id="comparativo-mobile" role="tabpanel" className="mt-4 divide-y divide-slate-100 rounded-2xl bg-white px-4 shadow-card ring-1 ring-navy-900/10">
          {features.map(({ label, icon: Icon, values, soon }) => (
            <li key={label} className="flex items-center justify-between gap-3 py-3">
              <span className={`flex min-w-0 items-center gap-3 text-sm ${values[mobilePlan] === false ? "text-slate-400" : "text-slate-700"}`}>
                <Icon className="h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                {label}
              </span>
              <span className="shrink-0 text-right">
                <Value value={values[mobilePlan]} soon={soon} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-5 text-center text-xs text-slate-500">
        “Em breve”: recurso em desenvolvimento, ainda não disponível para uso.
      </p>
    </Reveal>
  );
}
