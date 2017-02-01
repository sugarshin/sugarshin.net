import fs from 'fs'
import test from 'ava'
import pug from 'pug'
// import stylus from 'stylus'

test('Render html correctly', t => {
  const html = pug.renderFile('./src/index.pug', { pretty: true, octicons: require('octicons') })
  t.truthy(html)
})

// TODO:
// test('Build css correctly', async t => {
//   const src = fs.readFileSync('./src/index.styl', { encoding: 'utf8' })
//   const actual = new Promise((resolve, reject) => {
//     stylus(src)
//     .use(require('poststylus')([
//       require('autoprefixer')({ browsers: ['last 3 versions'] }),
//       require('css-mqpacker'),
//       require('postcss-flexbugs-fixes'),
//       require('postcss-import')(),
//     ]))
//     .render((err, css) => {
//       if (err) reject(err)
//       resolve(css)
//     })
//   })
//   t.truthy(await actual)
// })
