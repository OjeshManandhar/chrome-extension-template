import react from '@vitejs/plugin-react';
import { loadEnv, defineConfig } from 'vite';

// packages
import eslint from 'vite-plugin-eslint';
import { crx } from '@crxjs/vite-plugin';

import makeManifest from './manifest';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      eslint(),
      crx({
        manifest: makeManifest({ env: env.ENV, version: env.VERSION }),
      }),
    ],
    resolve: {
      alias: {
        '@': '/src',
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
  };
});
