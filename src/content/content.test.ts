import { describe, it, expect } from "vitest"
import { site } from "./site"
import { services } from "./services"
import { gallery } from "./gallery"
import { howItWorks } from "./how-it-works"
import { testimonials } from "./testimonials"

describe("camada de conteúdo", () => {
  it("site tem whatsapp só com dígitos e instagram", () => {
    expect(site.whatsapp).toMatch(/^\d{12,13}$/) // 55 + DDD + número
    expect(site.instagram.url).toMatch(/^https:\/\/(www\.)?instagram\.com\//)
  })

  it("tem serviços nos dois universos", () => {
    const categorias = new Set(services.map((s) => s.category))
    expect(categorias.has("beleza")).toBe(true)
    expect(categorias.has("confeitaria")).toBe(true)
  })

  it("itens da galeria têm alt não vazio e categoria válida", () => {
    expect(gallery.length).toBeGreaterThan(0)
    for (const item of gallery) {
      expect(item.alt.trim().length).toBeGreaterThan(0)
      expect(["unhas", "doces"]).toContain(item.category)
    }
  })

  it("depoimentos referenciam categorias válidas e têm texto", () => {
    expect(testimonials.length).toBeGreaterThan(0)
    for (const t of testimonials) {
      expect(["beleza", "confeitaria"]).toContain(t.service)
      expect(t.text.trim().length).toBeGreaterThan(0)
    }
  })

  it("how-it-works está ordenado por step crescente", () => {
    const steps = howItWorks.map((s) => s.step)
    expect(steps).toEqual([...steps].sort((a, b) => a - b))
  })
})
