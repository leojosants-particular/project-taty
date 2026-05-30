import "@testing-library/jest-dom/vitest"
import { afterEach } from "vitest"
import { cleanup } from "@testing-library/react"

afterEach(() => {
  cleanup()
})

// Mock IntersectionObserver for jsdom (used by motion/react whileInView)
globalThis.IntersectionObserver = class IntersectionObserver {
  constructor(_callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {}
  observe() {}
  unobserve() {}
  disconnect() {}
  readonly root = null
  readonly rootMargin = ""
  readonly thresholds = []
  takeRecords(): IntersectionObserverEntry[] { return [] }
}
