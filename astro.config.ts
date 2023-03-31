import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    resolve: {
      alias: {
        '@components/*': resolve(__dirname, './src/components/*'),
      }
    }
  }
});
