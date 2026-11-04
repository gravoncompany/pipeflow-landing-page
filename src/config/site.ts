/**
 * Configuração central da landing page.
 * Troque os links de conversão aqui quando o canal definitivo estiver pronto
 * (ex.: link do WhatsApp comercial, formulário ou página de checkout).
 */
export const site = {
  name: "Pipeflow",
  cta: {
    primaryLabel: "Quero testar o Pipeflow",
    // TODO: substituir pelo link real de conversão (WhatsApp, formulário ou checkout).
    href: "#oferta",
  },
  offer: {
    discount: "75% OFF",
    period: "no primeiro mês",
    // TODO: confirmar regras comerciais antes da publicação.
    terms: "Condição válida para novas assinaturas. Consulte as regras da oferta com nosso time comercial.",
  },
  nav: [
    { label: "Funil", href: "#funil" },
    { label: "WhatsApp", href: "#whatsapp" },
    { label: "IA", href: "#ia" },
    { label: "Prospecção B2B", href: "#prospeccao" },
    { label: "Dúvidas", href: "#faq" },
  ],
} as const;
