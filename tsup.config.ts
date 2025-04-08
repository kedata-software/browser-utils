import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outExtension: ({ format }) => ({
    js: `.${format}.js`,
  }),
  dts: true,
  tsconfig: 'tsconfig.build.json',
});