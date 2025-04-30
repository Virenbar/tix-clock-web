<script setup lang="ts">
defineProps({
  colorOff: { type: String, default: 'black' },
  colorOn: { type: String, default: 'green' },
  lit: { type: Boolean },
});
</script>
<template>
  <div class="pixel" :class="{ glow: lit }" />
</template>
<style scoped>
.pixel {
  transition: all .5s;
  margin: min(v-bind("$clock.pixelSize.value / 16 + 'px'"), 8px);
  width: v-bind("$clock.pixelSize.value + 'px'");
  height: v-bind("$clock.pixelSize.value + 'px'");
  border-radius: v-bind("$clock.pixelSize.value / 8 + 'px'");
  background-color: v-bind(colorOff);
}

.glow {
  /* box-shadow: 0 0 8px 2px v-bind(color); */
  /* box-shadow: inset 0 0 40px #000; */
  box-shadow:
    inset 0 0 12px 3px color-mix(in srgb, v-bind(colorOn) 40%, v-bind(colorOff) 60%),
    0 0 12px 3px color-mix(in srgb, v-bind(colorOn) 60%, v-bind(colorOff) 40%);
  background-color: v-bind(colorOn);
}
</style>
