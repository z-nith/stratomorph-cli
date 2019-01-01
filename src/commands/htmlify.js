/**
 * TODO:
 * 1. Need create a template html file for this command to be filled up by palette
 * 2. Handle additional options for tablifying, and output files based on colors
 */
var { aggregateIgnoredOptions, hasActionableArguments } = require('../lib/argValidator');
const { USAGE_STRINGS } = require('../lib/constants');

module.exports = {
    name: 'htmlify',
    run: async (toolbox) => {
        const { print, colorQuantization, imagePrimer, paletteReporter } = toolbox;

        // Step 1: Gather params and options from CLI input.
        let params = toolbox.parameters.string;
        let options = toolbox.parameters.options;

        console.log(options);

        // Only continue with execution if proper input was supplied
        if (hasActionableArguments(params)) {
            const ignoredOptions = aggregateIgnoredOptions(options);
            print.warning(
                `The following options could not be interpreted and will be ingored: ${ignoredOptions}`,
            );
            var spinner;

            try {
                // Load image source, gracefully exit if image source is null.
                spinner = print.spin('Loading Image');
                let imageBuffer = await imagePrimer.loadImage(params);

                // Draw image on canvas
                spinner.succeed('Image Loaded. Building Image Canvas...');
                let imageCanvas = await imagePrimer.buildCanvas(imageBuffer);
                spinner.succeed('Image Canvas Built. Analyzing Image...');

                // Build color palette by analyzing image colors
                let colorPalette = await colorQuantization(imageCanvas);
                spinner.succeed('🌄 Analysis Complete. Building Color Palette...');

                // Output resulting palette based on options
                spinner.stopAndPersist({ symbol: '🎨', text: 'Color Palette Ready!' });
                paletteReporter.printColorTable(colorPalette);
            } catch (error) {
                spinner.fail(error);
            }
        } else {
            print.error(`Usage: ${USAGE_STRINGS['htmlify']}`);
        }
    },
};
