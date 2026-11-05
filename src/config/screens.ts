import pipeline from "../assets/screens/pipeline.webp";
import fichaDoLead from "../assets/screens/ficha-do-lead.webp";
import chatPipeflowIA from "../assets/screens/chat-pipeflow-ia.webp";

export type Screen = {
  src: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  /** Onde está o conteúdo principal; a visualização ampliada no celular começa por esse lado. */
  focus?: "left" | "right";
};

/** Capturas demonstrativas do Pipeflow (dados fictícios já presentes nas imagens). */
export const screens = {
  pipeline: {
    src: pipeline,
    width: 1672,
    height: 941,
    title: "CRM · Kanban do funil principal",
    alt: "Kanban do CRM no PipeFlow CRM com o funil principal, indicadores de leads, fechados, valor fechado e potencial, e as colunas Lead Novo, Tentando Contato, Contato Realizado, Retornar Mais Tarde e Qualificação com cards de leads demonstrativos",
  },
  fichaDoLead: {
    src: fichaDoLead,
    width: 1672,
    height: 941,
    title: "Ficha do lead",
    focus: "right",
    alt: "Kanban do CRM no PipeFlow CRM com o painel lateral Dados do lead aberto, mostrando nome, empresa, WhatsApp, e-mail, faturamento, origem, serviço de interesse, valor potencial, status, etapa do funil, etiquetas e origem da campanha (UTM) de um lead demonstrativo",
  },
  chatPipeflowIA: {
    src: chatPipeflowIA,
    width: 2000,
    height: 1129,
    title: "Chat Pipeflow IA",
    alt: "Tela do Chat Pipeflow IA no PipeFlow CRM explicando como ajuda: consultar a base de conhecimento comercial, salvar informações, consultar horários e agendar reuniões, preparar mensagens para leads e analisar informações compartilhadas",
  },
} satisfies Record<string, Screen>;
