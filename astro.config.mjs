import { defineConfig } from "astro/config";
import alpine from '@astrojs/alpinejs';
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://beach-hut-cafe.com',
  integrations: [
    alpine(),
    preact(),
    sitemap({
      canonicalURL: 'https://beach-hut-cafe.com'
    })
  ],
});
