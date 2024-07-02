<script setup lang="ts">
const HBlock = ref<HTMLElement>();
const MBlock = ref<HTMLElement>();
const vertical = ref(false);

const { hourL, hourR, minuteL, minuteR, setConfig } = useClock();
const { getConfig } = useLocalStorage();
const size = useResize();

async function updateStyle() {
  vertical.value = HBlock.value?.offsetTop != MBlock.value?.offsetTop;
}
watch([size], updateStyle);
onMounted(async () => {
  const config = getConfig();
  if (config) { setConfig(config); }
  await nextTick();
  updateStyle();
});
onUpdated(updateStyle);
</script>
<template>
  <div class="m-auto">
    <div ref="HBlock" class="d-inline-block">
      <TIXBlock :class="{ 'd-none': !vertical }" />
      <TIXBlock :size=1 :state="hourL" />
      <TIXBlock />
      <TIXBlock :size=3 :state="hourR" />
      <TIXBlock :class="{ 'd-none': vertical }" />
    </div>
    <div ref="MBlock" class="d-inline-block">
      <TIXBlock :size=2 :state="minuteL" />
      <TIXBlock />
      <TIXBlock :size=3 :state="minuteR" />
    </div>
  </div>
</template>
