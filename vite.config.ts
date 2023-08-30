import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  server: { port: 5173, hmr: { port: 5173 } },
  build: {
    rollupOptions: {
      input: {
        popup: 'src/pages/popup/index.html',
      },
    },
  },
});
