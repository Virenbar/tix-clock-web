<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
  size?: number
  state?: BlockState
}
const size = props.size || 1;
const index = (row: number, col: number) => (row - 1) * size + col - 1;
const colorOff = 'black';
const colorOn = computed(() => props.state?.color || 'green');
const inner = computed(() => color_mix(colorOn.value, colorOff, 0.60));
const outer = computed(() => color_mix(colorOn.value, colorOff, 0.40));
</script>
<template>
  <div class="d-inline-block">
    <div v-for="r in 3" :key="r" class="row">
      <div v-for="c in size" :key="c" class="col col-auto">
        <div class="pixel" :class="{ hide: !state, glow: state?.pattern[index(r, c)] }">
          <!-- {{ index(r, c) }} -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.col {
  padding: 0;
}

.row {
  margin: 0;
}

.hide {
  visibility: hidden;
}

.pixel {
  transition: all .5s;
  margin: min(v-bind("$clock.pixelSize.value / 16 + 'px'"), 8px);
  width: v-bind("$clock.pixelSize.value + 'px'");
  height: v-bind("$clock.pixelSize.value + 'px'");
  border-radius: v-bind("$clock.pixelSize.value / 8 + 'px'");
  background-color: v-bind(colorOff);
}

.glow {
  box-shadow: inset 0 0 12px 3px v-bind(inner), 0 0 12px 3px v-bind(outer);
  background-color: v-bind(colorOn);
}

/* .glow {
  box-shadow:
    inset 0 0 12px 3px color-mix(in srgb, v-bind(colorOn) 40%, v-bind(colorOff) 60%),
    0 0 12px 3px color-mix(in srgb, v-bind(colorOn) 60%, v-bind(colorOff) 40%);
  background-color: v-bind(colorOn);
} */
</style>
