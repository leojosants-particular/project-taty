import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Footer } from "./Footer"
import { site } from "@/content/site"
import { developer } from "@/content/credits"

describe("Footer", () => {
  it("mostra a marca, o Instagram e o crédito do desenvolvedor", () => {
    render(<Footer />)

    expect(screen.getAllByAltText(site.brandName).length).toBeGreaterThan(0)

    const ig = screen.getByRole("link", {
      name: new RegExp(site.instagram.handle, "i"),
    })
    expect(ig).toHaveAttribute("href", site.instagram.url)

    const dev = screen.getByRole("link", {
      name: new RegExp(developer.name, "i"),
    })
    expect(dev).toHaveAttribute("href", developer.url)
    expect(dev).toHaveAttribute("target", "_blank")
  })
})
