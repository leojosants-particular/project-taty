import type { ReactNode, ComponentProps } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { buildWhatsAppLink } from "@/lib/whatsapp"
import { site } from "@/content/site"

interface WhatsAppButtonProps {
  message: string
  children: ReactNode
  className?: string
  variant?: ComponentProps<typeof Button>["variant"]
  size?: ComponentProps<typeof Button>["size"]
}

export function WhatsAppButton({ message, children, className, variant, size }: WhatsAppButtonProps) {
  const href = buildWhatsAppLink({ phone: site.whatsapp, message })
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="size-4" aria-hidden="true" />
        {children}
      </a>
    </Button>
  )
}
