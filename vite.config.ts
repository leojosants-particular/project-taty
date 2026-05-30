/// <reference types="vitest/config" />
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages de projeto serve em /<repo>/ — base só no build de produção.
  base: command === 'build' ? '/project-taty/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    // Playwright owns e2e/; keep Vitest to unit/integration under src/
    exclude: ['**/node_modules/**', '**/dist/**', 'e2e/**'],
  },
}))
