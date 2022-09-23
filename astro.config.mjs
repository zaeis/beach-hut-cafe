import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://beach-hut-cafe.com',
  integrations: [
    preact(),
    sitemap({
      canonicalURL: 'https://beach-hut-cafe.com'
    })
  ],
});
