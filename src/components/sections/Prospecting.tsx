import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CheckList } from "../ui/CheckList";
import { ProspectMock } from "../mockups/ProspectMock";

export function Prospecting() {
  return (
    <section id="prospeccao" className="py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Prospecção B2B"
            title="Encontre empresas e leve direto para o seu funil"
            description="Busque empresas por segmento e região, organize listas de prospecção e transforme contas em oportunidades sem copiar e colar dados."
          />
          <Reveal delay={120} className="mt-8">
            <CheckList
              items={[
                "Busca de empresas com filtros por segmento e localização",
                "Importação de listas para revisão antes de virar lead",
                "Envio das empresas selecionadas para o funil desejado",
                "Rascunhos de abordagem com IA para revisão do vendedor",
              ]}
            />
          </Reveal>
        </div>
        <Reveal delay={150}>
          <ProspectMock />
        </Reveal>
      </Container>
    </section>
  );
}
