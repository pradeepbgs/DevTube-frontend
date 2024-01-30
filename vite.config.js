import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': 'https://video-backend-3ot2.onrender.com'
  //   }
  // },
  plugins: [react()],
})
