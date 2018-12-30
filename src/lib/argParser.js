/**
 * Checks whether the invoked command has all of the necessary
 * arguments to execute
 * @param {Array} command arguments
 */
const preCommandCheck = (params) => {
    if (params.length < 1) {
        return false;
    }

    return true;
};

module.exports = preCommandCheck;
