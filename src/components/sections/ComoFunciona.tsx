import { SectionTitle } from "@/components/shared/SectionTitle"
import { howItWorks } from "@/content/how-it-works"

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionTitle eyebrow="Simples assim" title="Como funciona" />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((s) => (
            <li key={s.step} className="rounded-2xl bg-card p-6 text-center shadow-sm">
              <span className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary font-serif text-lg text-primary-foreground">
                {s.step}
              </span>
              <h3 className="mt-4 font-serif text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
