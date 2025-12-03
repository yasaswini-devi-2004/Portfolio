import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'   // ⬅️ add this

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        // these paths are relative to the frontend-app root
        main: resolve(__dirname, 'index.html'),
        profile: resolve(__dirname, 'profile.html'),
      },
    },
  },
})
