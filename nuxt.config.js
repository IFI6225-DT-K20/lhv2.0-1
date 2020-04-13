const nodeExternals = require('webpack-node-externals') // added to whitelist vue-slack carousel

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
    '~/assets/styles/main.styl'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
   // {mode: 'client', src: '~plugins/vue-slick'},
    {mode: 'client', src: '~plugins/owl'} // Only works on client side
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            // whitelist: [/^vue-slick/]
            whitelist: [/^owl/]
          })
        ]
      }
    }
  }
}
