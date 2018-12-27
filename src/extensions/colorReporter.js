/**
 * The Palette Reporter is mainly responsible for reporting the quantified
 * colors of the input image back to the end-user. This is dependent on the user's
 * specified flags:
 * - default: prints color profile to console a table
 * - json file: returns color profile as a .json file
 * - html file: returns color profile as a .html file
 */
const printColorTable = require('../toolbox/paletteReporting/printTable');

module.exports = (toolbox) => {
    toolbox.paletteReporter = {
        printColorTable,
    };
};
