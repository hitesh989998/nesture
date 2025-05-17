import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows external access to the dev server
  },
  build: {
    // transpile down to ES2019 so '?' gets compiled away
    target: ['es2019'],
  },
});
