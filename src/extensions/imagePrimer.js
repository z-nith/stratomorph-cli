/**
 * The Image Primer Tool-set is responsible for preparing the input
 * image for analysis using the Color Quantification Lib. This involves
 * the following steps:
 *
 * 1. Load the image from the local filesystem
 * 2. Using Loaded image, build a Canvas instance that can digested by
 *    Image Quantifier algorithm.
 */
const { filesystem } = require('gluegun/filesystem');
const { ImgSourceNotFoundError } = require('../lib/errorClasses');

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

/**
 * TODO:
 * 1. Need to add a function that can handle dynamically loading an image from a filesystem or a url
 * 2. Need to add graceful error handling when system fails (research needed on proper way to do this.)
 */

/**
 * Reads an image from the local file system as a buffer
 * @param {string} imagePath
 *
 * returns image buffer.
 */
const loadImage = (imagePath) => {
    const Canvas = require('canvas');
    const Image = Canvas.Image;
    let img = new Image();

    let imageBuffer = filesystem.read(imagePath, 'buffer');
    if (!imageBuffer) {
        throw new ImgSourceNotFoundError(
            `Unable Find Image Resource at ${imagePath}, please verify your input path`,
        );
    }

    img.src = imageBuffer;

    return img;
};

module.exports = async (toolbox) => {
    toolbox.imagePrimer = {
        loadImage,
        buildCanvas,
    };
};
