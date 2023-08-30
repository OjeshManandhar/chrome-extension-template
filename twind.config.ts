import { defineConfig } from '@twind/core';
import presetTailwind from '@twind/preset-tailwind';
import presetAutoprefix from '@twind/preset-autoprefix';

// tailwind config
import tailwindConfig from './tailwind.config';

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  theme: tailwindConfig.theme,
});
