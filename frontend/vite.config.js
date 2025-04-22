import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import configs from 'lucide-node';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react(), configs({ development: true })],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  assetsInclude: ['**/*.mp3'], // Allow Vite to handle .mp3 files as static assets
  server: {
    hmr: {
      overlay: false, // Disable the error overlay in development
    },
  },
});
