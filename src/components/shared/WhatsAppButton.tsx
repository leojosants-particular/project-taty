import type { ReactNode } from "react"
import type * as React from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { buildWhatsAppLink } from "@/lib/whatsapp"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  message: string
  children: ReactNode
  className?: string
  variant?: React.ComponentProps<typeof Button>["variant"]
  size?: React.ComponentProps<typeof Button>["size"]
}

export function WhatsAppButton({ message, children, className, variant, size }: WhatsAppButtonProps) {
  const href = buildWhatsAppLink({ phone: site.whatsapp, message })
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle className={cn("size-4")} aria-hidden="true" />
        {children}
      </a>
    </Button>
  )
}
