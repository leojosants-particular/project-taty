import { motion } from "motion/react"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { Reveal } from "@/components/shared/Reveal"
import { howItWorks } from "@/content/how-it-works"

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <SectionTitle eyebrow="Simples assim" title="Como funciona" />
        </Reveal>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((s, i) => (
            <motion.li
              key={s.step}
              className="rounded-2xl bg-card p-6 text-center shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary font-serif text-lg text-primary-foreground">
                {s.step}
              </span>
              <h3 className="mt-4 font-serif text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
