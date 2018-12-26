// Import functionality from our user-defined tool box
const loadImage = require('../toolbox/image_prep/image-reader');
const buildCanvas = require('../toolbox/image_prep/canvas-builder');

module.exports = (toolbox) => {
    toolbox.imagePrimer = {
        loadImage,
        buildCanvas,
    };
};
