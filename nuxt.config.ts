export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false, // Client-side only rendering
  nitro: {
    static: true,
    prerender: {
      routes: ['/']
    }
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  app: {
    head: {
      title: 'Missed Steak - Vegetarian Recipes',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Vegetarian recipes that will show you that becoming a vegetarian is not a missed steak' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/img/salad.png' }
      ],
      script: [
        {
          src: 'https://use.fontawesome.com/releases/v5.15.3/js/all.js',
          crossorigin: 'anonymous'
        },
        {
          src: 'https://code.jquery.com/jquery-3.5.1.min.js'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js'
        }
      ]
    }
  },
  css: [
    '~/assets/css/global.css'
  ],
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Montserrat: [400, 700],
      Lato: {
        wght: [400, 700],
        ital: [400, 700]
      }
    },
    display: 'swap'
  },
  runtimeConfig: {
    public: {
      githubRepo: process.env.NUXT_PUBLIC_GITHUB_USERNAME_SLASH_REPO || 'magalipujol/missedSteak'
    }
  }
})