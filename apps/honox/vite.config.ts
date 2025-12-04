import honox from 'honox/vite'
import pages from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['./app/client.ts'],
          output: {
            entryFileNames: 'static/client.js',
          },
        },
      },
    }
  }
  return {
    plugins: [
      honox(),
      pages(),
      devServer({
        entry: 'app/server.ts',
      }),
    ],
  }
})
