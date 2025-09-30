import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env)
  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: Number(env.VITE_PORT)
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@administrator": path.resolve(__dirname, "src", "administrator"),
        "@customer": path.resolve(__dirname, "src", "customer"),
        "@seller": path.resolve(__dirname, "src", "seller"),
      }
    }
  }
})
