import type { GalleryItem } from "./types"

// Imagens reais entram em /public/gallery. Placeholders até a cliente enviar.
export const gallery: GalleryItem[] = [
  { id: "u1", category: "unhas", src: "/gallery/unhas-1.jpg", alt: "Unhas decoradas em tom nude com detalhe dourado" },
  { id: "u2", category: "unhas", src: "/gallery/unhas-2.jpg", alt: "Esmaltação em gel rosé brilhante" },
  { id: "u3", category: "unhas", src: "/gallery/unhas-3.jpg", alt: "Pedicure com esmalte vermelho clássico" },
  { id: "d1", category: "doces", src: "/gallery/doces-1.jpg", alt: "Bolo decorado com flores de açúcar" },
  { id: "d2", category: "doces", src: "/gallery/doces-2.jpg", alt: "Bandeja de doces finos para festa" },
  { id: "d3", category: "doces", src: "/gallery/doces-3.jpg", alt: "Cupcakes confeitados artesanalmente" },
]
