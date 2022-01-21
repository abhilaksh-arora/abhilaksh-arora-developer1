<template>
  <section id="hero" class="d-flex mb-0 mb-lg-2">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
        >
          <h1 data-aos="fade-up">
            Grow your business<br />
            with Us
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="400">
            We are team of talented designers with mordern web solutions.
          </h2>
          <div data-aos="fade-up" data-aos-delay="800">
            <a
              id="about-nav"
              ref="about"
              class="btn-get-started scrollto"
              @click="scrollToView('about')"
              >Get Started</a
            >
          </div>
        </div>
        <div
          class="col-lg-6 mt-sm-4 pt-5 pt-lg-0 order-1 order-lg-2 hero-img"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="@/assets/img/hero-img.png"
            class="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    scrollToView(section) {
      this.$emit('scrollTo', section)
      const div = document.querySelector('.active')
      if (div != null) div.classList.replace('active', 'non-active')

      document.getElementById(section + '-nav').className = 'active'
    },
  },
}
</script>
