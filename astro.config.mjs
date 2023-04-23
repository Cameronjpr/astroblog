import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://cameronjpr.vercel.app/',
  integrations: [sitemap()],
  experimental: {
    assets: true,
  },
})
