<script setup lang="ts">
const clock = useClock();
const storage = useLocalStorage();
const config = ref({ ...clock.getConfig(), ...storage.getConfig() });
const { setParameter, getParameter } = useParams();

onMounted(() => {
  clock.setConfig(config.value);
  // Override config with params
  const param = getParameter('config');
  if (!param) return;
  const override = JSON.parse(param);
  console.log(override);
  config.value = override;
  clock.setConfig(config.value);
});

function save() {
  clock.setConfig(config.value);
  storage.setConfig(clock.getConfig());
  console.log(config.value);
}

function share() {
  setParameter('config', JSON.stringify(config.value));
  // navigator.clipboard.writeText(location.href);
}

function reset() {
  config.value = clock.getDefaultConfig();
}
</script>
<template>
  <div class="settings m-1">
    <div class="input-group mb-1">
      <div class="input-group-text">
        Hour L
      </div>
      <input v-model="config.hourLeftColor" type="color" class="form-control form-control-color">
      <span class="input-group-text">
        Hour R
      </span>
      <input v-model="config.hourRightColor" type="color" class="form-control form-control-color">
      <span class="input-group-text">
        Minute L
      </span>
      <input v-model="config.minuteLeftColor" type="color" class="form-control form-control-color">
      <span class="input-group-text">
        Minute R
      </span>
      <input v-model="config.minuteRightColor" type="color" class="form-control form-control-color">
    </div>

    <div class="input-group mb-1">
      <span class="input-group-text">
        Update interval
      </span>
      <input v-model="config.updateInterval" type="number" class="form-control" min="1000" max="30000" step="500">
      <span class="input-group-text">ms (1000-30000)</span>
    </div>

    <div class="input-group mb-1">
      <span class="input-group-text">
        Pixel size
      </span>
      <input v-model="config.pixelSize" type="number" class="form-control" min="16" max="256" step="1">
      <span class="input-group-text">px (32-256)</span>
    </div>

    <div>
      <button class="btn btn-outline-warning" @click="reset">
        Reset
      </button>
      <button class="btn btn-outline-info mx-1" @click="share">
        Share
      </button>
      <button class="btn btn-success float-end" @click="save">
        Save
      </button>
    </div>
  </div>
</template>
<style scoped>
.input-group-text {
  /* min-width: 120px; */
  text-align: center;
  display: inline-block;
}
</style>
