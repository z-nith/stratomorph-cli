module.exports = toolbox => {
  toolbox.imageReader = async imagePath => {
    const Canvas = require('canvas')
    const Image = Canvas.Image

    let img
    let can
    let ctx

    img = new Image()
    img.src = toolbox.filesystem.read(imagePath, 'buffer')
    can = Canvas.createCanvas(img.width, img.height)
    ctx = can.getContext('2d')
    ctx.drawImage(img, 0, 0, img.width, img.height)

    return can;
  }
}
