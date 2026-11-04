# Pipeflow — Landing Page

Landing page do Pipeflow CRM. Projeto independente do CRM (React + Vite + TypeScript + Tailwind CSS).

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera dist/
npm run preview    # pré-visualiza o build em http://localhost:4173
```

## Onde editar

- `src/config/site.ts` — WhatsApp, menu e rodapé.
- `src/config/plans.ts` — planos, preços, links da Cakto, mensagem do Enterprise e tabela de recursos.
- `src/components/sections/` — uma seção por arquivo, na ordem de `src/App.tsx`.
- `src/components/ui/` — componentes reutilizáveis (Button, SectionHeading, FeatureCard, Reveal, ScreenshotSlot...).
- `src/components/mockups/` — demonstrações ilustrativas da interface (dados fictícios).

## Capturas reais

As capturas ficam em `src/assets/screens/` e são configuradas em `src/config/screens.ts`
(título, texto alternativo, tamanho e lado em destaque na ampliação). Ao clicar, a imagem abre ampliada.

Telas atuais: Pipeline (apresentação inicial), Ficha do lead (Funil de vendas) e Chat Gravon IA (Inteligência artificial).

## Pendências antes de publicar

- Não há depoimentos, avaliações ou números de clientes na página — inclua apenas dados reais e autorizados.
