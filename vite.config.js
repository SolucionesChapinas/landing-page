import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://solucioneschapinas.github.io/landing-page' // Nombre del repositorio en Github
})
