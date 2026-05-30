import { describe, it, expect } from "vitest"
import { buildWhatsAppLink } from "./whatsapp"

describe("buildWhatsAppLink", () => {
  it("gera URL wa.me com a mensagem codificada", () => {
    const url = buildWhatsAppLink({ phone: "5511999999999", message: "Oi, Taty!" })
    expect(url).toBe("https://wa.me/5511999999999?text=Oi%2C%20Taty!")
  })

  it("remove caracteres não numéricos do telefone", () => {
    const url = buildWhatsAppLink({ phone: "+55 (11) 99999-9999", message: "oi" })
    expect(url.startsWith("https://wa.me/5511999999999?text=")).toBe(true)
  })

  it("sem mensagem, não inclui ?text=", () => {
    const url = buildWhatsAppLink({ phone: "5511999999999" })
    expect(url).toBe("https://wa.me/5511999999999")
  })
})
