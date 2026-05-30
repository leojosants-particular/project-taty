import { motion } from "motion/react"
import { Sparkles } from "lucide-react"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { asset } from "@/lib/asset"
import { site } from "@/content/site"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-secondary/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:py-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 text-sm text-muted-foreground shadow-sm"
        >
          <Sparkles className="size-4 text-accent" aria-hidden="true" />
          {site.region}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <img
            src={asset("/logo/logo-wordmark.svg")}
            alt={site.brandName}
            className="mx-auto h-auto w-80 sm:w-lg"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl text-lg text-foreground/80"
        >
          {site.heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <WhatsAppButton
            message="Oi, Taty! 😊 Vim pelo seu site e gostaria de saber mais sobre os seus serviços de beleza e confeitaria."
            size="lg"
          >
            Falar no WhatsApp
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  )
}
