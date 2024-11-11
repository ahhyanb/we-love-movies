function asyncErrorBoundary(delegate, defaultStatus) {
    return (req, res, next) => {
        Promise.resolve()
            .then(() => delegate(req, res, next)) // Correct argument order
            .catch((error) => {
                if (defaultStatus) {
                    error.status = defaultStatus; // Set a default status if provided
                }
                next(error); // Pass the error to the next error handler
            });
    };
}

module.exports = asyncErrorBoundary;
