import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Sobre } from "./Sobre"

describe("Sobre", () => {
  it("tem um heading de seção e a região de atendimento", () => {
    render(<Sobre />)
    expect(screen.getByRole("heading", { name: /sobre/i })).toBeInTheDocument()
  })
})
