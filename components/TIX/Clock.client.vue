<script setup lang="ts">
const { hourL, hourR, minuteL, minuteR } = useNuxtApp().$clock;
</script>
<template>
  <div class="whitespace-nowrap">
    <div class="d-inline-block text-nowrap">
      <TIXBlock class="d-inline-block d-sm-none" />
      <TIXBlock :size=1 :state="hourL" />
      <TIXBlock />
      <TIXBlock :size=3 :state="hourR" />
      <TIXBlock class="d-none d-sm-inline-block" />
    </div>
    <div class="d-inline-block text-nowrap">
      <TIXBlock :size=2 :state="minuteL" />
      <TIXBlock />
      <TIXBlock :size=3 :state="minuteR" />
    </div>
  </div>
</template>
