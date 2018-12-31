class ImgSourceNotFoundError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, ImgSourceNotFoundError);
    }
}

class networkImageFailedToLoadError extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, ImgSourceNotFoundError);
    }
}

class FailedToBuildImageCanvas extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, FailedToBuildImageCanvas);
    }
}

class InvalidArgumentError extends Error {}

module.exports = {
    ImgSourceNotFoundError,
    InvalidArgumentError,
    FailedToBuildImageCanvas,
    networkImageFailedToLoadError
};
