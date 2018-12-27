/**
 * The Color Quantifier is mainly responsible for digesting the
 * loaded image data as Canvas instance and performing the following
 * actions:
 * 1. Perform Image Analysis (More than likely a histogram)
 * 2. Builds Reduced Color Palette based on analysis step.
 */
module.exports = (toolbox) => {
    toolbox.colorQuantifier = async (imageCanvasInstance) => {
        var RgbQuant = require('rgbquant');
        const constants = require('../constants');

        // This is unfortunately NOT asynchronous.
        var quantifier = new RgbQuant(constants.QUANTIFIER_CONFIG);

        // Builds image histogram data.
        quantifier.sample(imageCanvasInstance);
        return quantifier.palette(true, false); // .palette(tuples, noSort)
    };
};
