<script setup lang="ts">
const title = 'TIX Clock';
const description = 'Web version of TIX Clock';
const logo = useBaseURL('/favicon/android-chrome-192x192.png');
useHead({
  title,
  meta: [{ name: 'description', content: description }],
  htmlAttrs: { 'data-bs-theme': 'dark', 'lang': 'en' },
});
useSeoMeta({
  description,
  ogDescription: description,
  ogImage: logo,
  ogImageSecureUrl: logo,
  ogSiteName: title,
  ogTitle: title,
  ogType: 'website',
  ogUrl: 'https://virenbar.ru/tix-clock-web/',
  twitterCard: 'summary',
  twitterDescription: description,
  twitterImage: logo,
  twitterTitle: title,
});
useWakeLock();
</script>
<template>
  <PageFavicon />
  <div class="min-vh-100 d-flex flex-column">
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <NuxtPage />
    </main>
    <PageFooter />
  </div>
</template>
<style lang="scss">
@use "~/assets/css/styles.scss";
</style>
