import fs from 'fs';
import test from 'ava';
import pug from 'pug';
import stylus from 'stylus';

test('Render html correctly', t => {
  const spec = fs.readFileSync('./fixtures/html', { encoding: 'utf8' });
  const actual = pug.renderFile('../src/index.pug', { pretty: true });
  t.is(spec, actual);
});

test('Build css correctly', async t => {
  const poststylus = require('poststylus');
  const spec = fs.readFileSync('./fixtures/css', { encoding: 'utf8' });
  const src = fs.readFileSync('../src/index.styl', { encoding: 'utf8' });
  const actual = new Promise((resolve, reject) => {
    stylus(src)
    .use(poststylus([
      require('autoprefixer')({ browsers: ['last 3 versions'] }),
      require('css-mqpacker'),
      require('postcss-flexbugs-fixes'),
      require('postcss-import')()
    ]))
    .render((err, css) => {
      if (err) reject(err);
      resolve(css);
    });
  });
  t.is(await actual, spec);
});
