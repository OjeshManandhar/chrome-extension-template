// types
import type { ManifestV3Export } from '@crxjs/vite-plugin';

const manifest: ManifestV3Export = {
  manifest_version: 3,
  name: 'React Vite Example',
  version: '1.0.0',
  action: { default_popup: 'src/pages/popup/index.html' },
  content_scripts: [
    {
      js: ['src/pages/content/index.tsx'],
      matches: ['<all_urls>'],
    },
  ],
  background: {
    service_worker: 'src/pages/background/index.ts',
    type: 'module',
  },
};

export default manifest;
