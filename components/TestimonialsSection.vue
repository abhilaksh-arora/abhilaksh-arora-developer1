<template>
  <section id="testimonials" class="testimonials section-bg">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          We provide high standard clean website for your business solutions
        </p>
      </div>
      <!-- {{ testimonials.data }} -->
      <div
        class="testimonials-slider swiper"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in testimonials.data.testimonials"
            :key="index"
            class="swiper-slide"
          >
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <img :src="item.image.url" class="testimonial-img" alt="" />
                <h3>{{ $prismic.asText(item.name) }}</h3>
                <h4>{{ $prismic.asText(item.description) }}</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  {{ $prismic.asText(item.comments) }}
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { testimonials: { type: Object, default: () => {} } },

  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>
