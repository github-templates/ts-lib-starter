import { defineConfig } from 'tsup'

export default defineConfig( {
  entry: [ 'src/index.ts' ],
  format: [ 'cjs', 'esm' ],
  // for vitest in-source testing
  treeshake: true,
  define: {
    'import.meta.vitest': 'false'
  }
} )

