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
          v-for="(item, index) in document.data.blogs"
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
            <p class="card-text">
              {{ $prismic.asText(item.description) }}
            </p>
            <a href="#" class="btn btn-color">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { data: { type: Object, default: () => {} } },
  data() {
    return {
      document: {},
    }
  },
  async fetch() {
    this.document = await this.$prismic.api.getSingle('blogs')
  },
}
</script>
