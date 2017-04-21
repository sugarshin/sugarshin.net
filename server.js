const url = require('url')
const chalk = require('chalk')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config.dev')
const Template = require('./Template')
const app = express()
const compiler = webpack(config)
const renderDocumentToString = props => '<!doctype html>' + renderToStaticMarkup(<Template {...props} />)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  stats: { colors: true },
  publicPath: config.output.publicPath,
}))
app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
  const html = renderDocumentToString({
    manifest: { 'app.js': config.output.publicPath + 'app.js' },
  })
  res.send(html)
})

const { port } = url.parse('http:' + config.output.publicPath)

app.listen(port, 'localhost', err => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`🦄  ${
    chalk.white('Dev server listening')
  } ${
    chalk.gray('at')
  } ${
    chalk.green(`http://localhost:${port}`)
  }`)
})
