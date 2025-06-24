import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    headers: {
      'Content-Security-Policy': "frame-ancestors 'self' https://app.contentful.com;",
    },
  },
});
