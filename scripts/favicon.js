const fs = require('fs');
const favicons = require('favicons');
const toIco = require('to-ico');

const source = './src/portrait.png';
const outDir = 'build';
const configuration = {
  icons: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    opengraph: false,
    twitter: false,
    windows: false,
    yandex: false
  }
};
const target = 'favicon-32x32.png';

favicons(source, Object.assign({}, favicons.config, configuration), (err, res) => {
  if (err) throw new Error(err);
  const iconBuffers = res.images.filter(({ name }) => name === target).map(({ name, contents }) => contents);
  toIco(iconBuffers)
    .then(buf => {
      fs.writeFileSync(`./${outDir}/favicon.ico`, buf);
      console.log('Success create favicon !');
    })
    .catch(err => { throw new Error(err); });
});
