import { MessageCircle, Sparkles, Building2 } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { ScreenshotSlot } from "../ui/ScreenshotSlot";
import { screens } from "../../config/screens";
import { site } from "../../config/site";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-navy-950 pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-400/10 blur-[100px]" aria-hidden />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <a href="#oferta" className="inline-flex items-center gap-2 rounded-full bg-white/5 py-1.5 pl-1.5 pr-4 text-xs font-medium text-slate-300 ring-1 ring-white/10 transition hover:bg-white/10 sm:text-sm">
              <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-[11px] font-bold text-white">{site.offer.discount}</span>
              {site.offer.period} para novas assinaturas
            </a>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 text-[38px] font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[64px]">
              Seu time comercial em <span className="text-gradient">um só fluxo</span>, do primeiro contato ao fechamento.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              O Pipeflow reúne funil de vendas, conversas de WhatsApp, inteligência artificial para qualificar leads e prospecção B2B
              em uma plataforma pensada para quem vende todos os dias.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href={site.cta.href} arrow>{site.cta.primaryLabel}</Button>
            <Button href="#funil" variant="ghost-dark">Ver como funciona</Button>
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-brand-300" aria-hidden />WhatsApp integrado</li>
              <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-300" aria-hidden />IA aplicada a vendas</li>
              <li className="flex items-center gap-2"><Building2 className="h-4 w-4 text-brand-300" aria-hidden />Prospecção B2B</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto mt-14 max-w-6xl lg:mt-20">
          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 top-10 rounded-[40px] bg-brand-500/20 blur-3xl" aria-hidden />
          <div className="relative">
            <ScreenshotSlot screen={screens.pipeline} tone="dark" priority />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
