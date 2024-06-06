import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';
import { BaseSequencer, WorkspaceSpec } from 'vitest/node';

class MySequencer extends BaseSequencer {
  sort(files: WorkspaceSpec[]): Promise<WorkspaceSpec[]> {
    return Promise.resolve(files.sort((a, b) => a[1].localeCompare(b[1])));
  }
}

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
      sequence: {
        sequencer: MySequencer,
      },
    },
  };
});
