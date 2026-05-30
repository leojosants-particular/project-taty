# LP Taty — Beleza & Confeitaria · Design Doc

**Data:** 2026-05-30
**Status:** Aprovado para planejamento de implementação
**Tipo:** Landing page (single page), estática, sem banco de dados (1ª fase)

---

## 1. Contexto e objetivo

Cliente ("Taty") atua em **atividades diversas — manicure, pedicure e confeitaria** — e trabalha **de casa**, sem espaço comercial físico. Ela não tem referência de como quer o site; partimos do zero.

Objetivo da LP (validado): **equilíbrio entre vitrine, contato e presença** — mostrar os trabalhos, gerar contato/agendamento e servir como endereço profissional na internet (bio do Instagram).

**Critérios de sucesso:**
- Visitante entende em segundos que é uma profissional com dois talentos (beleza + doçura), atendendo de casa com hora marcada.
- Caminho de conversão claro e sem atrito → WhatsApp (principal) e Instagram (vitrine social).
- Visual com identidade própria, responsivo mobile-first, seguindo boas práticas de mercado (performance, acessibilidade, SEO local).

**Materiais existentes da cliente:** fotos reais dos trabalhos; Instagram ativo.
**Não existe ainda:** nome de marca definido, logo. → conceito de marca será proposto e escolhido durante a implementação.

---

## 2. Abordagem escolhida

**Marca-mãe única, dois "universos" (Abordagem A).** Uma identidade visual única, com os serviços organizados em dois blocos claros — **Beleza** (manicure, pedicure) e **Confeitaria** (doces/encomendas) — dentro de uma página coesa. Une os dois mundos ("uma coisa só") sem confundir o que é oferecido.

**Fio condutor de identidade:** *capricho artesanal feito à mão, com carinho, em casa* — comum a unhas e doces.

**Conceitos de nome (escolher 1 na implementação — pontos de partida):**
1. **Atelier Taty** — "atelier" cabe em unhas e doces (ofício artesanal).
2. **Doce Capricho** — doce (confeitaria) + capricho (unhas).
3. **Taty • Beleza & Doçura** — explica os dois mundos no nome.

---

## 3. Arquitetura de informação (seções da página)

Single page, mobile-first, rolagem vertical com navegação por âncora.

1. **Header fixo** — logo/nome + menu (Início · Serviços · Galeria · Contato) + botão WhatsApp sempre visível.
2. **Hero** — nome da marca, frase-conceito (ex: "Beleza nas unhas, doçura na mesa"), imagem de destaque, CTA WhatsApp + selo "Atendimento em casa, com hora marcada".
3. **Sobre a Taty** — texto curto e afetivo (quem é, trabalha de casa, capricho artesanal). Constrói confiança.
4. **Os dois universos** — núcleo da abordagem A. Dois blocos:
   - 💅 **Beleza** (manicure, pedicure) — CTA "Agendar unhas".
   - 🧁 **Confeitaria** (doces, encomendas) — CTA "Encomendar doces".
   - Cada CTA abre o WhatsApp com mensagem pré-preenchida específica.
5. **Galeria/Portfólio** — grid de fotos reais com filtro por categoria (Tudo · Unhas · Doces).
6. **Depoimentos** — 2-3 cards (ativável quando houver conteúdo).
7. **Como funciona** — passo a passo: escolha → WhatsApp → agenda/encomenda → atendimento em casa.
8. **Contato / CTA final** — WhatsApp (principal) + Instagram (vitrine) + horários + região aproximada (bairro, sem endereço exato).
9. **Footer** — nome, redes, créditos, ano.

---

## 4. Sistema visual (design system)

> **Nota:** valores de cor abaixo são ponto de partida. A paleta final será afinada **com o site visível**, avaliada visualmente pela cliente/usuário — não no papel.

**Direção:** "Artesanal afetivo" — delicado com toque sofisticado.

**Paleta (ponto de partida, como CSS variables no padrão shadcn):**
- `background` — creme/off-white quente (~#FDF8F4)
- `primary` — rosa-queimado/terracota suave (~#C97C6D)
- `secondary` — rosé nude (~#E9C9C0)
- `accent` — dourado suave (~#C9A24B)
- `foreground` — marrom-acinzentado escuro (~#3A2E2A)
- Contraste mínimo AA, validado no código.

**Tipografia (Google Fonts, `font-display: swap`):**
- Títulos: serifada com charme (*Fraunces* ou *Playfair Display*).
- Texto: sans limpa e legível no mobile (*Inter* ou *Nunito Sans*).

**Linguagem visual:** cantos arredondados generosos (`rounded-2xl`), sombras suaves, muito respiro; detalhe gráfico recorrente em dourado amarrando os dois universos. Ícones: Lucide.

**Componentes shadcn/ui:** `Button`, `Card`, `Badge`, `Separator`, `Accordion`, `Sheet` (menu mobile), `Tabs`/`ToggleGroup` (filtro galeria), `Dialog` (lightbox, opcional), `Form` (agendamento).

---

## 5. Arquitetura técnica

**Stack:** Vite + React + TypeScript · Tailwind · shadcn/ui · **react-hook-form + Zod** · Lucide.
**Justificativa Vite:** LP estática sem DB — mais leve, build rápido, deploy simples. SEO coberto por meta tags. Caminho de migração para Next.js/CMS preservado pelas interfaces tipadas.

**Estrutura de pastas:**
```
src/
  components/
    ui/              # shadcn (button, card, sheet, tabs, dialog, form...)
    layout/          # Header, Footer
    sections/        # Hero, Sobre, Universos, Galeria, ComoFunciona, Contato
    shared/          # WhatsAppButton, SectionTitle, etc.
  features/
    booking/         # form RHF+Zod -> gera link wa.me (sem backend)
  content/           # DADOS ESTÁTICOS (substitui o "DB")
    site.ts          # nome, tagline, contatos, horários, redes
    services.ts      # serviços dos 2 universos
    gallery.ts       # itens da galeria (categoria + img + alt)
    testimonials.ts  # depoimentos
  lib/               # utils, helper do whatsapp, schemas zod
  styles/            # tokens/tema (CSS vars no padrão shadcn)
  App.tsx  main.tsx
```

**Substituição do DB:** todo conteúdo vive em `content/*.ts` tipados (interfaces `Service`, `GalleryItem`, `Testimonial`, etc.). Editar conteúdo = editar array tipado, sem tocar em componente. Futuro DB/CMS: trocar apenas a fonte dos dados.

**Camada WhatsApp:** helper `buildWhatsAppLink({ phone, message })` centraliza os links; cada CTA passa sua mensagem.

**Agendamento rápido (sem backend):** mini-form com react-hook-form + validação Zod (nome, serviço, preferência de data). Não envia para servidor — **monta a mensagem do WhatsApp e abre o `wa.me`**.

---

## 6. Responsividade, acessibilidade, SEO e deploy

**Mobile-first:** estilos a partir do celular; breakpoints Tailwind adaptam pra cima. Dois universos e galeria empilham no mobile, lado a lado no desktop. Header com `Sheet` no mobile; botão WhatsApp sempre acessível (sticky). Imagens responsivas, `loading="lazy"`, `width/height` definidos, WebP.

**Acessibilidade:** contraste AA; HTML semântico (`header/main/section/nav/footer`); foco visível; navegação por teclado; `alt` descritivo em toda foto; `aria-label` em botões de ícone.

**SEO local:** meta tags + Open Graph/Twitter Card; `title`/`description` com palavras-chave e região; JSON-LD `LocalBusiness` (horários, área de atendimento); `favicon`, `sitemap.xml`, `robots.txt`.

**Deploy:** Vercel ou Netlify (grátis, deploy automático via Git, HTTPS, domínio próprio depois). Build estático Vite.

---

## 7. Estratégia de testes — TDD OBRIGATÓRIO

**Disciplina (regra do projeto):** TDD obrigatório — **unidade, integração e E2E**, sempre que pertinente. Teste primeiro: red → green → refactor. Não implementar antes do teste que falha.

- **Unidade (Vitest + RTL):** `buildWhatsAppLink` (encoding correto da mensagem); schemas Zod do agendamento (válido/inválido); helpers/utils; render isolado de componentes com dados de `content/`.
- **Integração (Vitest + RTL):** form de agendamento ponta-a-ponta no front (preencher → validar → gerar link correto); filtro da galeria (Tabs → grid filtra); menu mobile (`Sheet` abre/fecha); CTAs disparam o `wa.me` certo.
- **E2E (Playwright):** fluxos críticos no navegador real (mobile + desktop) — Hero CTA abre WhatsApp; "Agendar unhas"/"Encomendar doces" com mensagem correta; filtrar galeria; abrir menu e navegar por âncora; agendamento rápido válido e inválido.
- **Acessibilidade:** `eslint-plugin-jsx-a11y` + Lighthouse/axe antes de fechar cada entrega.

Sem E2E desnecessário fora dos fluxos críticos (YAGNI). Cobertura de agendamento online/backend entra se/quando essa fase existir.

---

## 8. Fora de escopo (1ª fase)

- Banco de dados / CMS.
- Agendamento online com calendário/backend.
- Pagamentos.
- Blog.
- Autenticação / área logada.

Interfaces tipadas em `content/` preservam o caminho para essas evoluções.
