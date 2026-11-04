import { BadgePercent } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { CheckList } from "../ui/CheckList";
import { site } from "../../config/site";

export function Offer() {
  return (
    <section id="oferta" className="py-20 lg:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-navy-950 px-6 py-12 ring-1 ring-white/10 sm:px-12 lg:px-16 lg:py-16">
            <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/40 blur-[110px]" aria-hidden />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-sky-400/20 blur-[100px]" aria-hidden />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[.14em] text-brand-300 ring-1 ring-brand-400/30">
                  <BadgePercent className="h-4 w-4" aria-hidden /> Oferta de lançamento
                </span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Comece com <span className="text-gradient">{site.offer.discount}</span> {site.offer.period}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  Organize seu funil, centralize o WhatsApp e coloque a IA para trabalhar a favor do seu time pagando apenas 25% do valor no primeiro mês.
                </p>
                <div className="mt-8">
                  <CheckList
                    tone="dark"
                    items={["Funil de vendas com múltiplos funis", "Conversas do WhatsApp centralizadas", "IA para análise e qualificação de leads"]}
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-glow sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Primeiro mês</p>
                <p className="mt-3 font-display text-4xl font-extrabold text-navy-900 sm:text-5xl">{site.offer.firstMonthPrice}</p>
                <p className="font-display text-xl font-bold text-navy-900">75% de desconto</p>
                <p className="mt-2 text-sm text-slate-500">Depois, {site.offer.monthlyPrice}/mês</p>
                <div className="my-6 h-px bg-slate-100" />
                <Button href={site.cta.href} arrow className="w-full">{site.cta.primaryLabel}</Button>
                <p className="mt-4 text-xs leading-relaxed text-slate-500">{site.offer.terms}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
