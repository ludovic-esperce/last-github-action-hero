import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// base './' : le site fonctionne sur https://<user>.github.io/<repo>/ sans config
export default defineConfig({
  base: './',
  plugins: [react()],
  test: { environment: 'node' },
});
