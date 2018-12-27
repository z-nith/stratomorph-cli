/**
 * The Image Primer Tool-set is responsible for preparing the input
 * image for analysis using the Color Quantification Lib. This involves
 * the following steps:
 *
 * 1. Load the image from the local filesystem
 * 2. Using Loaded image, build a Canvas instance that can digested by
 *    Image Quantifier algorithm.
 */
const loadImage = require('../toolbox/imagePrep/imageLoader');
const buildCanvas = require('../toolbox/imagePrep/canvasBuilder');

module.exports = (toolbox) => {
    toolbox.imagePrimer = {
        loadImage,
        buildCanvas,
    };
};
