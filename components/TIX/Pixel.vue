<script setup lang="ts">
const props = defineProps({
  colorOff: { type: String, default: "black" },
  colorOn: { type: String, default: "green" },
  lit: { type: Boolean }
});
const color = computed(() => props.lit ? props.colorOn : props.colorOff);
</script>
<template>
  <div class="pixel" :class="{ glow: props.lit }" />
</template>
<style scoped>
.pixel {
  transition: all .5s;
  margin: .25em;
  width: v-bind("$clock.pixelSize + 'em'");
  height: v-bind("$clock.pixelSize + 'em'");
  border-radius: 0.5em;
  background-color: v-bind(color);
}

.glow {
  /* box-shadow: 0 0 8px 2px v-bind(color); */
  /* box-shadow: inset 0 0 40px #000; */
  box-shadow:
    inset 0 0 20px color-mix(in srgb, v-bind(colorOn) 40%, v-bind(colorOff) 60%),
    0 0 8px 2px color-mix(in srgb, v-bind(colorOn) 60%, v-bind(colorOff) 40%);
}
</style>
