<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          We provide high standard clean website for your business solutions
        </p>
        <p>
          View full websites at
          <a
            href="https://www.linkedin.com/in/abhilaksh-arora-94b1861b6/"
            class="netlify"
            >Netlify</a
          >
        </p>
      </div>

      <!-- <div class="row" data-aos="fade-up" data-aos-delay="200">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div> -->

      <div
        class="row portfolio-container"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div
          v-for="(item, index) in portfolio.data.portfolio"
          :key="index"
          class="col-lg-4 col-md-6 portfolio-item filter-app"
        >
          <div class="portfolio-wrap">
            <img class="img-fluid" :src="item.image.url" alt="" />
            <div class="portfolio-info">
              <h4>{{ $prismic.asText(item.heading) }}</h4>
              <p>{{ $prismic.asText(item.description) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { portfolio: { type: Object, default: () => {} } },
}
</script>
