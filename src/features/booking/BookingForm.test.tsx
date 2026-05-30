import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { BookingForm } from "./BookingForm"

describe("BookingForm", () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it("mostra erro de validação quando o nome é vazio", async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    await user.click(screen.getByRole("button", { name: /enviar pelo whatsapp/i }))
    expect(await screen.findByText(/informe seu nome/i)).toBeInTheDocument()
  })

  it("com dados válidos, abre o WhatsApp com a mensagem montada", async () => {
    const user = userEvent.setup()
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null)
    render(<BookingForm />)

    await user.type(screen.getByLabelText(/nome/i), "Ana")
    await user.type(screen.getByLabelText(/prefer/i), "Sábado de manhã")
    await user.click(screen.getByRole("button", { name: /enviar pelo whatsapp/i }))

    expect(openSpy).toHaveBeenCalledTimes(1)
    const url = openSpy.mock.calls[0][0] as string
    expect(url).toContain("https://wa.me/")
    expect(decodeURIComponent(url)).toContain("Ana")
  })
})
