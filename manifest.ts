// types
import type { ManifestV3Export } from '@crxjs/vite-plugin';

const manifest: ManifestV3Export = {
  manifest_version: 3,
  name: 'React Vite Example',
  version: '1.0.0',
  action: { default_popup: 'index.html' },
  content_scripts: [
    {
      js: ['src/content.tsx'],
      matches: ['<all_urls>'],
    },
  ],
};

export default manifest;
