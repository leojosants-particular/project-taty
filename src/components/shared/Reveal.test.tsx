import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Reveal } from "./Reveal"

describe("Reveal", () => {
  it("renderiza os filhos", () => {
    render(
      <Reveal>
        <p>conteúdo revelado</p>
      </Reveal>,
    )
    expect(screen.getByText("conteúdo revelado")).toBeInTheDocument()
  })
})
