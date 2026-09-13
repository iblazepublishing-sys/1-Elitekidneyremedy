import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path is relative so the built assets resolve correctly whether the
// site is served from a root domain or a GitHub Pages project path.
export default defineConfig({
  plugins: [react()],
  base: './',
})
