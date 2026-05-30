import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { site } from "@/content/site"

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="font-serif text-xl font-semibold text-primary">
          {site.brandName}
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-foreground/80 hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton message={`Oi, ${site.brandName}! Vim pelo site.`} size="sm">
            Falar no WhatsApp
          </WhatsAppButton>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="font-serif text-lg text-primary">{site.brandName}</SheetTitle>
            <nav aria-label="Mobile" className="mt-6 flex flex-col gap-4">
              {NAV.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a href={item.href} className="text-base text-foreground/90 hover:text-primary">
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-6">
              <WhatsAppButton message={`Oi, ${site.brandName}! Vim pelo site.`} className="w-full">
                Falar no WhatsApp
              </WhatsAppButton>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
