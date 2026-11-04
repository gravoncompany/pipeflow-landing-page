/**
 * Configuração central da landing page.
 * Troque os links de conversão aqui quando o canal definitivo estiver pronto
 * (ex.: link do WhatsApp comercial, formulário ou página de checkout).
 */
export const site = {
  name: "Pipeflow",
  cta: {
    primaryLabel: "Quero testar o Pipeflow",
    href: "https://wa.me/5551995486303",
  },
  /** WhatsApp comercial (mesmo número do botão de conversão). */
  whatsapp: {
    href: "https://wa.me/5551995486303",
    label: "(51) 99548-6303",
  },
  description:
    "CRM de gestão comercial com inteligência artificial: funil de vendas, WhatsApp centralizado, qualificação de leads e prospecção B2B em um só lugar.",
  developer: "Gravon Company",
  nav: [
    { label: "Funil", href: "#funil" },
    { label: "WhatsApp", href: "#whatsapp" },
    { label: "IA", href: "#ia" },
    { label: "Prospecção B2B", href: "#prospeccao" },
    { label: "Planos", href: "#planos" },
    { label: "Dúvidas", href: "#faq" },
  ],
  footerNav: [
    { label: "Funil de vendas", href: "#funil" },
    { label: "WhatsApp", href: "#whatsapp" },
    { label: "Inteligência artificial", href: "#ia" },
    { label: "Prospecção B2B", href: "#prospeccao" },
    { label: "Diferenciais", href: "#beneficios" },
    { label: "Oferta 75% OFF", href: "#oferta" },
    { label: "Planos", href: "#planos" },
    { label: "Perguntas frequentes", href: "#faq" },
  ],
} as const;
