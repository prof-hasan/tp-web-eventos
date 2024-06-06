import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env': env,
    },
    test: {
      environment: 'jsdom',
      browser: {
        enabled: true,
        name: 'chrome', // browser name is required
      },
    },
  };
});
