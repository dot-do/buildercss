import { defineConfig } from 'tsup'
import mdx from '@mdx-js/esbuild'

export default defineConfig({
  entry: {
    'index': 'index.ts',
    'templates/waitlist/index': 'templates/waitlist/index.ts',
    'templates/waitlist/Layout': 'templates/waitlist/Layout.mdx',
    'templates/waitlist/Waitlist': 'templates/waitlist/Waitlist.mdx',
  },
  format: ['esm'],
  dts: {
    entry: {
      'index': 'index.ts',
      // Skip MDX for DTS - we provide manual .d.ts files
    },
  },
  clean: true,
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  esbuildPlugins: [
    mdx({
      jsxRuntime: 'automatic',
    }),
  ],
  outExtension: () => ({ js: '.js' }),
})
