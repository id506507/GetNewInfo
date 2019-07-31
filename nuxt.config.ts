
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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { 'http-equiv': 'pragma', content: 'no-cache' },
      { 'http-equiv': 'cache-control', content: 'no-cache' },
      { 'http-equiv': 'expires', content: '0' },
      {theme_color:'$gray-800'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap' },//google font
      {rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}//material icon
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '$gray-800' },
  /*$gray-800
  ** Global CSS
  */
  css: [
    '~/assets/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.ts'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    '@gauseen/nuxt-proxy',
    '@nuxtjs/pwa',
    ['@nuxtjs/component-cache',{
      max:0,
      maxAge:0,
    }],
    ['@nuxtjs/moment'],
    // ['nuxt-i18n',{
    //   locales:[
    //     {
    //       code:'hk',
    //       iso:'zh-HK',
    //       file:'~/locale/hk.json'
    //     },
    //     {
    //       code:'en',
    //       iso:'en-US',
    //       file:'~/locale/en.json'
    //     }
    //   ],
    //   defaultLocale:'hk',
    // }]
  ],
  
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // baseURL:'https://www.ha.org.hk/opendata',
    credentials: false,
    proxyHeaders:false
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
  router:{
    base:'/GetNewInfo/'
  },
  // proxy:[
  //   'https://www.ha.org.hk/opendata/*/*.json'
  // ],
  // proxyTable:{
  //   '/api':{
  //     target:'https://id506507.github.io/GetNewInfo/',
  //     pathRewrite:{'/api':''}
  //   }
  // },
  
}
