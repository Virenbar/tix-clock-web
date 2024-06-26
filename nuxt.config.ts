import { execSync } from "child_process";

const exec = (command: string) => execSync(command).toString().trim();
const branch = exec("git branch --show-current");
const hash = exec("git rev-parse HEAD");
const date = new Date().toISOString();

export default defineNuxtConfig({
  css: [
    "@/assets/css/styles.scss"
  ],
  app: {
    head: {
      script: [
        { src: "https://kit.fontawesome.com/3d652cc361.js", crossorigin: "anonymous" }
      ]
    }
  },
  modules: [
    "@nuxt/eslint",
    "@artmizu/yandex-metrika-nuxt"
  ],
  yandexMetrika: { id: "87731504" },
  runtimeConfig: {
    public: {
      repository: "https://github.com/Virenbar/tix-clock-web",
      branch: branch,
      hash: hash,
      date: date
    }
  }
});
