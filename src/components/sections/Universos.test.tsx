import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Universos } from "./Universos"
import { services } from "@/content/services"

describe("Universos", () => {
  it("renderiza um card por serviço com seu CTA de WhatsApp", () => {
    render(<Universos />)
    for (const s of services) {
      const cta = screen.getByRole("link", { name: new RegExp(s.ctaLabel, "i") })
      expect(cta).toHaveAttribute("href", expect.stringContaining("https://wa.me/"))
    }
  })
})
