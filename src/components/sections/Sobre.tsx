import { SectionTitle } from "@/components/shared/SectionTitle"
import { Reveal } from "@/components/shared/Reveal"
import { site } from "@/content/site"

export function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <Reveal>
        <SectionTitle eyebrow="Quem faz" title="Sobre a Taty" />
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center text-foreground/80">
          <p>
            Eu sou a Taty e transformo cuidado em arte — seja nas suas unhas ou na
            mesa da sua festa. Trabalho de casa, com hora marcada, dando atenção a
            cada detalhe.
          </p>
          <p>
            Acredito que capricho se sente: nas mãos bem cuidadas e no doce feito
            com carinho. {site.region}.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
