import { motion } from "motion/react"
import { Check } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { services } from "@/content/services"

export function Universos() {
  return (
    <section id="servicos" className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Dois talentos, uma pessoa"
          title="Os dois universos"
          description="Beleza para as suas unhas e doçura para os seus momentos."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <h3 className="font-serif text-2xl leading-none font-semibold" data-slot="card-title">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground">{s.description}</p>
                </CardHeader>
                <CardContent className="flex h-full flex-col gap-4">
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-foreground/80">
                        <Check className="size-4 text-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <WhatsAppButton message={s.whatsappMessage} className="w-full">
                      {s.ctaLabel}
                    </WhatsAppButton>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
