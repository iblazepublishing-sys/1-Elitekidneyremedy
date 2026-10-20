import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// Base path is relative so the built assets resolve correctly whether the
// site is served from a root domain or a GitHub Pages project path.
//
// Multi-page build: the main landing page (index.html), the call-funnel/VSL
// page (apply/index.html), and the post-application confirmation page
// (confirmation/index.html) are all built from this one project, so they
// share the same Tailwind config, fonts, logo, and components (Reveal,
// VslEmbed, etc.). confirmation/ renders the same page as index.html —
// it exists as its own addressable URL for things like a Typeform
// post-submit redirect, same pattern as apply/.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        apply: fileURLToPath(new URL('./apply/index.html', import.meta.url)),
        confirmation: fileURLToPath(new URL('./confirmation/index.html', import.meta.url)),
      },
    },
  },
})
