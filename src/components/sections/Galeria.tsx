import { useState } from "react"
import { motion } from "motion/react"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { gallery } from "@/content/gallery"
import type { GalleryCategory } from "@/content/types"

type Filter = "todos" | GalleryCategory

const FILTERS: { value: Filter; label: string }[] = [
  { value: "todos", label: "Tudo" },
  { value: "unhas", label: "Unhas" },
  { value: "doces", label: "Doces" },
]

export function Galeria() {
  const [filter, setFilter] = useState<Filter>("todos")
  const items = filter === "todos" ? gallery : gallery.filter((g) => g.category === filter)

  return (
    <section id="galeria" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <SectionTitle eyebrow="Portfólio" title="Galeria" description="Um pouquinho do que faço com carinho." />

      <div className="mt-8 flex justify-center gap-1" role="group" aria-label="Filtrar galeria">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-label={f.label}
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
            className="inline-flex items-center justify-center rounded-md px-3 h-9 text-sm font-medium transition-colors hover:bg-muted aria-pressed:bg-accent aria-pressed:text-accent-foreground"
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <motion.figure
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="overflow-hidden rounded-2xl bg-muted"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="aspect-square size-full object-cover"
            />
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
