import { render, screen, fireEvent, act } from "@testing-library/react"
import { describe, it, expect, beforeEach } from "vitest"
import { ScrollToTop } from "./ScrollToTop"

describe("ScrollToTop", () => {
  beforeEach(() => {
    window.scrollTo = (() => {}) as typeof window.scrollTo
    Object.defineProperty(window, "scrollY", { value: 0, writable: true, configurable: true })
  })

  it("fica oculto no topo e aparece após rolar além do limite", () => {
    render(<ScrollToTop threshold={300} />)
    expect(screen.queryByRole("button", { name: /voltar ao topo/i })).toBeNull()

    act(() => {
      ;(window as unknown as { scrollY: number }).scrollY = 500
      fireEvent.scroll(window)
    })
    expect(screen.getByRole("button", { name: /voltar ao topo/i })).toBeInTheDocument()
  })
})
