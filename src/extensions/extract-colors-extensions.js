const { Image } = require('image-js');

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
    toolbox.colorExtractor = async () => {
      console.log('called color extractor.');
      let image = await Image.load('./sample_images/sample.jpg');
      let histogram = image.getColorHistogram({useAlpha: false});
      console.log(histogram.length);
    }
  }

