<template>
  <div>
    <div class="modal-grey-area"></div>
    <div :class="{ 'modal-visible': isVisible, modal: !isVisible }">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body d-flex flex-column flex-lg-row">
            <div class="modal-img">
              <img :src="data.image.url" alt="" width="500px" height="500px" />
            </div>
            <div class="modal-content-body">
              <button
                type="button"
                class="close pr-3 pt-2"
                @click="closeModal()"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="text-center pt-5 p-1">
                <h3>{{ $prismic.asText(data.heading) }}</h3>
                <hr />
              </div>
              <div class="modal-description">
                <p>{{ $prismic.asText(data.description) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isVisible: { type: Boolean, default: () => {} },
    data: { type: Object, default: () => {} },
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.modal-visible {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}
.modal-grey-area {
  z-index: 500;
  position: fixed;
  height: 100%;
  width: 100%;
  background: black;
  opacity: 75%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.card img {
  height: 150px;
}
.modal-body {
  padding: 0 !important;
}
@media (min-width: 576px) {
  .modal-dialog {
    min-width: 800px !important;
  }
}
</style>
