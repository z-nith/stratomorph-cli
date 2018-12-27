# Command Reference for stratomorph

Documentation follows the overall conventions found at:

## Usage

```
Stratomorph

Usage:
  stratomorph htmlify (<image-file-path>) (-o <output-file-path> | --output=<output-file-path>) [--tablify | -t] [--colorModels <modelName>...] [--paletteCount=<NumberOfColorsDesired>]
  stratomorph jsonify (<image-file-path>) (-o <output-file-path> | --output=<output-file-path>) [--tablify | -t] [--colorModels <modelName>...] [--paletteCount=<NumberOfColorsDesired>]
  stratomorph -h | --help
  stratomorph --version

Options:
  -h --help     Show this screen.
  --version     Show version.
  -t --tablify  Show table output of resulting color palette.
  --colorModels=<modelName>... Controls the color models returned in output file [default: all (rgb, hex, hsl)].
  --paletteCount=<numberOfColors> Controls the number of colors returned in palette [default: 5].
```

### Use cases

#### _Outputting color palette to as an html look-book_

Say I have a sample file name `sample.png`. To generate a formatted table output
to the console we do the following:

```
$ stratomorph htmlify path/to/my/image/sample.png --output=path/to/output/folder/my_palette.html
```

You can also append the `--tablify` option to show a markdown-style table of color palette quantifying colors in other color models.

#### _Outputting color palette to as an .json file_

Say I have a sample file name `sample.png`. To generate a formatted `.JSON` file
to the console we do the following:

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
flags for the color modals you want included. By default, Stratomorph will output all supported color models. However, if you know which color models you want you can do so by doing the following:

```
$ stratomorph jsonify path/to/my/image/sample.png --output=path/to/output/folder/my_palette.json --colorModels rgb hex
```

This would ouput the following file:

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

Like with `htmlify` You can also append the `--tablify` option to show a markdown-style table of color palette quantifying colors in other color models.
