const AVAILABLE_LANGUAGES = ['de', 'it']

export default {
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WeLoveBz',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css', '@/assets/css/animations.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-notification', ssr: false },
    '@/plugins/notify',
    '@/plugins/google-maps',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{ path: '~/components/', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-i18n'],

  i18n: {
    locales: AVAILABLE_LANGUAGES,
    strategy: 'prefix_except_default',
    defaultLocale: 'de',
    vueI18n: {
      fallbackLocale: 'de',
      messages: AVAILABLE_LANGUAGES.reduce(
        (obj, key) => ({
          ...obj,
          [key]: require('./locales/' + key + '.json'),
        }),
        {}
      ),
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^gmap-vue($|\/)/],
    extend: (config) => {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            loader: 'file-loader',
            query: {
              name: 'static/image/[name].[hash:8].[ext]',
            },
          },
          {
            loader: 'vue-svg-loader',
            options: {
              // Optional svgo options
              svgo: {
                plugins: [{ removeViewBox: false }],
              },
            },
          },
        ],
      })
    },
  },

  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'current',
  },

  pageTransition: 'zoom-page',

  telemetry: false,
}
