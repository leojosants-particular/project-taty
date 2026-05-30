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
    whatsappMessage:
      "Oi, Taty! 😊 Vim pelo seu site e gostaria de agendar um horário para as unhas (manicure/pedicure). Quais dias e horários você tem disponíveis?",
  },
  {
    id: "confeitaria",
    category: "confeitaria",
    title: "Confeitaria",
    description:
      "Doces feitos à mão, com carinho, para adoçar seus momentos especiais.",
    items: ["Bolos", "Doces para festa", "Encomendas personalizadas"],
    ctaLabel: "Encomendar doces",
    whatsappMessage:
      "Oi, Taty! 😊 Vim pelo seu site e gostaria de fazer uma encomenda de doces. Podemos combinar os detalhes (data, quantidade e sabores)?",
  },
]
