import { describe, it, expect } from "vitest"
import { asset } from "./asset"

describe("asset", () => {
  it("prefixa o caminho com a base do Vite (sem barra dupla)", () => {
    // Em teste/dev, import.meta.env.BASE_URL é "/".
    expect(asset("/logo/logo.svg")).toBe("/logo/logo.svg")
    expect(asset("gallery/x.svg")).toBe("/gallery/x.svg")
  })
})
