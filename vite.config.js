import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
// Config according to mode
export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    // Retrieve env var based on the current mode, otherwise use root
    base: env.VITE_BASE_PATH || '/',
  }
})
