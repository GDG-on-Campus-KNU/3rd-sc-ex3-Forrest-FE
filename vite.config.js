import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), '@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^@mui/(.*)$',
    '^@untitled-ui/(.*)$',
    '^react',
    '^src/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
});
