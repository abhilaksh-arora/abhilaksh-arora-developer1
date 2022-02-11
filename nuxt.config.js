export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Abhilaksh Arora | Developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon-abhi.ico' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,600,600i,700,700i',
    },],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-awesome-swiper', mode: 'client', ssr: false },{
    src: '~/plugins/gtag.js',
      mode: 'client'
    }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
     '@nuxtjs/eslint-module',
     '@nuxtjs/prismic'
  ],
  prismic: {
    endpoint: 'https://abhilaksh-arora.cdn.prismic.io/api/v2',
    modern: true
    /* see configuration for more */
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/robots',
  ],
  serverMiddleware: [
    { path: '/api/send', handler: '~/api/app.js' }
  ],
  robots: {
    UserAgent: '*',
    Disallow: '/',
  },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    }
  },
}
