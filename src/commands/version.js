/**
 * Outputs the version of stratomorph with pretty ASCII art
 */
module.exports = {
    name: 'version',
    alias: ['v'],
    description: 'Displays version of Stratomorph',
    hidden: false,
    dashed: true,
    run: async (toolbox) => {
        const { print, meta } = toolbox;
        const figlet = require('figlet');

        print.info(
            figlet.textSync('Stratomorph', {
                font: 'ANSI Shadow',
                horizontalLayout: 'default',
                verticalLayout: 'default',
            }),
        );

        print.info(meta.version());
    },
};
