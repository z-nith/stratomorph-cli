# Command Reference for Stratomorph

## Usage

```
Stratomorph

Usage:
  stratomorph htmlify (<image-file-path> | <image-url>) [-o <path> | --output=<path>] [--tablify | -t] [--colorModels <modelName>...] [--paletteCount=<NumberOfColorsDesired>]
  stratomorph jsonify (<image-file-path> | <image-url>) [-o <path> | --output=<path>] [--tablify | -t] [--colorModels <modelName>...] [--paletteCount=<NumberOfColorsDesired>]
  stratomorph -h | --help
  stratomorph --version

Options:
  -h --help     Show this screen.
  --version     Show version.
  -o --output=<path> Where to save output file [default: print to console]
  -t --tablify  Show table output of resulting color palette.
  --colorModels=<modelName>... Controls the color models returned in output file [default: all (rgb, hex, hsl)].
  --paletteCount=<numberOfColors> Controls the number of colors returned in palette [default: 5].
```

### Use cases

#### _Outputting color palette to as an html look-book_

Say I have a sample file name `sample.png`. To generate a `.html` look-book of the color palette we use the following command.

```
$ stratomorph htmlify path/to/my/image/sample.png --output=path/to/output/folder/my_palette.html
```

By default, Stratomorph provides a color profile of all supported color models for each color returned from the CLI. However, if you know which colors models you would like included in the resulting file you can do so appending the `--colorModels` option:

```
$ stratomorph htmlify path/to/my/image/sample.png --output=path/to/output/folder/my_palette.html --colorModels rgb hex
```

Stratomorph also limits (by default) the number of colors included in the final returned color palette. You can override the number of colors returned
by using the `--paletteCount` option:

The following command will output an `.html` file with a color palette consisting of `8` colors, each color represented in `rgb` & `hex`

```
$ stratomorph htmlify path/to/my/image/sample.png --output=path/to/output/folder/my_palette.html --colorModels rgb hex --paletteCount=8
```

You can also append the `--tablify` option to show a markdown-style table of color palette quantifying colors in other color models.

#### _Outputting color palette to as an JSON file_

If I have a sample file name `sample.png`. To generate a formatted `.json` file we do the following:

```
$ stratomorph jsonify path/to/my/image/sample.png --output=path/to/output/folder/my_palette.json
```

`.json` output files are formatted in the following manner:

```
//output_file.json
{
  input_file_name: [
    {
      rgb: {r: number, g: number, a: number},
      hex: string,
      hsl: {h: number, s: number, l: number}
    },
        {
      rgb: {r: number, g: number, a: number},
      hex: string,
      hsl: {h: number, s: number, l: number}
    },
    ...
  ]
}
```

You can further modify the resulting `.json` output by appending the appropriate
flags for the color models you want included. By default, Stratomorph will output all supported color models. However, if you know which color models you want you can do so by doing the following:

```
$ stratomorph jsonify path/to/my/image/sample.png --output=path/to/output/folder/my_palette.json --colorModels rgb hex
```

This would output the following file:

```
//output_file.json
{
  input_file_name: [
    {
      rgb: {r: number, g: number, a: number},
      hex: string
    },
        {
      rgb: {r: number, g: number, a: number},
      hex: string,
    },
    ...
  ]
}
```

The following command will output an `.html` file with a color palette consisting of `8` colors, each color represented in `rgb` & `hex`

```
$ stratomorph htmlify path/to/my/image/sample.png --output=path/to/output/folder/my_palette.html --colorModels rgb hex --paletteCount=8
```

Like with `htmlify` you can also append the `--tablify` option to show a markdown-style table of color palette quantifying colors in other color models.
