/**
 * The <brand.js> file is what gets called call stratomorph without any arguments.
 */
module.exports = {
    name: 'stratomorph',
    run: async (toolbox) => {
        toolbox.print.info(
            'No Commands were passed to stratomorph! use stratomorph -h for a list of all available commands.',
        );
    },
};
