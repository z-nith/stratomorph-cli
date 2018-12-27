# Command Reference for stratomorph
Documentation follows the overall conventions found at:

## Usage

```
Stratomorph

Usage:
  stratomorph htmlify (<image-file-path>) (-o <output-file-path> | --output=<output-file-path>) [--tablify | -t]
  stratomorph jsonify (<image-file-path>) (-o <output-file-path> | --output=<output-file-path>) [--tablify | -t]
  stratomorph -h | --help
  stratomorph --version

Options:
  -h --help     Show this screen.
  --version     Show version.
  -t --tablify  Show table output of resulting color palette.
```

### Use cases

#### _Outputting color palette to as an html look-book_

Say I have a sample file name `sample.png`. To generate a formatted table output
to the console we do the following:

```
$ stratomorph htmlify path/to/my/image/sample.png --output=path/to/output/folder/my_palette.png
```

You can also append the `--tablify` option to show a markdown-style table of color palette quantifying colors in other color models.
