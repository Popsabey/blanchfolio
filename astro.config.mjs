// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/data/site';

// Build check: Print a warning if xUrl contains "TODO" placeholder
if (siteConfig.xUrl && siteConfig.xUrl.includes('TODO')) {
  console.warn(
    '\x1b[33m%s\x1b[0m',
    `[Build Warning] siteConfig.xUrl is currently set to placeholder ("${siteConfig.xUrl}"). Update with a real handle when available.`
  );
}

// https://astro.build/config
export default defineConfig({
  site: 'https://popsabey.com',
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});