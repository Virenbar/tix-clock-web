<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
  size?: number
  state?: BlockState
}
const size = props.size || 1;
const colorOff = "black";
const index = (row: number, col: number) => (row - 1) * size + col - 1; 
</script>
<template>
  <div class="d-inline-block">
    <div v-for="r in 3" :key="r" class="row">
      <div v-for="c in size" :key="c" class="col col-auto">
        <TIXPixel :class="{ hide: !state }" :color-off="colorOff" :color-on="state?.color" :lit="state?.pixels[index(r, c)]">
          {{ index(r, c) }}
        </TIXPixel>
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
</style>
