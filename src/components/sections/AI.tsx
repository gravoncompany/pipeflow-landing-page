import { Brain, ListChecks, BookOpen, Bot } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ScreenshotSlot } from "../ui/ScreenshotSlot";
import { screens } from "../../config/screens";

const items = [
  { icon: Brain, title: "Análise de conversas", text: "A IA lê as conversas do WhatsApp e destaca sinais reais de interesse, sempre com o trecho que comprova." },
  { icon: ListChecks, title: "Qualificação com revisão", text: "Sugere etiqueta, etapa e anotações. Nada muda no lead sem a confirmação do seu time." },
  { icon: BookOpen, title: "Base de conhecimento", text: "Cadastre produtos, preços e processos para que as respostas usem as informações da sua empresa." },
  { icon: Bot, title: "Assistente comercial", text: "Um agente por funil, desativado por padrão, com transferência para atendimento humano quando necessário." },
];

export function AI() {
  return (
    <section id="ia" className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-brand-500/20 blur-[120px]" aria-hidden />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <ScreenshotSlot screen={screens.chatPipeflowIA} tone="dark" />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            tone="dark"
            eyebrow="Inteligência artificial"
            title={<>IA que analisa, sugere e <span className="text-gradient">deixa a decisão com você</span></>}
            description="Use a Pipeflow IA para entender cada conversa, priorizar leads com mais aderência e ganhar tempo no dia a dia comercial."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/20">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
