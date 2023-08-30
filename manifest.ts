// types
import type { ManifestV3Export } from '@crxjs/vite-plugin';

function makeManifest({
  env = 'dev',
  version = '0.0.1',
}: {
  env: string;
  version: string;
}): ManifestV3Export {
  let name = 'React Vite Example';

  if (env !== 'production') {
    name += ` | ${env}`;
  }

  const manifest: ManifestV3Export = {
    manifest_version: 3,
    name,
    version,
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

  return manifest;
}

export default makeManifest;
