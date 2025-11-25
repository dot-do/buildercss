import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        'orb': resolve(__dirname, 'components/backgrounds/orb.jsx'),
        'ripple-grid': resolve(__dirname, 'components/backgrounds/ripple-grid.jsx'),
        'particles': resolve(__dirname, 'components/backgrounds/particles.jsx'),
        'waves': resolve(__dirname, 'components/backgrounds/waves.jsx'),
      },
      formats: ['iife'],
      name: 'Background'
    },
    outDir: 'dist/backgrounds',
    rollupOptions: {
      external: [],
      output: {
        entryFileNames: '[name].js',
        extend: true,
        globals: {}
      }
    }
  }
})
