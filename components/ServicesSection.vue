<template>
  <!-- <section id="services" class="services">
    <div class="section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
    </div>

    <div class="row">
      <div class="col-md-3 m-4 card">
        <img
          class="card-img-top"
          src="/assets/img/portfolio-1.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="col-md-3 m-4 card">
        <img
          class="card-img-top"
          src="/assets/img/portfolio-1.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="col-md-3 m-4 card">
        <img
          class="card-img-top"
          src="/assets/img/portfolio-1.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </section> -->
  <section id="services" class="services">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          We provide high standard clean website for your business solutions
        </p>
      </div>

      <div class="row">
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div class="icon"><svg-webdevSVG /></div>
            <h4 class="title"><a href="">Website Development</a></h4>
            <p class="description">
              Our custom web development services include both front-end and
              back-end development. Whether it is enhancing an existing
              application or architecting an enterprise application, our
              developers are up for the challenge.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div class="icon"><svg-responsiveSVG /></div>
            <h4 class="title"><a href="">Responsive Design</a></h4>
            <p class="description">
              We ensure that our client’s website is responsive on every device,
              so that no single customer is lost. Our responsive website
              responds to the user’s behavior and environment based on screen
              size, platform, & orientation.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div class="icon"><svg-mobileappSVG /></div>
            <h4 class="title"><a href="">Mobile App</a></h4>
            <p class="description">
              Our profound knowledge of mobile technologies &amp; frameworks,
              help us create secure &amp; scalable Mobile Apps with great UX.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div class="icon"><svg-videoSVG /></div>
            <h4 class="title"><a href="">Video Productions</a></h4>
            <p class="description">
              We create awesome explainer videos of all types, that'd improve
              your brand story telling &amp; user engagement which results in
              higher conversions
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: { data: { type: Object, default: () => {} } },
}
</script>
