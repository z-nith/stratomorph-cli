module.exports = {
    name: 'jsonify',
    description: 'JSONifies the quantized color palette to a json file',
    run: async (toolbox) => {
        console.log('Running Your CLI. Options passed: ');
        console.log(toolbox.parameters.options);
        console.log('Command Arguments');
        console.log(toolbox.parameters.string);

        toolbox.print.error('That command is not recognized');
        toolbox.print.warning('These Commands were not recognized and were ignored: ');
        toolbox.print.debug('IM for debugging your cli only!');

        // let dummyPath = './sample_images/sample2.jpg';
        // const { print, colorQuantifier, imagePrimer, paletteReporter } = toolbox;
        // const chalk = require('chalk');

        // const spinner = print.spin('Loading Image');
        // let imageBuffer = await imagePrimer.loadImage(dummyPath);
        // spinner.succeed('Image Loaded. Building Image Canvas...');
        // let imageCanvas = await imagePrimer.buildCanvas(imageBuffer);
        // spinner.succeed('Image Canvas Built. Analyzing Image...');

        // let colorPalette = await colorQuantifier(imageCanvas);
        // spinner.succeed('🌄 Analysis Complete. Building Color Palette...');

        // spinner.stopAndPersist({ symbol: '🎨', text: 'Color Palette Ready!' });
        // paletteReporter.printColorTable(colorPalette);
    },
};
