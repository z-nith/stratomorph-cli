class ImgSourceNotFoundError extends Error {
    constructor(...args) {
        super(...args)
        Error.captureStackTrace(this, ImgSourceNotFoundError)
    }
}
class InvalidArgumentError extends Error {}

module.exports = {
    ImgSourceNotFoundError,
    InvalidArgumentError,
};
