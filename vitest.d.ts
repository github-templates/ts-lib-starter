import type { expect } from 'vitest'
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'

declare module 'vitest' {
  interface Assert<T = any> extends TestingLibraryMatchers<typeof expect.stringContaining, T> { }
  interface AsymmetricMatchersContaining extends TestingLibraryMatchers<unknown, unknown> { }
}