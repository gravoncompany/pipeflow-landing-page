import { ArrowRight, BadgePercent, Info } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { CopyCoupon } from "../ui/CopyCoupon";
import { promo } from "../../config/plans";

const steps = [
  { title: "Copie o cupom", text: `Clique em “Copiar cupom” para copiar o código ${promo.code}.` },
  { title: "Abra o checkout", text: "Clique em “Resgatar 75% OFF” para ir ao checkout do Pipeflow Essencial." },
  { title: "Aplique o desconto", text: `Cole o código no campo “${promo.checkoutField}” e confira o valor antes de pagar.` },
];

export function Promo() {
  return (
    <section id="oferta" className="bg-white pt-20 lg:pt-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-navy-950 px-6 py-10 ring-1 ring-white/10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/40 blur-[110px]" aria-hidden />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-sky-400/20 blur-[100px]" aria-hidden />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[.14em] text-brand-300 ring-1 ring-brand-400/30">
                  <BadgePercent className="h-4 w-4" aria-hidden /> Exclusivo do Pipeflow Essencial
                </span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  <span className="text-gradient">75% OFF</span> no primeiro mês
                </h2>
                <p className="mt-5 text-lg text-slate-200 sm:text-xl">
                  De <s className="text-slate-400">{promo.regularPrice}</s> por{" "}
                  <strong className="font-display text-2xl font-extrabold text-white sm:text-3xl">{promo.firstMonthPrice}</strong> no primeiro mês.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
                  Após o primeiro mês, a assinatura será renovada por {promo.regularPrice}/mês. A promoção é exclusiva do plano Pipeflow Essencial.
                </p>

                <ol className="mt-8 space-y-4">
                  {steps.map((s, i) => (
                    <li key={s.title} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500 font-display text-sm font-bold text-white">{i + 1}</span>
                      <div>
                        <p className="font-semibold text-white">{s.title}</p>
                        <p className="text-sm leading-relaxed text-slate-400">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl bg-white/[.04] p-6 ring-1 ring-white/10 backdrop-blur sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">Seu cupom</p>
                <div className="mt-4">
                  <CopyCoupon code={promo.code} />
                </div>
                <a
                  href={promo.checkout}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-base font-bold text-white shadow-glow transition-all hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300 active:scale-[.98]"
                >
                  Resgatar 75% OFF
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </a>
                <p className="mt-4 text-center text-sm text-slate-300">
                  No checkout, cole o cupom no campo <strong className="text-white">“{promo.checkoutField}”</strong>.
                </p>
                <p className="mt-5 flex items-start gap-2 rounded-xl bg-white/5 p-3 text-xs leading-relaxed text-slate-400 ring-1 ring-white/10">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" aria-hidden />
                  <span>
                    {promo.firstMonthPrice} é o valor do plano no primeiro mês com o cupom, válido somente na primeira cobrança. {promo.feeNote}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
