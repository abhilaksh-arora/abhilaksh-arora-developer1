<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Abhilaksh Arora.<br />Developer</h3>
            <p>
              89, Prabhat Nagar<br />
              Bareilly, Uttar Pradesh<br />
              India <br /><br />
              <strong>Phone:</strong> +91 7409882374<br />
              <strong>Email:</strong> arora.abhilaksh@gmail.com<br />
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <svg-arrowSVG />
                <a id="hero-nav" class="scrollto" @click="scrollToView('hero')"
                  >Home</a
                >
              </li>
              <li>
                <svg-arrowSVG />
                <a
                  id="about-nav"
                  class="scrollto"
                  @click="scrollToView('about')"
                >
                  About
                </a>
              </li>
              <!-- <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
              </li> -->
              <li>
                <svg-arrowSVG />
                <a
                  id="portfolio-nav"
                  class="scrollto"
                  @click="scrollToView('portfolio')"
                  >Portfolio</a
                >
              </li>
              <li>
                <svg-arrowSVG />
                <a
                  id="testimonials-nav"
                  class="scrollto"
                  @click="scrollToView('testimonials')"
                  >Testimonials</a
                >
              </li>
              <li>
                <svg-arrowSVG />
                <a
                  id="blogs-nav"
                  class="scrollto"
                  @click="scrollToView('blogs')"
                  >Blogs</a
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <svg-arrowSVG /><a
                  id="contact-nav"
                  class="scrollto"
                  @click="scrollToView('contact')"
                  >Web Design</a
                >
              </li>
              <li>
                <svg-arrowSVG />
                <a
                  id="contact-nav"
                  class="scrollto"
                  @click="scrollToView('contact')"
                  >Web Development</a
                >
              </li>
              <li>
                <svg-arrowSVG />
                <a
                  id="contact-nav"
                  class="scrollto"
                  @click="scrollToView('contact')"
                  >App Development</a
                >
              </li>
              <li>
                <svg-arrowSVG />
                <a
                  id="contact-nav"
                  class="scrollto"
                  @click="scrollToView('contact')"
                  >Video Productions</a
                >
              </li>
              <li>
                <svg-arrowSVG />
                <a
                  id="contact-nav"
                  class="scrollto"
                  @click="scrollToView('contact')"
                  >ChatBot Development</a
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Subscribe to my newsletter for updates!</p>
            <form action="" method="post">
              <input type="email" name="email" /><input
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4 justify-content-between">
      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright@2022 <strong><span>Abhilaksh Arora</span></strong
          >. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/ -->
          Designed by
          <a href="https://www.linkedin.com/in/abhilaksh-arora-94b1861b6/"
            >Abhilaksh Arora</a
          >
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="https://www.facebook.com/abhilaksh.arora" class="facebook"
          ><svg-facebookSVG
        /></a>
        <a
          href="https://instagram.com/abhiii_abhilaksh?utm_medium=copy_link"
          class="instagram"
          ><svg-instagramSVG
        /></a>
        <a href="https://twitter.com/abhilaksh_arora" class="twitter"
          ><svg-twitterSVG
        /></a>
        <a
          href="https://app.netlify.com/teams/abhilaksh-arora/overview"
          class="linkedin"
          ><svg-linkedinSVG
        /></a>
        <a href="https://github.com/abhilaksh-arora" class="github"
          ><svg-githubSVG
        /></a>
        <a
          href="https://www.linkedin.com/in/abhilaksh-arora-94b1861b6/"
          class="netlify"
          ><svg-netlifySVG
        /></a>
      </div>
    </div>
  </footer>
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
  },
}
</script>
