const { filesystem } = require('gluegun/filesystem');

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
