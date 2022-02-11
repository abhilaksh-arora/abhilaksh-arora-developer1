<template>
  <section id="clients" class="clients mt-0 mt-lg-4">
    <div class="container">
      <div class="row">
        <div
          v-for="(item, index) in clients.data.clients"
          :key="index"
          class="col-lg-2 col-md-4 col-6"
        >
          <img
            :src="item.image.url"
            class="img-fluid"
            alt=""
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { clients: { type: Object, default: () => {} } },
  data() {
    return {}
  },
}
</script>
