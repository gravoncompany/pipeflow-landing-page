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
  nav: [
    { label: "Funil", href: "#funil" },
    { label: "WhatsApp", href: "#whatsapp" },
    { label: "IA", href: "#ia" },
    { label: "Prospecção B2B", href: "#prospeccao" },
    { label: "Dúvidas", href: "#faq" },
  ],
} as const;
