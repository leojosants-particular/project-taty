import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { ComoFunciona } from "./ComoFunciona"
import { howItWorks } from "@/content/how-it-works"

describe("ComoFunciona", () => {
  it("renderiza um passo para cada item", () => {
    render(<ComoFunciona />)
    for (const step of howItWorks) {
      expect(screen.getByText(step.title)).toBeInTheDocument()
    }
  })
})
