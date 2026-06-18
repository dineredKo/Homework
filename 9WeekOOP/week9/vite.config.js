import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      exclude: ['**/*.test.ts', '**/*.spec.ts'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // убедитесь, что файл существует
      formats: ['cjs', 'es'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: [
        'fs',
        'fs/promises',
        'path',
        'os',
      ],
      output: {
        esModule: true,
        exports: 'named',
        // generatedCode: 'es2015', // можно раскомментировать при необходимости
      },
    },
    target: 'node18',
  },
  server: {
    open: false,
  },
  ssr: {
    target: 'node',
    noExternal: [],
  },
});