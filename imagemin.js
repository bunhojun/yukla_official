const imagemin = require('imagemin');
const imageminJpegoptim = require('imagemin-jpegoptim');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  await imagemin(['images/*.{jpg,png}'], {
    destination: 'src/assets',
    plugins: [
      imageminJpegoptim({
        max: 30,
      }),
      imageminPngquant({
        quality: [0.3, 0.35],
      }),
    ],
  });
})();
