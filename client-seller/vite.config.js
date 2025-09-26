import path from 'path'
import { fileURLToPath } from 'url'

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    server: {
      port: Number(env.VITE_PORT)
    },
    resolve: {
      alias: {
        '@': '/src',
        '@ui': path.resolve(__dirname, '../ui-lib/src')
      }
    }
  }
})
