import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['stock-market-sim-shared', 'buffer']
    }
  }
})

// TODO: External list, what is it? Are the ones we have correct/needed?