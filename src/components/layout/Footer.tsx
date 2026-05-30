import { InstagramIcon } from "@/components/shared/InstagramIcon"
import { site } from "@/content/site"
import { developer } from "@/content/credits"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:gap-6 md:text-left">
        <img
          src="/logo/logo-wordmark-compact.svg"
          alt={site.brandName}
          className="h-16 w-auto sm:h-20"
        />

        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-primary"
        >
          <InstagramIcon className="size-4" />
          {site.instagram.handle}
        </a>

        <p>
          © {new Date().getFullYear()} {site.brandName}. Feito com carinho.
        </p>
      </div>

      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-4 py-3 text-center text-xs text-muted-foreground">
          Desenvolvido por{" "}
          <a
            href={developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground/80 underline-offset-4 hover:text-primary hover:underline"
          >
            {developer.name}
          </a>
        </p>
      </div>
    </footer>
  )
}
