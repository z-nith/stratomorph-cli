
module.exports = {
  name: 'stratomorph',
  run: async toolbox => {
    const { print, colorExtractor } = toolbox
    colorExtractor();

  }
}
