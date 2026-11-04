import pipeline from "../assets/screens/pipeline.webp";
import fichaDoLead from "../assets/screens/ficha-do-lead.webp";
import chatGravonIA from "../assets/screens/chat-gravon-ia.webp";

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
    width: 1670,
    height: 942,
    title: "Pipeline · Funil principal",
    alt: "Tela do Pipeline do PipeFlow CRM com as colunas Lead Novo, Tentando Contato, Contato Realizado, Retornar Mais Tarde e Qualificação, com cards de leads demonstrativos",
  },
  fichaDoLead: {
    src: fichaDoLead,
    width: 1672,
    height: 941,
    title: "Ficha do lead",
    focus: "right",
    alt: "Ficha do lead aberta no PipeFlow CRM com informações de contato, origem, faturamento, serviço de interesse, valor potencial, última atualização e controle da Gravon IA",
  },
  chatGravonIA: {
    src: chatGravonIA,
    width: 1670,
    height: 941,
    title: "Chat Gravon IA",
    alt: "Tela do Chat Gravon IA no PipeFlow CRM sugerindo uma resposta curta e profissional para um lead demonstrativo",
  },
} satisfies Record<string, Screen>;
