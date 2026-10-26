import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH lets the same code deploy to a domain root (Vercel/Netlify: "/")
// or to a sub-folder such as GitHub Pages ("/sanjaynanakate/").
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
