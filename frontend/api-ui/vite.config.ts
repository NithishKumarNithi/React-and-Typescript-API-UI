import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/products': {
        target: 'http://localhost:4001', // Replace with your backend URL
        changeOrigin: true,
      },
      '/vegetables': {
        target: 'http://localhost:4001', // Replace with your backend URL
        changeOrigin: true,
      },
      '/non-vegetables': {
        target: 'http://localhost:4001', // Replace with your backend URL
        changeOrigin: true,
      },
      '/fruits': {
        target: 'http://localhost:4001', // Replace with your backend URL
        changeOrigin: true,
      },
    },
  },
})
