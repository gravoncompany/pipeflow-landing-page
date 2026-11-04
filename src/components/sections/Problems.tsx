import { MessagesSquare, FileSpreadsheet, Clock3, EyeOff, Shuffle, UserX } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { FeatureCard } from "../ui/FeatureCard";

const problems = [
  { icon: MessagesSquare, title: "Conversas espalhadas", description: "Cada vendedor atende no próprio celular e o histórico do cliente se perde entre aparelhos e aplicativos." },
  { icon: FileSpreadsheet, title: "Planilhas que ninguém atualiza", description: "O controle comercial depende de planilhas manuais, sempre desatualizadas quando você mais precisa delas." },
  { icon: Clock3, title: "Leads esquecidos", description: "Sem lembretes e etapas claras, oportunidades ficam sem retorno e esfriam antes da proposta." },
  { icon: EyeOff, title: "Pouca visibilidade", description: "É difícil saber em que etapa cada negociação está e onde o funil está travando." },
  { icon: Shuffle, title: "Origem dos leads desconhecida", description: "Sem rastrear campanhas e canais, fica impossível saber qual investimento traz clientes." },
  { icon: UserX, title: "Qualificação no achismo", description: "O time gasta tempo com contatos sem perfil enquanto bons leads aguardam atendimento." },
];

export function Problems() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="O desafio"
          title={<>Vender ficou mais rápido. <br className="hidden sm:block" />A gestão comercial não acompanhou.</>}
          description="Se algum destes cenários parece familiar, o Pipeflow foi feito para você."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <FeatureCard key={p.title} {...p} delay={(i % 3) * 80} />
          ))}
        </div>
      </Container>
    </section>
  );
}
