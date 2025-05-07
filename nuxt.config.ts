import { execSync } from 'child_process';

const exec = (command: string) => execSync(command).toString().trim();
const branch = exec('git branch --show-current');
const hash = exec('git rev-parse HEAD');
const date = new Date().toISOString();

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@artmizu/yandex-metrika-nuxt',
  ],
  css: [
    '@/assets/css/styles.scss',
  ],
  runtimeConfig: {
    public: {
      repository: 'https://github.com/Virenbar/tix-clock-web',
      branch: branch,
      hash: hash,
      date: date,
    },
  },
  // Silencing the deprecation warnings
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  yandexMetrika: { id: '87731504' },
});
