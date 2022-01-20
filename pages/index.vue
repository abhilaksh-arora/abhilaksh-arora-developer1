<!-- eslint-disable  -->
<template>
  <div>
    <HeroNav @scrollTo="scrollTo" />
    <HeroSection ref="hero" @scrollTo="scrollTo" />
    <ClientsSection />
    <AboutUs ref="about" />
    <ServicesSection ref="services" />
    <FeaturesSection />
    <FreelancerSection />
    <PortfolioSection ref="portfolio" :data="data" />
    <TestimonialsSection ref="testimonials" :testimonials="testimonials" />
    <BlogsSection ref="blogs" :blogs="blogs" />
    <FAQsSection :faqs="faqs" />
    <ContactUs ref="contact" />
    <FooterSection />
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params }) {
    const { data } = await $prismic.api.getSingle('portfolio')
    const testimonials = await $prismic.api.getSingle('testimonials')
    const blogs = await $prismic.api.getSingle('blogs')
    const faqs = await $prismic.api.getSingle('faqs')
    return { data, testimonials, blogs, faqs }
  },
  methods: {
    scrollTo(section) {
      const top = this.$refs[section].$el.offsetTop - window.scrollY - 90
      window.scrollBy(0, top)
    },
  },
}
</script>
