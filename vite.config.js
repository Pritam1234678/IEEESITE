import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: {
      index: '/index.html'
    }
  },
  define: {
    // This provides a global 'process' variable for compatibility with some libraries.
    'process.env': {}
  }
})
