import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  publicDir: 'public',
  build: {
    // Code splitting configuration
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-core': ['react', 'react-dom'],
          'vendor-utils': ['react-router-dom', 'framer-motion', 'lenis'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
    // Production optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.info', 'console.debug', 'console.warn'],
      },
      format: {
        comments: false,
      },
    },
    // Performance tweaks
    chunkSizeWarningLimit: 600,
    assetsInlineLimit: 8092, // Inline assets smaller than 8kb
    reportCompressedSize: false, // Speed up build
    sourcemap: false, // Disable for production
  },
})
