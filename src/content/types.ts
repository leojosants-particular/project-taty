export type ServiceCategory = "beleza" | "confeitaria"
export type GalleryCategory = "unhas" | "doces"

export interface SiteInfo {
  brandName: string
  tagline: string
  heroSubtitle: string
  whatsapp: string // só dígitos, ex: "5511999999999"
  instagram: { handle: string; url: string }
  region: string
  hours: string[]
}

export interface Service {
  id: string
  category: ServiceCategory
  title: string
  description: string
  items: string[]
  ctaLabel: string
  whatsappMessage: string
}

export interface GalleryItem {
  id: string
  category: GalleryCategory
  src: string
  alt: string
}

export interface Testimonial {
  id: string
  name: string
  text: string
  service: ServiceCategory
}

export interface HowToStep {
  step: number
  title: string
  description: string
}
