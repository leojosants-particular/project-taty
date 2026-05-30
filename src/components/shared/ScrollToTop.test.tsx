import { render, screen, fireEvent, act, waitForElementToBeRemoved } from "@testing-library/react"
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

  it("some novamente ao voltar para o topo", async () => {
    render(<ScrollToTop threshold={300} />)
    act(() => {
      ;(window as unknown as { scrollY: number }).scrollY = 500
      fireEvent.scroll(window)
    })
    expect(screen.getByRole("button", { name: /voltar ao topo/i })).toBeInTheDocument()
    const button = screen.getByRole("button", { name: /voltar ao topo/i })
    act(() => {
      ;(window as unknown as { scrollY: number }).scrollY = 0
      fireEvent.scroll(window)
    })
    await waitForElementToBeRemoved(button)
    expect(screen.queryByRole("button", { name: /voltar ao topo/i })).toBeNull()
  })
})
