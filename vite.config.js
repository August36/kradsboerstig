import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Tilføjer fallback routing for React Router
  },
  root: '.', // Sørger for, at Vite kører fra projektets rodmappe
});