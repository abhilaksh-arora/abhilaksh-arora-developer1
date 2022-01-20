<template>
  <section id="blogs" class="blogs">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Blogs</h2>
        <p>
          We provide high standard clean website for your business solutions
        </p>
      </div>
      <div class="row justify-content-center">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="col-md-3 m-4 card"
        >
          <img
            class="card-img-top"
            :src="item.image.url"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{{ $prismic.asText(item.heading) }}</h5>
            <p class="card-text ellipsis">
              {{ $prismic.asText(item.description) }}
            </p>
            <button
              type="button"
              class="btn btn-color"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click="previewModal(index)"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <div v-if="isVisible">
        <ModalsSection
          :data="data[pos]"
          :is-visible="isVisible"
          @close="previewModal"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { blogs: { type: Object, default: () => {} } },
  data() {
    return {
      modal: true,
      isVisible: false,
      pos: -1,
    }
  },
  computed: {
    data() {
      return this.blogs.data.blogs
    },
  },
  methods: {
    previewModal(index) {
      this.isVisible = !this.isVisible
      this.pos = index
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
  display: v;
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
</style>
