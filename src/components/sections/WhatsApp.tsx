import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CheckList } from "../ui/CheckList";
import { ChatMock } from "../mockups/ChatMock";

export function WhatsApp() {
  return (
    <section id="whatsapp" className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="WhatsApp integrado"
            title="Todas as conversas comerciais em um só lugar"
            description="Conecte o WhatsApp da empresa ao Pipeflow e acompanhe o histórico de cada contato junto ao card do lead, sem depender do celular de cada vendedor."
          />
          <Reveal delay={120} className="mt-8">
            <CheckList
              items={[
                "Mensagens organizadas por contato e vinculadas ao lead",
                "Histórico preservado mesmo quando o vendedor muda",
                "Mensagens de referência para identificar a campanha de origem",
                "Gestor com visão do atendimento do time",
              ]}
            />
          </Reveal>
        </div>
        <Reveal delay={150} className="relative">
          <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-br from-brand-100 to-transparent blur-2xl" aria-hidden />
          <div className="relative"><ChatMock /></div>
        </Reveal>
      </Container>
    </section>
  );
}
