# Atelier Taty — Beleza & Doçura 🌸🧁

> Landing page de uma profissional que une **manicure, pedicure e confeitaria**, atendendo de casa com hora marcada. Uma marca, dois universos: beleza nas unhas, doçura na mesa.
>
> **README vivo:** este arquivo é a apresentação da LP e é atualizado conforme o projeto avança. A seção _Andamento_ reflete o estado real a cada etapa.

---

## ✨ Sobre o projeto

Uma landing page única, responsiva e mobile-first, que apresenta os dois talentos da Taty de forma coesa e converte visitantes em contatos via **WhatsApp** (principal) e **Instagram** (vitrine social). Sem banco de dados nesta primeira fase — todo o conteúdo vive em arquivos tipados.

- **Abordagem:** marca-mãe única com dois universos (Beleza · Confeitaria)
- **Identidade visual:** "artesanal afetivo" — delicado com toque sofisticado
- **Conversão:** botões de WhatsApp com mensagem pré-preenchida + mini-formulário de agendamento rápido (sem backend)

## 🧰 Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (componentes)
- **react-hook-form + Zod** (validação do agendamento rápido)
- **Lucide** (ícones)
- **Vitest + Testing Library** (unidade/integração) · **Playwright** (E2E)
- Gerenciador de pacotes: **pnpm**

## 🚀 Como rodar

```bash
pnpm install      # instala dependências
pnpm dev          # ambiente de desenvolvimento
pnpm build        # build de produção
pnpm preview      # pré-visualiza o build
pnpm test         # testes de unidade/integração (watch)
pnpm test:run     # testes uma vez (CI)
pnpm e2e          # testes end-to-end (Playwright)
```

## 🧪 Qualidade

TDD é obrigatório no projeto (unidade, integração e E2E). Acessibilidade (contraste AA, HTML semântico) e SEO local fazem parte do escopo.

## 📍 Andamento

- [x] Brainstorming + documento de design (`docs/superpowers/specs/`)
- [x] Fundação do projeto (Vite + React + TS + Tailwind v4 + shadcn + testes)
- [ ] Plano de implementação (`docs/superpowers/plans/`)
- [ ] Camada de conteúdo + helper de WhatsApp
- [ ] Agendamento rápido (RHF + Zod)
- [ ] Layout (Header/Footer) e seções da página
- [ ] Galeria com filtro
- [ ] SEO, acessibilidade e deploy

## 📄 Documentação

- Design: [docs/superpowers/specs/2026-05-30-lp-taty-design.md](docs/superpowers/specs/2026-05-30-lp-taty-design.md)

---

Feito com carinho. 💅🍰
