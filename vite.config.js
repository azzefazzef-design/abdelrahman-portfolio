import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // السطر ده هو أهم حاجة في الموضوع كله
  base: "/abdelrahman-portfolio/", 
  plugins: [react()],
})
