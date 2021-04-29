const imagemin = require('imagemin');
const imageminJpegoptim = require('imagemin-jpegoptim');
const imageminPngquant = require('imagemin-pngquant');

/**
 * node imagemin -> minify images in the image directory
 * node imagemin warned -> minify images in the warned_images directory
 * note: warned images = images that are so big
 *       that can't be minified the same way normal images get
 */
(async () => {
  const isTooBig = process.argv[2] && process.argv[2] === 'warned';
  const quality = isTooBig ? 15 : 30;
  const path = isTooBig ? 'warned_images' : 'images';
  await imagemin([`${path}/*.{jpg,png}`], {
    destination: 'src/assets',
    plugins: [
      imageminJpegoptim({
        max: quality,
      }),
      imageminPngquant({
        quality: [quality / 100, quality / 100],
      }),
    ],
  });
})();
