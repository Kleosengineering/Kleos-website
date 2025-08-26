import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/', // Ensures correct asset paths for deployment
  css: {
    postcss: './postcss.config.js', // Explicitly point to postcss.config.js
  },
});