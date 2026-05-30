import type { ReactNode } from "react"
import { motion } from "motion/react"

interface RevealProps {
  children: ReactNode
  className?: string
  /** Atraso (s) para escalonar itens em sequência. */
  delay?: number
}

/**
 * Revela o conteúdo ao entrar na viewport: fade + leve subida. Anima uma vez.
 * O movimento toca sempre — o App usa <MotionConfig reducedMotion="never">.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
