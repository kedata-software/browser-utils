import { defineConfig } from 'vite';


export default defineConfig({
  cacheDir: './node_modules/.vite/packages/browser',

  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    // coverage: {
    //   reportsDirectory: '../../coverage/packages/browser',
    //   provider: 'v8',
    //   enabled: true,
    //   exclude: ['src/**/index.{js,mjs,cjs,ts,mts,cts}'],
    // },
  },
});
