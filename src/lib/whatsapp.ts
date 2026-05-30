export interface WhatsAppLinkOptions {
  phone: string
  message?: string
}

export function buildWhatsAppLink({ phone, message }: WhatsAppLinkOptions): string {
  const digits = phone.replace(/\D/g, "")
  const base = `https://wa.me/${digits}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
