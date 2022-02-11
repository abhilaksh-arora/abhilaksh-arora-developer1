<!-- eslint-disable  -->
<template>
  <div>
    <HeroNav @scrollTo="scrollTo" />
    <HeroSection ref="hero" @scrollTo="scrollTo" />
    <ClientsSection :clients="clients" />
    <AboutUs ref="about" />
    <ServicesSection ref="services" />
    <TechStackSection />
    <FreelancerSection @scrollTo="scrollTo" />
    <FeaturesSection />
    <PortfolioSection ref="portfolio" :portfolio="portfolio" />
    <TestimonialsSection ref="testimonials" :testimonials="testimonials" />
    <BlogsSection ref="blogs" :blogs="blogs" />
    <FAQsSection :faqs="faqs" />
    <ContactUs ref="contact" />
    <FooterSection @scrollTo="scrollTo" />
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params }) {
    const clients = await $prismic.api.getSingle('clients')
    const portfolio = await $prismic.api.getSingle('portfolio')
    const testimonials = await $prismic.api.getSingle('testimonials')
    const blogs = await $prismic.api.getSingle('blogs')
    const faqs = await $prismic.api.getSingle('faqs')
    return { clients, portfolio, testimonials, blogs, faqs }
  },
  methods: {
    scrollTo(section) {
      const top = this.$refs[section].$el.offsetTop - window.scrollY - 90
      window.scrollBy(0, top)
    },
  },
}
</script>
