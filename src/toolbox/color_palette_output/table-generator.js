const { print } = require('gluegun/print');
const formatColorPalette = require('../../helpers/color_formatter');

/**
 * Prints a table output of the color palette from the image input.
 * @param {string} imagePath
 *
 * returns image buffer.
 */
const printColorTable = (colorPalette) => {
    let formattedColors = formatColorPalette(colorPalette);

    print.table(
        [
            ['Raw rgb', 'Hex', 'CMQK'],
            ...formattedColors
        ],
        { format: 'markdown' },
    );
};

module.exports = printColorTable;
