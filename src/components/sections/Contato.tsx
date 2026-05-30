import { Clock, MapPin } from "lucide-react"
import { InstagramIcon } from "@/components/shared/InstagramIcon"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { BookingForm } from "@/features/booking/BookingForm"
import { site } from "@/content/site"

export function Contato() {
  return (
    <section id="contato" className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Vamos conversar"
          title="Contato"
          description="Me chame no WhatsApp ou use o formulário — respondo com carinho."
        />

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <BookingForm />

          <div className="space-y-4 text-foreground/80">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <InstagramIcon className="size-5 text-accent" />
              {site.instagram.handle}
            </a>

            <p className="flex items-center gap-2">
              <MapPin className="size-5 text-accent" aria-hidden="true" />
              {site.region}
            </p>

            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 size-5 text-accent" aria-hidden="true" />
              <ul>
                {site.hours.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
