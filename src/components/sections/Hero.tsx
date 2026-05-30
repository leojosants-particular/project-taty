import { motion } from "motion/react"
import { Sparkles } from "lucide-react"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
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
          className="font-serif text-4xl font-semibold text-foreground sm:text-6xl"
        >
          {site.brandName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl text-lg text-foreground/80"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <WhatsAppButton message={`Oi, ${site.brandName}! Vim pelo site e quero saber mais.`} size="lg">
            Falar no WhatsApp
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  )
}
