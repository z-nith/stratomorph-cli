const { filesystem } = require('gluegun/filesystem');
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

    img.src = filesystem.read(imagePath, 'buffer');

    return img;
};

module.exports = loadImage;
