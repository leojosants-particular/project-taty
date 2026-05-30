import type { Service } from "./types"

export const services: Service[] = [
  {
    id: "beleza",
    category: "beleza",
    title: "Beleza",
    description:
      "Mãos e pés bem cuidados, com capricho e higiene. Esmaltação caprichada que dura.",
    items: ["Manicure", "Pedicure", "Esmaltação em gel", "Spa dos pés"],
    ctaLabel: "Agendar unhas",
    whatsappMessage: "Oi, Taty! Gostaria de agendar um horário para as unhas.",
  },
  {
    id: "confeitaria",
    category: "confeitaria",
    title: "Confeitaria",
    description:
      "Doces feitos à mão, com carinho, para adoçar seus momentos especiais.",
    items: ["Bolos", "Doces para festa", "Encomendas personalizadas"],
    ctaLabel: "Encomendar doces",
    whatsappMessage: "Oi, Taty! Gostaria de fazer uma encomenda de doces.",
  },
]
