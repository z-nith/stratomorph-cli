// Import functionality from our user-defined tool box
const printColorTable = require('../toolbox/color_palette_output/table-generator');

module.exports = (toolbox) => {
    toolbox.paletteReporter = {
        printColorTable,
    };
};
