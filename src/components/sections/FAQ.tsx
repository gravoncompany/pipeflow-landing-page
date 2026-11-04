import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const faqs = [
  { q: "O que é o Pipeflow CRM?", a: "É uma plataforma de gestão comercial que reúne funil de vendas, conversas de WhatsApp, inteligência artificial para análise e qualificação de leads e prospecção B2B em um só lugar." },
  { q: "Preciso instalar alguma coisa?", a: "Não. O Pipeflow funciona direto no navegador, no computador ou no celular." },
  { q: "Como funciona a integração com o WhatsApp?", a: "Você conecta o número comercial da empresa e as conversas passam a ficar organizadas por contato, vinculadas ao lead correspondente no funil." },
  { q: "A inteligência artificial altera meus leads sozinha?", a: "Não. A IA analisa as conversas e sugere ações, como mudar de etapa ou adicionar uma etiqueta. A alteração só acontece depois da confirmação de alguém do seu time." },
  { q: "Como funcionam as assinaturas do Pipeflow?", a: "O Pipeflow é contratado por assinatura mensal. O plano Essencial custa R$ 197/mês e o Profissional, R$ 347/mês. A contratação é feita pelo botão “Assinar agora” do plano escolhido." },
  { q: "Como usar o cupom PIPEFLOW75?", a: "Copie o código PIPEFLOW75 na seção da oferta e clique em “Resgatar 75% OFF” para abrir o checkout do plano Essencial. No checkout, cole o código no campo “Código de desconto” e confira o valor antes de confirmar. O cupom é exclusivo do plano Pipeflow Essencial." },
  { q: "O desconto de 75% vale para todas as mensalidades?", a: "Não. O desconto vale somente na primeira cobrança: o plano sai de R$ 197 por R$ 49,25 no primeiro mês e, depois, a assinatura é renovada por R$ 197/mês. O valor final pode incluir taxas apresentadas pela Cakto antes da confirmação do pagamento." },
  { q: "Qual é a diferença entre os planos?", a: "Os recursos e limites variam conforme o plano contratado. O Essencial organiza leads, funis, WhatsApp e IA para qualificação; o Profissional acrescenta prospecção B2B, e-mail marketing, follow-up automatizado, integração com Meta Ads e relatórios avançados. Veja o comparativo completo na seção Planos." },
  { q: "Como funciona o plano Enterprise?", a: "O Enterprise tem condições personalizadas e valor sob consulta. Ele inclui integrações específicas e acompanhamento durante todo o mês, com análise da operação, ajustes no CRM, otimização de automações e orientação estratégica. Fale com um especialista pelo WhatsApp." },
  { q: "Posso ter mais de um funil de vendas?", a: "Sim. O Essencial permite até 2 funis, o Profissional até 10 e o Enterprise tem quantidade personalizada, cada funil com suas próprias etapas." },
  { q: "Consigo receber leads de formulários e anúncios?", a: "Sim. É possível receber leads por integrações como o Zapier, mantendo a origem e os parâmetros de campanha (UTMs) de cada contato." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-slate-50 py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <SectionHeading align="left" eyebrow="Dúvidas frequentes" title="Perguntas frequentes" description="Ainda ficou com alguma dúvida? Fale com nosso time e descubra se o Pipeflow é ideal para a sua operação." />
        <div className="divide-y divide-slate-200 rounded-2xl bg-white px-5 shadow-card ring-1 ring-navy-900/5 sm:px-7">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 40}>
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-display text-base font-bold text-navy-900 sm:text-lg">{f.q}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "rotate-45 bg-brand-500 text-white" : "bg-brand-50 text-brand-600"}`}>
                      <Plus className="h-4 w-4" aria-hidden />
                    </span>
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <p className="overflow-hidden text-[15px] leading-relaxed text-slate-600">{f.a}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
