import { Layers, Smartphone, ShieldCheck, Plug, LineChart, Users, Zap, Lock } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { FeatureCard } from "../ui/FeatureCard";

const benefits = [
  { icon: Layers, title: "Tudo em uma plataforma", description: "Funil, WhatsApp, IA e prospecção sem precisar alternar entre ferramentas." },
  { icon: ShieldCheck, title: "Você no controle", description: "A IA sugere e o time confirma. Ações importantes ficam registradas no histórico." },
  { icon: Plug, title: "Integrações", description: "Receba leads de formulários e ferramentas via Zapier, com origem e campanha preservadas." },
  { icon: LineChart, title: "Visão de gestão", description: "Acompanhe o funil por etapa e por período para decidir com base no que está acontecendo." },
  { icon: Users, title: "Feito para equipes", description: "Funis por equipe ou produto e histórico compartilhado entre vendedores." },
  { icon: Smartphone, title: "Funciona no celular", description: "Interface responsiva para acompanhar leads e conversas de onde estiver." },
  { icon: Zap, title: "Implantação simples", description: "Comece com as etapas padrão e personalize o funil conforme o seu processo." },
  { icon: Lock, title: "Segurança e privacidade", description: "Acesso protegido e dados sensíveis tratados de forma restrita." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-slate-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher o Pipeflow"
          description="Uma ferramenta comercial completa, com tecnologia de ponta e simples de usar no dia a dia."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <FeatureCard key={b.title} {...b} delay={(i % 4) * 70} />
          ))}
        </div>
      </Container>
    </section>
  );
}
