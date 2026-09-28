import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@mui/styled-engine', replacement: '@mui/styled-engine-sc' },
    ],
  },
})
