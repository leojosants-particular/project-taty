import { InstagramIcon } from "@/components/shared/InstagramIcon"
import { site } from "@/content/site"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center text-sm text-muted-foreground">
        <span className="font-serif text-lg text-primary">{site.brandName}</span>
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-primary"
        >
          <InstagramIcon className="size-4" />
          {site.instagram.handle}
        </a>
        <p>© {new Date().getFullYear()} {site.brandName}. Feito com carinho.</p>
      </div>
    </footer>
  )
}
