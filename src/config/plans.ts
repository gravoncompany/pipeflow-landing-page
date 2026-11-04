import type { LucideIcon } from "lucide-react";
import {
  BarChart3, Users, Filter, MessageCircle, Sparkles, ScanSearch, Workflow, Bot, BookOpen, FileBarChart,
  MapPin, Building2, Mail, Repeat, CalendarDays, Target, TrendingUp, Landmark, FolderKanban, Megaphone,
  Radar, LineChart, Plug, Compass, SlidersHorizontal,
} from "lucide-react";

export type PlanId = "essencial" | "profissional" | "enterprise";

/** true = incluído · false = não incluído · string = limite/nível do recurso. */
export type FeatureValue = boolean | string;

export type Feature = {
  label: string;
  icon: LucideIcon;
  values: Record<PlanId, FeatureValue>;
  /** Recurso ainda em desenvolvimento no CRM: aparece como "Em breve", nunca como incluído. */
  soon?: boolean;
};

/** Mensagem de referência do Enterprise — usar exatamente este texto (reconhecido pelo Pipeflow). */
export const ENTERPRISE_WHATSAPP_MESSAGE =
  "Olá! Vim pela landing page do Pipeflow CRM e tenho interesse no plano Enterprise. Gostaria de conversar com um especialista para conhecer as soluções disponíveis para minha empresa.";

export const ENTERPRISE_WHATSAPP_URL = `https://wa.me/5551995486303?text=${encodeURIComponent(ENTERPRISE_WHATSAPP_MESSAGE)}`;

export type Plan = {
  id: PlanId;
  name: string;
  price: string | null;
  period?: string;
  description: string;
  cta: { label: string; href: string };
  popular?: boolean;
  highlightsTitle: string;
  highlights: string[];
  extra?: { title: string; text: string };
};

export const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    price: "R$ 197",
    period: "/mês",
    description:
      "Ideal para empresas que desejam organizar seus processos comerciais, centralizar leads, integrar o WhatsApp e utilizar inteligência artificial para qualificação e acompanhamento de oportunidades.",
    cta: { label: "Assinar agora", href: "https://pay.cakto.com.br/hs7d47y_1279991" },
    highlightsTitle: "Principais recursos",
    highlights: [
      "Dashboard com gráficos",
      "Gestão de leads e clientes",
      "Até 2 funis de vendas",
      "1 conexão de WhatsApp",
      "Qualificação de leads com Gravon IA",
      "Chat Gravon IA e base de conhecimento",
      "Integração com Google Agenda",
    ],
  },
  {
    id: "profissional",
    name: "Profissional",
    price: "R$ 347",
    period: "/mês",
    popular: true,
    description:
      "Ideal para empresas que desejam automatizar a operação comercial, prospectar novos clientes, utilizar campanhas de e-mail marketing, integrar campanhas de tráfego pago e acompanhar resultados com relatórios avançados.",
    cta: { label: "Assinar agora", href: "https://pay.cakto.com.br/oijarwd" },
    highlightsTitle: "Tudo do Essencial, mais:",
    highlights: [
      "Até 10 funis e até 3 conexões de WhatsApp",
      "Prospecção B2B com Google Maps",
      "Consulta de CNPJ e DeskData",
      "Campanhas de e-mail marketing",
      "Follow-up automatizado com IA",
      "Integração com Meta Ads e análise de tráfego pago",
      "Relatórios, metas e análises avançados",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    description:
      "Solução personalizada para empresas que precisam de acompanhamento estratégico contínuo, integrações específicas e otimização dos processos comerciais.",
    cta: { label: "Falar com especialista", href: ENTERPRISE_WHATSAPP_URL },
    highlightsTitle: "Tudo do Profissional, mais:",
    highlights: [
      "Funis, conexões e recursos personalizados",
      "Integrações personalizadas",
      "Acompanhamento estratégico mensal",
      "Ajustes e otimizações durante o mês",
    ],
    extra: {
      title: "Acompanhamento durante todo o mês",
      text: "Análise da operação, ajustes no CRM, otimização de automações e orientação estratégica contínua.",
    },
  },
];

const all = (v: FeatureValue = true) => ({ essencial: v, profissional: v, enterprise: v });
const pro = { essencial: false, profissional: true, enterprise: true };
const tiers = (e: string, p: string, x: string) => ({ essencial: e, profissional: p, enterprise: x });

export const features: Feature[] = [
  { label: "Dashboard com gráficos", icon: BarChart3, values: all() },
  { label: "Gestão de leads e clientes", icon: Users, values: all() },
  { label: "Funis de vendas", icon: Filter, values: tiers("Até 2", "Até 10", "Personalizado") },
  { label: "Integração com WhatsApp", icon: MessageCircle, values: tiers("1 conexão", "Até 3 conexões", "Personalizado") },
  { label: "Qualificação de leads com Gravon IA", icon: Sparkles, values: all() },
  { label: "Análise de atendimento com IA", icon: ScanSearch, values: tiers("Básica", "Avançada", "Personalizada") },
  { label: "Automação de WhatsApp", icon: Workflow, values: tiers("Básica", "Avançada", "Personalizada") },
  { label: "Chat Gravon IA", icon: Bot, values: all() },
  { label: "Base de conhecimento", icon: BookOpen, values: all() },
  { label: "Relatórios comerciais", icon: FileBarChart, values: tiers("Básicos", "Avançados", "Personalizados") },
  { label: "Prospecção B2B com Google Maps", icon: MapPin, values: pro },
  { label: "Consulta de CNPJ e DeskData", icon: Building2, values: pro },
  { label: "Campanhas de e-mail marketing", icon: Mail, values: pro },
  { label: "Follow-up automatizado com IA", icon: Repeat, values: pro },
  { label: "Integração com Google Agenda", icon: CalendarDays, values: all() },
  { label: "Metas comerciais", icon: Target, values: tiers("Básicas", "Avançadas", "Personalizadas") },
  { label: "Projeções comerciais", icon: TrendingUp, values: pro },
  { label: "Financeiro com Open Finance", icon: Landmark, values: pro },
  { label: "Gestão de projetos", icon: FolderKanban, values: pro },
  { label: "Integração com Meta Ads", icon: Megaphone, values: pro },
  // Na verificação do CRM, a API de Conversões da Meta só envia eventos de teste: exibida como "Em breve".
  { label: "Rastreamento pela API da Meta", icon: Radar, values: pro, soon: true },
  { label: "Análise de campanhas de tráfego pago", icon: LineChart, values: pro },
  { label: "Integrações personalizadas", icon: Plug, values: { essencial: false, profissional: false, enterprise: true } },
  { label: "Acompanhamento estratégico mensal", icon: Compass, values: { essencial: false, profissional: false, enterprise: true } },
  { label: "Ajustes e otimizações durante o mês", icon: SlidersHorizontal, values: { essencial: false, profissional: false, enterprise: true } },
];
