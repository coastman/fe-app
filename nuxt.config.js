
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    './styles/_normalize.css'
    // './styles/variables.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/api.ts',
    './plugins/marked.ts',
    './plugins/vue-extend.ts'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://127.0.0.1:8888',
    browserBaseURL: '/dev',
    proxy: true
  },
  proxy: {
    '/dev': {
      target: 'http://127.0.0.1:8888/',
      changeOrigin: true,
      pathRewrite: { '^/dev': '' }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  // 全局使用 scss 变量, mixins
  styleResources: {
    scss: [
      './styles/_variables.scss'
    ]
  }
}
