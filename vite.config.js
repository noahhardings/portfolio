import { defineConfig } from 'vite'

// Relative base so the site works on GitHub Pages project URLs
// (https://<user>.github.io/<repo>/) without hardcoding the repo name.
export default defineConfig({
  base: './',
})
