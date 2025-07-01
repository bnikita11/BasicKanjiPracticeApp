import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: 'public',  // This ensures that Vercel picks up the 'public' directory

  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
