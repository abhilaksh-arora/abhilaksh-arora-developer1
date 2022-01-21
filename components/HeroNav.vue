<template>
  <!-- <nav class="row navbar navbar-expand-lg">
    <h1>
      <a class="col-6 navbar-brand mt-1 pl-5" href="#"
        >Abhilaksh Arora. <br />Developer</a
      >
    </h1>
    <div class="col-6 navbar-nav nav-list">
      <a class="nav-item nav-link active" href="#"
        >Home <span class="sr-only">(current)</span></a
      >
      <a class="nav-item nav-link" href="#">About Me</a>
      <a class="nav-item nav-link" href="#">Services</a>
      <a class="nav-item nav-link" href="#">Portfolio</a>
      <a class="nav-item nav-link" href="#">Testimonials</a>
      <a class="nav-item nav-link" href="#">Contact Me</a>
      <a class="nav-item nav-link btn btn-color" href="#">Get Started</a>
    </div>
  </nav> -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">
        <h1>
          <a id="hero-nav" class="scrollto" @click="scrollToView('hero')"
            ><h1 class="nav-font1">Abhilaksh Arora.</h1>
            <h1 class="nav-font2">Developer</h1></a
          >
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <a
              id="hero-nav"
              class="nav-link scrollto"
              @click="scrollToView('hero')"
              >Home</a
            >
          </li>
          <li>
            <a
              id="about-nav"
              class="nav-link scrollto"
              @click="scrollToView('about')"
            >
              About
            </a>
          </li>
          <li>
            <a
              id="services-nav"
              class="nav-link scrollto"
              @click="scrollToView('services')"
              >Services</a
            >
          </li>
          <li>
            <a
              id="portfolio-nav"
              class="nav-link scrollto"
              @click="scrollToView('portfolio')"
              >Portfolio</a
            >
          </li>
          <li>
            <a
              id="testimonials-nav"
              class="nav-link scrollto"
              @click="scrollToView('testimonials')"
              >Testimonials</a
            >
          </li>
          <li>
            <a
              id="blogs-nav"
              class="nav-link scrollto"
              @click="scrollToView('blogs')"
              >Blogs</a
            >
          </li>
          <li>
            <a
              id="contact-nav"
              class="nav-link scrollto"
              @click="scrollToView('contact')"
              >Contact</a
            >
          </li>
          <li>
            <a
              id="about-nav"
              class="btn btn-color getstarted scrollto"
              @click="scrollToView('about')"
              >Get Started</a
            >
          </li>
        </ul>
        <button class="mobile-nav-toggle" @click="mobileNavView()">
          <svg-navSVG />
        </button>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    scrollToView(section) {
      this.$emit('scrollTo', section)
      const div = document.querySelector('.active')
      if (div != null) div.classList.replace('active', 'non-active')

      document.getElementById(section + '-nav').className = 'active'

      const divDisable = document.querySelector('#navbar')
      divDisable.classList.remove('navbar-mobile')
    },
    mobileNavView() {
      const div = document.querySelector('#navbar')
      div.classList.toggle('navbar-mobile')
    },
  },
}
</script>
<style></style>
