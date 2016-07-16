const imagemin = require('imagemin');
const pngquant = require('imagemin-pngquant');

imagemin(['src/*.png'], 'build', {
  plugins: [pngquant()]
}).then(files => {
  files.forEach(({ data, path }) => fs.writeFileSync(path, data));
  console.log('Success imagemin !');
}).catch(err => { throw new Error(err); });
