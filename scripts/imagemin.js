const imagemin = require('imagemin');
const pngquant = require('imagemin-pngquant');
const chalk = require('chalk');

imagemin(['src/*.png'], 'build', { plugins: [pngquant()] })
.then(files => {
  files.forEach(({ path }) => {
    console.log(`  ${chalk.bgGreen(' minified ')} ${chalk.gray(path)}`);
  });
});
