const { build } = require('gluegun')
const version = require('./commands/version');

/**
 * Create the cli and kick it off
 */
async function run (argv) {
  // create a CLI runtime
  const cli = build()
    .brand('stratomorph')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'stratomorph-*', hidden: true })
    .help() // provides default for help, h, --help, -h
    .version(version)
    .create()

  // and run it
  const toolbox = await cli.run(argv)

  // send it back (for testing, mostly)
  return toolbox
}

module.exports = { run }
