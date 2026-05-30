import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { WhatsAppButton } from "./WhatsAppButton"

describe("WhatsAppButton", () => {
  it("aponta para wa.me com a mensagem e abre em nova aba", () => {
    render(<WhatsAppButton message="Oi, Taty!">Falar no WhatsApp</WhatsAppButton>)
    const link = screen.getByRole("link", { name: /falar no whatsapp/i })
    expect(link).toHaveAttribute("href", expect.stringContaining("https://wa.me/"))
    expect(link).toHaveAttribute("href", expect.stringContaining("text="))
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"))
  })
})
