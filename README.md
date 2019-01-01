<p align="left">
  <img
    src="https://user-images.githubusercontent.com/16481834/50459026-34787a80-092d-11e9-84d2-0311eb136604.png"
    height="100"
  />
</p>

---
![](https://img.shields.io/badge/min%20node%20version-v7.6%2B-%185f73.svg?style=flat-square)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&colorB=185f73)](https://github.com/prettier/prettier)
![](https://img.shields.io/github/stars/jmeza081/stratomorph-cli.svg?label=Stars&style=flat-square&colorB=d74b4b)
![](https://img.shields.io/github/issues-raw/jmeza081/stratomorph-cli.svg?style=flat-square&colorB=185f73)
![https://github.com/Jmeza081/stratomorph-cli/blob/master/LICENSE](https://img.shields.io/badge/license-MIT-d74b4b.svg?style=flat-square)


Stratomorph is a Node.js CLI color quantifier.

Give an image 🌄 . Get a nicely formatted color palette. It's that simple! 🎨
- [Docs](https://github.com/Jmeza081/stratomorph-cli/blob/master/docs/commands.md)
- [Contribute](https://github.com/Jmeza081/stratomorph-cli#contributing)
- [Request a Feature](https://github.com/Jmeza081/stratomorph-cli/issues/new)


## Installation

[Instructions]

To verify the installation:
```
$ stratomorph -v
```

Should print out:
```
███████╗████████╗██████╗  █████╗ ████████╗ ██████╗ ███╗   ███╗ ██████╗ ██████╗ ██████╗ ██╗  ██╗
██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗████╗ ████║██╔═══██╗██╔══██╗██╔══██╗██║  ██║
███████╗   ██║   ██████╔╝███████║   ██║   ██║   ██║██╔████╔██║██║   ██║██████╔╝██████╔╝███████║
╚════██║   ██║   ██╔══██╗██╔══██║   ██║   ██║   ██║██║╚██╔╝██║██║   ██║██╔══██╗██╔═══╝ ██╔══██║
███████║   ██║   ██║  ██║██║  ██║   ██║   ╚██████╔╝██║ ╚═╝ ██║╚██████╔╝██║  ██║██║     ██║  ██║
╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝

0.0.1
```

## Features

- Input an image file, get a color palette `.html`
- Choose to order colors based on luminosity
- Select the number of colors returned as a palette.
- Tweak the returned colors' brightness and contrast
- Choose color model returned by cli as `rgb`, `hex`, `cmyk`
- Get the color palette returned as a `.json` object

## Basic Usage

sample commands

## Documentation

Link to github pages

## Contributing
**ATTN: NOT PUBLISHED YET**
```
$ yarn install [packageName]
$ yarn link
$ stratomorph
```

## About

Built with 💪🏽 & the following libraries

- [gluegun](https://github.com/infinitered/gluegun/) - Build your CLI in Node.js
- [canvas](https://www.npmjs.com/package/canvas) - A Node.JS port of Canvas to build the necessary `imageData` used by CLI.
- [rgbquant](https://github.com/leeoniya/RgbQuant.js) - Quantify colors found in an image by leveraging the [Median Cut Algorithm](https://en.wikipedia.org/wiki/Median_cut)
- [color](https://github.com/Qix-/color) - Manipulate colors using Javascript
- [validator](https://github.com/chriso/validator.js) - To sanitize and sanity-check user input
