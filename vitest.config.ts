import { defineConfig } from 'vitest/config'
import paths from 'vitest-tsconfig-paths'

export default defineConfig( {
  plugins: [
    paths(),
  ],
  test: {
    globals: true,
    include: [ '**/*.{test,spec}.?(c|m)[jt]s?(x)' ],
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      all: true,
      include: [ 'src' ],
    },
    cache: false
  },
} )
