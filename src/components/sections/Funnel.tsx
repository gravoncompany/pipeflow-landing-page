import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CheckList } from "../ui/CheckList";
import { ScreenshotSlot } from "../ui/ScreenshotSlot";

const stages = [
  { name: "Novo lead", desc: "Entrada por site, anúncios, WhatsApp ou integrações", w: "100%" },
  { name: "Contato", desc: "Primeiro atendimento e registro do histórico", w: "86%" },
  { name: "Qualificação", desc: "Perfil, necessidade e momento de compra", w: "72%" },
  { name: "Proposta", desc: "Negociação acompanhada etapa por etapa", w: "58%" },
  { name: "Fechamento", desc: "Venda concluída e próximo passo definido", w: "44%" },
];

export function Funnel() {
  return (
    <section id="funil" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Funil de vendas"
          title="Visualize cada oportunidade, do primeiro contato ao fechamento"
          description="Arraste os cards entre etapas, crie funis separados para produtos ou equipes e acompanhe cada negociação com histórico completo."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="min-w-0 space-y-3">
            {stages.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <div className="mx-auto" style={{ width: `max(${s.w}, 260px)`, maxWidth: "100%" }}>
                  <div className="group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-700 px-5 py-4 text-white shadow-card ring-1 ring-white/5 transition-transform hover:scale-[1.015]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500 font-display text-sm font-bold">{i + 1}</span>
                    <div className="min-w-0">
                      <p className="font-display font-bold">{s.name}</p>
                      <p className="text-xs leading-snug text-slate-300 sm:text-sm">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <CheckList
              items={[
                "Múltiplos funis para diferentes produtos, serviços ou equipes",
                "Etapas personalizáveis e movimentação simples entre colunas",
                "Histórico completo de interações em cada lead",
                "Origem e campanhas (UTMs) registradas automaticamente",
                "Notificações de novidades nos seus leads",
              ]}
            />
            <div className="mt-8">
              <ScreenshotSlot alt="Tela do funil de vendas do Pipeflow" label="Captura: tela do Pipeline" aspect="aspect-[16/9]" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
