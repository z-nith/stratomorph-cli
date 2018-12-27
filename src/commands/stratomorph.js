module.exports = {
    name: 'htmlify',
    run: async (toolbox) => {
        let dummyPath = './sample_images/sample2.jpg';
        const { print, colorQuantifier, imagePrimer, paletteReporter } = toolbox;
        const chalk = require('chalk');

        const spinner = print.spin('Loading Image');
        let imageBuffer = await imagePrimer.loadImage(dummyPath);
        spinner.succeed('Image Loaded. Building Image Canvas...');
        let imageCanvas = await imagePrimer.buildCanvas(imageBuffer);
        spinner.succeed('Image Canvas Built. Analyzing Image...');

        let colorPalette = await colorQuantifier(imageCanvas);
        spinner.succeed('🌄 Analysis Complete. Building Color Palette...');

        spinner.stopAndPersist({ symbol: '🎨', text: 'Color Palette Ready!' });
        paletteReporter.printColorTable(colorPalette);
    },
};
