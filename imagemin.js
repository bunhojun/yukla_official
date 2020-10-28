const imagemin = require('imagemin');
const imageminJpegoptim = require('imagemin-jpegoptim');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  await imagemin(['images/*.{jpg,png}'], {
    destination: 'src/assets',
    plugins: [
      imageminJpegoptim({
        max: 45,
      }),
      imageminPngquant({
        quality: [0.5, 0.6],
      }),
    ],
  });
})();
