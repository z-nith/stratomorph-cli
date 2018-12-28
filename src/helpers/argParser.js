const { print } = require('gluegun/print');
const { USAGE_STRINGS } = require('../constants');

/**
 * Checks whether the invoked command has all of the necessary
 * arguments to execute
 * @param {Array} command arguments
 */
const preCommandCheck = (params, command_name) => {
    if (params.length < 1) {
        print.error(`Usage: ${USAGE_STRINGS[command_name]}`);
        return false;
    }

    return true;
};

module.exports = preCommandCheck;
