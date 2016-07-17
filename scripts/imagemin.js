const imagemin = require('imagemin');
const pngquant = require('imagemin-pngquant');
const chalk = require('chalk');

imagemin(['src/*.png'], 'build', { plugins: [pngquant()] })
.then(files => {
  files.forEach(({ data, path }) => {
    try {
      fs.writeFileSync(path, data);
    } catch (e) {}
    console.log(`  ${chalk.bgGreen(' minified ')} ${chalk.gray(path)}`);
  });
});
