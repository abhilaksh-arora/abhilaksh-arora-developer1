<template>
  <section id="freelancer" class="freelancer">
    <h1>I Am Available For Freelancer.</h1>
    <p>We provide high standard clean website for your business solutions</p>
    <a
      id="contact-nav"
      ref="contact"
      class="btn btn-color scrollto"
      @click="scrollToView('contact')"
      >Contact Me</a
    >
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
