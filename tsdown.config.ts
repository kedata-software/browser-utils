import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outExtensions: ({ format }) => ({
    js: `.${format}.js`,
    dts: '.d.ts',
  }),
  dts: true,
  tsconfig: 'tsconfig.build.json',
});