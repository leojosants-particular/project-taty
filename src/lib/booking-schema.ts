import { z } from "zod"

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome"),
  service: z.enum(["beleza", "confeitaria"], { message: "Escolha um serviço" }),
  preference: z.string().trim().min(2, "Conte sua preferência de data/horário"),
})

export type BookingForm = z.infer<typeof bookingSchema>

const SERVICE_LABEL: Record<BookingForm["service"], string> = {
  beleza: "Beleza (unhas)",
  confeitaria: "Confeitaria (doces)",
}

export function buildBookingMessage(data: BookingForm): string {
  return [
    `Oi, Taty! 😊 Vim pelo seu site.`,
    `Meu nome é ${data.name} e tenho interesse em ${SERVICE_LABEL[data.service]}.`,
    `Minha preferência de data/horário é: ${data.preference}.`,
    `Pode me ajudar?`,
  ].join(" ")
}
