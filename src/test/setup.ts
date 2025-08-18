import '@testing-library/jest-dom'
import { afterEach, beforeEach, vi } from 'vitest'

// Globalne setup dla testów
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

afterEach(() => {
  vi.clearAllMocks()
})

beforeEach(() => {
  vi.clearAllMocks()
})
