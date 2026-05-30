import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import App from "./App"

describe("App", () => {
  it("monta as seções principais (hero, serviços, contato)", () => {
    render(<App />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    expect(document.querySelector("#servicos")).not.toBeNull()
    expect(document.querySelector("#contato")).not.toBeNull()
  })
})
