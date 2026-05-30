import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Header } from "./Header"
import { site } from "@/content/site"

describe("Header", () => {
  it("mostra a marca (logo) e um link para Contato", () => {
    render(<Header />)
    expect(screen.getAllByAltText(site.brandName).length).toBeGreaterThan(0)
    const contato = screen.getAllByRole("link", { name: /contato/i })
    expect(contato.some((a) => a.getAttribute("href") === "#contato")).toBe(true)
  })

  it("tem um botão para abrir o menu no mobile", () => {
    render(<Header />)
    expect(screen.getByRole("button", { name: /abrir menu/i })).toBeInTheDocument()
  })
})
