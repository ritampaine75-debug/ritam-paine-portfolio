import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'

// Set VITE_BASE_PATH=/ when deploying to a custom domain / Vercel /
// Netlify root, or leave the default for GitHub Pages sub-path.
const base = process.env.VITE_BASE_PATH || '/ritam-paine-portfolio/'

/** Copy dist/index.html -> dist/404.html so GitHub Pages serves the SPA
 *  for unknown deep links (/projects/ritamchat etc.). */
function write404Plugin() {
  return {
    name: 'write-ghpages-404',
    apply: 'build',
    writeBundle() {
      try {
        if (!existsSync('dist')) mkdirSync('dist', { recursive: true })
        copyFileSync('dist/index.html', 'dist/404.html')
        console.log('[404] dist/404.html written for SPA routing')
      } catch (err) {
        console.warn('[404] could not copy 404.html', err)
      }
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), write404Plugin()],
  build: {
    target: 'es2019',
    cssCodeSplit: true,
    modulePreload: { polyfill: false },
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  server: { host: '0.0.0.0', port: 5173, allowedHosts: true },
  preview: { host: '0.0.0.0', port: 4173, allowedHosts: true },
})
