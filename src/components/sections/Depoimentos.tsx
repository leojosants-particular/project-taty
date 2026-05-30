import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { Reveal } from "@/components/shared/Reveal"
import { testimonials } from "@/content/testimonials"

export function Depoimentos() {
  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <Reveal>
        <SectionTitle eyebrow="Quem já experimentou" title="Depoimentos" />
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.08}>
            <Card className="h-full">
              <CardContent className="flex flex-col gap-3 p-6">
                <Quote className="size-6 text-accent" aria-hidden="true" />
                <p className="text-foreground/80">{t.text}</p>
                <span className="font-serif text-primary">{t.name}</span>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
