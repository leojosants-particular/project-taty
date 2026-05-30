import { cn } from "@/lib/utils"

interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function SectionTitle({ eyebrow, title, description, className }: SectionTitleProps) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
    </div>
  )
}
