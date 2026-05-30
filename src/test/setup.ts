import "@testing-library/jest-dom/vitest"
import { afterEach } from "vitest"
import { cleanup } from "@testing-library/react"

afterEach(() => {
  cleanup()
})

// Mock IntersectionObserver for jsdom (used by motion/react whileInView)
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}
globalThis.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver
