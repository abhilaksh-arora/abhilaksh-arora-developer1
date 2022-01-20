<template>
  <section id="faq" class="faq section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Frequently Asked Questions</h2>
        <p>
          We provide high standard clean website for your business solutions
        </p>
      </div>

      <div class="faq-list">
        <ul v-for="(item, index) in faqs.data.faqs" :key="index">
          <li data-aos="fade-up">
            <svg-helpSVG />
            <a
              data-bs-toggle="collapse"
              class="collapse"
              data-bs-target="#faq-list-1"
              >{{ $prismic.asText(item.heading) }}
              <i class="bx bx-chevron-down icon-show"></i
              ><i class="bx bx-chevron-up icon-close"></i
            ></a>
            <div
              id="faq-list-1"
              class="collapse show"
              data-bs-parent=".faq-list"
            >
              <p>
                {{ $prismic.asText(item.description) }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { faqs: { type: Object, default: () => {} } },
}
</script>
