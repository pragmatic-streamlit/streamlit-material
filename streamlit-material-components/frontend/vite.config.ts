import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
    process: {
      env: {},
    },
  },
  server: {
    port: 3001
  },
  plugins: [react()],
})
