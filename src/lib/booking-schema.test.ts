import { describe, it, expect } from "vitest"
import { bookingSchema, buildBookingMessage } from "./booking-schema"

describe("bookingSchema", () => {
  it("aceita dados válidos", () => {
    const r = bookingSchema.safeParse({ name: "Ana", service: "beleza", preference: "Sábado de manhã" })
    expect(r.success).toBe(true)
  })

  it("rejeita nome curto", () => {
    const r = bookingSchema.safeParse({ name: "A", service: "beleza", preference: "x" })
    expect(r.success).toBe(false)
  })

  it("rejeita serviço inválido", () => {
    const r = bookingSchema.safeParse({ name: "Ana", service: "outro", preference: "x" })
    expect(r.success).toBe(false)
  })
})

describe("buildBookingMessage", () => {
  it("monta mensagem legível a partir dos dados", () => {
    const msg = buildBookingMessage({ name: "Ana", service: "beleza", preference: "Sábado" })
    expect(msg).toContain("Ana")
    expect(msg).toContain("Beleza")
    expect(msg).toContain("Sábado")
  })
})
