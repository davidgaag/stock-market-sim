import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../stock-market-sim-server/public',
    rollupOptions: {
      external: []
    }
  }
})
