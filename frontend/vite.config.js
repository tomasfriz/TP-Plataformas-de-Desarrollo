import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Salida del build
  },
  server: {
    port: 3000, // Puerto para desarrollo local
  },
  base: '/', // Base path, asegurándose de que no haya conflicto de rutas
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
