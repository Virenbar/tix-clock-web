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
  app: {
    head: {
      script: [
        { src: 'https://kit.fontawesome.com/3d652cc361.js', crossorigin: 'anonymous' },
      ],
    },
  },
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
  eslint: {
    config: {
      stylistic: true,
    },
  },
  yandexMetrika: { id: '87731504' },
});
