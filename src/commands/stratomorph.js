module.exports = {
  name: 'stratomorph',
  run: async toolbox => {
    const { print, colorExtractor, imageReader } = toolbox
    const ora = require('ora')

    const spinner = ora('Reading Image').start()
    let imageCanvas = await imageReader('./sample_images/sample.jpg')
    spinner.succeed('Image read')



    spinner.text = '';
    colorExtractor(imageCanvas);
    spinner.succeed('Image Analyzed');


    print.info('Done')
  }
}
