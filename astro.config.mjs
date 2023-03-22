import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  integrations: [react(), tailwind({
    config: {
      path: './tailwind.config.ts'
    }
  })],
  vite: {
    resolve: {
      alias: {
        '@components/*': resolve(__dirname, './src/components/*'),
      }
    }
  }
});
