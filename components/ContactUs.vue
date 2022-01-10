<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
        <p>Let's Create something Creative</p>
      </div>
      <div class="card-wrapper">
        <div class="card">
          <div class="svg-card">
            <svg-phoneSVG />
          </div>
          <h2>Call Us On</h2>
          <h6>+917409882374</h6>
        </div>
        <div class="card">
          <div class="svg-card">
            <svg-mailSVG />
          </div>
          <h2>Email Us At</h2>
          <h6>arora.abhilaksh@gmail.com</h6>
        </div>
        <div class="card">
          <div class="svg-card">
            <svg-locationSVG />
          </div>
          <h2>Visit Office</h2>
          <h6>89, Prabhat Nagar</h6>
        </div>
      </div>
      <form @submit.prevent="submitForm">
        <div class="input-wrap">
          <input
            id="name"
            v-model="name"
            type="text"
            class="form-control"
            name="name"
            placeholder="Name"
            required
          />
          <input
            id="company"
            v-model="company"
            type="text"
            class="form-control"
            name="company"
            placeholder="Company"
            required
          />
          <input
            id="phone"
            v-model="phone"
            type="text"
            class="form-control"
            name="phone"
            placeholder="Phone No."
            required
          />
          <input
            id="email"
            v-model="email"
            type="email"
            class="form-control"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="input-wrap-2">
          <input
            id="subject"
            v-model="subject"
            type="text"
            class="form-control"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            v-model="message"
            class="form-control"
            name="message"
            rows="5"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div class="btn-wrapper">
          <button class="btn btn-color">Send Message</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      isVisible: true,
    }
  },
  methods: {
    preview() {
      // eslint-disable-next-line no-undef
      this.isVisible = !this.isVisible
    },
    submitForm() {
      const payload = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        company: this.company,
        subject: this.subject,
        message: this.message,
      }
      axios
        .post('/api/send', payload)
        .then(() => {
          console.log('Message Successfully Sent')
        })
        .catch((error) => {
          console.error(error.msg)
        })
    },
  },
}
</script>
