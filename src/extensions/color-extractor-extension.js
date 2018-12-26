module.exports = (toolbox) => {
    toolbox.colorExtractor = async (imageCanvasInstance) => {
        var RgbQuant = require('rgbquant');
        const constants = require('../constants');

        // This is unfortunately NOT asynchronous.
        var quantifier = new RgbQuant(constants.QUANTIFIER_CONFIG);

        // Builds image histogram data.
        quantifier.sample(imageCanvasInstance);
        return quantifier.palette(true);
    };
};
