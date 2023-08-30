import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';

import manifest from './manifest';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), crx({ manifest })],
  resolve: {
    alias: {
      '@': '/src',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@popup': '/src/pages/popup',
      '@content': '/src/pages/content',
      '@background': '/src/pages/background',
    },
  },
  build: {
    rollupOptions: {
      input: {
        popup: 'src/pages/popup/index.html',
      },
    },
  },
  server: { port: 5173, hmr: { port: 5173 } },
});
