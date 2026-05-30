import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect } from "vitest"
import { Galeria } from "./Galeria"
import { gallery } from "@/content/gallery"

describe("Galeria", () => {
  it("mostra todas as imagens por padrão", () => {
    render(<Galeria />)
    expect(screen.getAllByRole("img")).toHaveLength(gallery.length)
  })

  it("filtra por categoria ao clicar em 'Doces'", async () => {
    const user = userEvent.setup()
    render(<Galeria />)
    await user.click(screen.getByRole("button", { name: /doces/i }))
    const expected = gallery.filter((g) => g.category === "doces").length
    expect(screen.getAllByRole("img")).toHaveLength(expected)
  })
})
