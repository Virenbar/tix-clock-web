<template>
  <div>
    <div id="config" class="offcanvas offcanvas-top" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" aria-labelledby="configTitle">
      <div class="offcanvas-header">
        <h5 id="configTitle" class="offcanvas-title">
          TIX Clock Config
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div class="offcanvas-body">
        <Config class="m-auto" />
      </div>
    </div>
    <div
      class="container-fluid text-center position-absolute top-50 start-50 translate-middle" data-bs-toggle="offcanvas"
      data-bs-target="#config" aria-controls="config">
      <TIXClock />
    </div>
  </div>
</template>
<style scoped>
.offcanvas {
  min-height: 250px;
}

.offcanvas>div {
  width: 500px;
  margin: auto;
}
</style>
