/**
 * Builds an array of color objects in form
 * {
 *   r: number,
 *   b: number,
 *   a: number,
 * }
 *
 * from the raw color palette output of image
 * @param {Array} rawColorPalette
 */
const formatColorPalette = (rawColorPalette) => {
    return rawColorPalette.map((colorArray) => {
        let rgb = ` rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;

        let hex = '#NOT_IMPLEMENTED';

        let cmyk = 'NOT_IMPLEMENTED';

        return [rgb, hex, cmyk];
    });
};

module.exports = formatColorPalette;
