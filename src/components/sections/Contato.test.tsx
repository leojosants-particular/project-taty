import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Contato } from "./Contato"
import { site } from "@/content/site"

describe("Contato", () => {
  it("mostra o formulário, o Instagram e os horários", () => {
    render(<Contato />)
    expect(screen.getByRole("button", { name: /enviar pelo whatsapp/i })).toBeInTheDocument()
    const ig = screen.getByRole("link", { name: new RegExp(site.instagram.handle, "i") })
    expect(ig).toHaveAttribute("href", site.instagram.url)
    expect(screen.getByText(site.hours[0])).toBeInTheDocument()
  })
})
