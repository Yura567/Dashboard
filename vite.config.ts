import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@mui/styled-engine', replacement: '@mui/styled-engine-sc' },
    ],
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    clearMocks: true,
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
    server: {
      deps: {
        inline: true,
      },
    },
  },
})
