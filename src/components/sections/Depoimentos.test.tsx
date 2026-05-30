import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Depoimentos } from "./Depoimentos"
import { testimonials } from "@/content/testimonials"

describe("Depoimentos", () => {
  it("renderiza cada depoimento com nome", () => {
    render(<Depoimentos />)
    for (const t of testimonials) {
      expect(screen.getByText(t.name)).toBeInTheDocument()
    }
  })
})
