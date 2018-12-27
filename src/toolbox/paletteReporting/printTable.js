const { print } = require('gluegun/print');
const Color = require('color');
const chalk = require('chalk');

/**
 * Digests the raw color palette output in form [[r1, g1, b1], [r2, g2, b2], ...]
 * and maps over each color array to build an color profile for each row in the
 * resulting table.
 *
 * If the user's terminal supports True Color (16 mil colors), we dynamically
 * color the first column the same color as the quantified color.
 *
 * @param {Array} rawColorPalette
 * @returns Array row of color profile
 */
const buildTableRows = (rawColorPalette) => {
    let hasTrueColorSupport = chalk.supportsColor.has16m;

    if (hasTrueColorSupport) {
        let trueColor =
            chalk.bgRed('T') +
            chalk.bgGreen('r') +
            chalk.bgBlue('u') +
            chalk.bgMagenta('e') +
            chalk.bgCyan('C') +
            chalk.bgYellow('o') +
            chalk.bgBlackBright('l') +
            chalk.bgWhiteBright('o') +
            chalk.bgCyanBright('r');
        print.info(`🖍 This terminal has ${trueColor} support 🖍`);
    }

    return rawColorPalette.map((colorArray) => {
        // Build color object from quantified color
        let color = Color.rgb(colorArray);

        // Dynamically chalk background color of returned string
        // based on True Color Support.
        let rgb = color.rgb().object();
        let rbgString = hasTrueColorSupport
            ? chalk.bgRgb(rgb.r, rgb.g, rgb.b)(color.rgb().string())
            : color.rgb().string();

        let hex = color.hex();

        let cmyk = color
            .cmyk()
            .round()
            .string();

        return [rbgString, hex, cmyk];
    });
};

/**
 * Prints a table output of the color palette from the image input.
 * @param {Array} rawColorPalette
 *
 */
const printColorTable = (rawColorPalette) => {
    let formattedColors = buildTableRows(rawColorPalette);

    print.table([['Rgb', 'Hex', 'Cmyk'], ...formattedColors], { format: 'markdown' });
};

module.exports = printColorTable;
