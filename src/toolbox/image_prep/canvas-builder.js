/**
 * Builds a Canvas object from the loaded image buffer
 * @param {ImageBuffer} image
 *
 * returns canvas object
 */
const buildCanvas = (image) => {
    const Canvas = require('canvas');

    let canvas = Canvas.createCanvas(image.width, image.height);
    let context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, image.width, image.height);

    return canvas;
};

module.exports = buildCanvas;
