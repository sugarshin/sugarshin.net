const fs = require('fs');
const favicons = require('favicons');
const toIco = require('to-ico');
const chalk = require('chalk');

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
  const buffers = res.images.filter(({ name }) => name === target).map(i => i.contents);
  toIco(buffers)
    .then(buf => {
      const path = `${outDir}/favicon.ico`;
      fs.writeFileSync(path, buf);
      console.log(`  ${chalk.bgGreen(' generate ')} ${chalk.gray(path)}`);
    })
    .catch(err => { throw new Error(err); });
});
