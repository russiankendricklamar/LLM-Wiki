import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

const katexFontFilter = (): import('vite').Plugin => ({
  name: 'katex-font-filter',
  generateBundle(_, bundle) {
    for (const key of Object.keys(bundle)) {
      if (/katex.*\.(ttf|woff)$/i.test(key) && !/\.woff2$/i.test(key)) {
        delete bundle[key];
      }
    }
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), katexFontFilter()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
