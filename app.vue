<script setup lang="ts">
const title = "TIX Clock";
const description = "Web version of TIX Clock";

useHead({
  title,
  meta: [
    { name: "description", content: description }
  ],
  htmlAttrs: {
    "data-bs-theme": "dark",
    lang: "en"
  }
});
useServerSeoMeta({
  title,
  description,
  ogType: "website",
  ogTitle: title,
  ogDescription: description,
  ogImage: "",
  ogSiteName: title,
  ogUrl: "https://virenbar.ru/tix-clock-web/",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary"
});
</script>
<template>
  <PageFavicon />
  <div class="min-vh-100 d-flex flex-column">
    <main id="main" class="flex-grow-1 flex-shrink-0">
      <NuxtPage />
    </main>
    <!-- <PageFooter /> -->
  </div>
</template>
<style lang="scss">
@use "~/assets/css/styles.scss";
</style>
