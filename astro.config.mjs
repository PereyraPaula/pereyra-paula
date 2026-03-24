// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    // Habilita la inserción de recursos en línea para archivos pequeños
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [
      tailwindcss(),
      compress({
        CSS: true,
        HTML: true,
        JavaScript: true,
        Image: false,
      })
    ],
  },
});
