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

- `src/config/site.ts` — link do botão de conversão, textos da oferta e menu.
- `src/components/sections/` — uma seção por arquivo, na ordem de `src/App.tsx`.
- `src/components/ui/` — componentes reutilizáveis (Button, SectionHeading, FeatureCard, Reveal, ScreenshotSlot...).
- `src/components/mockups/` — demonstrações ilustrativas da interface (dados fictícios).

## Capturas reais

Salve as imagens em `public/screenshots/` e passe `src` para o `ScreenshotSlot`
correspondente, por exemplo em `src/components/sections/Funnel.tsx`:

```tsx
<ScreenshotSlot src="/screenshots/pipeline.png" alt="Tela do funil de vendas do Pipeflow" label="..." />
```

Espaços reservados atuais: tela do Pipeline (Funil), ficha do lead e análise de IA (Diferenciais).

## Pendências antes de publicar

- Definir o link real de conversão (`site.cta.href`).
- Confirmar regras comerciais da oferta de 75% OFF (`site.offer.terms` e FAQ).
- Substituir os espaços reservados pelas capturas reais.
- Não há depoimentos, avaliações ou números de clientes na página — inclua apenas dados reais e autorizados.
