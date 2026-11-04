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
  offer: {
    discount: "75% OFF",
    period: "no primeiro mês",
    firstMonthPrice: "R$ 49,25",
    monthlyPrice: "R$ 197",
    terms: "75% de desconto no primeiro mês: R$ 49,25. A partir do segundo mês, R$ 197/mês.",
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
    { label: "Dúvidas", href: "#faq" },
  ],
  footerNav: [
    { label: "Funil de vendas", href: "#funil" },
    { label: "WhatsApp", href: "#whatsapp" },
    { label: "Inteligência artificial", href: "#ia" },
    { label: "Prospecção B2B", href: "#prospeccao" },
    { label: "Diferenciais", href: "#beneficios" },
    { label: "Oferta", href: "#oferta" },
    { label: "Perguntas frequentes", href: "#faq" },
  ],
} as const;
