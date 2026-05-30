import type { SiteInfo } from "./types"

// Contato vem de variáveis de ambiente (.env, prefixo VITE_); fallback só para
// ambientes sem .env. buildWhatsAppLink normaliza o telefone removendo não-dígitos.
const env = import.meta.env

export const site: SiteInfo = {
  brandName: "Atelier Taty",
  tagline: "Beleza nas unhas, doçura na mesa.",
  heroSubtitle:
    "Manicure, pedicure e doces artesanais — atendimento em casa, com hora marcada.",
  whatsapp: env.VITE_WHATSAPP ?? "5511999999999",
  instagram: {
    handle: env.VITE_INSTAGRAM_HANDLE ?? "@ateliertaty",
    url: env.VITE_INSTAGRAM_URL ?? "https://instagram.com/ateliertaty",
  },
  region: "Atendimento em casa, com hora marcada",
  hours: ["Seg a Sex: 9h às 19h", "Sáb: 9h às 14h"],
}
