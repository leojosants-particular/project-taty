import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Hero } from "./Hero"
import { site } from "@/content/site"

describe("Hero", () => {
  it("mostra a tagline e um CTA de WhatsApp", () => {
    render(<Hero />)
    expect(screen.getByText(site.tagline)).toBeInTheDocument()
    const cta = screen.getByRole("link", { name: /whatsapp/i })
    expect(cta).toHaveAttribute("href", expect.stringContaining("https://wa.me/"))
  })

  it("tem heading de nível 1", () => {
    render(<Hero />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
  })
})
