# CLAUDE.md — Atelier Taty (LP)

Landing page única (single page, mobile-first, sem DB) de uma profissional que une **manicure/pedicure (Beleza)** e **confeitaria (Confeitaria)**, atendendo de casa. Uma marca, dois universos. Conversão por **WhatsApp** (principal) + **Instagram**.

## Stack

Vite + React 19 + TS · Tailwind v4 · shadcn/ui · `motion` · react-hook-form + Zod · Lucide. Testes: Vitest + Testing Library (unidade/integração) e Playwright (E2E). **Gerenciador: pnpm.**

## Comandos

```bash
pnpm dev          # desenvolvimento
pnpm test:run     # testes unidade/integração (uma vez)
pnpm e2e          # testes E2E (Playwright)
pnpm lint         # ESLint (+ jsx-a11y)
pnpm build        # build de produção (tsc + vite)
```

## Regras do projeto (obrigatórias)

- **pnpm** sempre — nunca npm/yarn.
- **TDD obrigatório** (unidade, integração e E2E quando pertinente): teste vermelho → mínimo → verde → refatora.
- **Mobile-first** e **acessibilidade AA** (HTML semântico, aria, foco, `prefers-reduced-motion`).
- **Sem DB:** todo conteúdo em `src/content/*.ts` tipados.
- `noUnusedLocals: true` — imports sem uso quebram o build.
- **README é vivo:** atualize a seção "Andamento" ao concluir algo.
- Cores são ponto de partida (tokens em `src/index.css`) — **paleta afinada com o site visível**, não invente cores fora dos tokens.
- **Não criar branches git sem permissão explícita.**

## Estrutura

`src/content` (dados tipados) · `src/lib` (whatsapp, booking-schema) · `src/components/{ui,shared,layout,sections}` · `src/features/booking` · `e2e` (Playwright). Docs em `docs/superpowers/` (spec + plano).

## Agentes especialistas (delegue quando pertinente)

- **frontend-specialist** — implementar/alterar UI, seções, componentes, animações, estilos (sempre em TDD). Use para qualquer trabalho de React/Tailwind/shadcn/motion.
- **a11y-reviewer** — revisar acessibilidade após criar/alterar UI (somente análise; não edita).
- **content-guardian** — editar `src/content/*.ts` (serviços, galeria, depoimentos, marca) e auditar pendências de publicação (WhatsApp/Instagram reais, og-image, fotos da galeria).

Para revisão geral de qualidade de código, use o agente `superpowers:code-reviewer`.

## Antes de publicar (pendências de conteúdo real)

WhatsApp e Instagram reais em `src/content/site.ts` · fotos em `public/gallery/` · `public/og-image.jpg` (1200×630) · `telephone`/`url` no JSON-LD de `index.html`.
