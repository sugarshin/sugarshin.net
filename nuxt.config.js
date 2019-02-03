const settings = require('./settings')

module.exports = {
  srcDir: 'src/',
  mode: 'universal',
  generate: {
    dir: 'build',
    fallback: '404.html'
  },
  head: {
    title: settings.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: settings.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#323b43' },
  css: ['~/assets/css/lib.css', '~/assets/css/app.styl'],
  plugins: [],
  modules: ['@nuxtjs/markdownit'],
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
