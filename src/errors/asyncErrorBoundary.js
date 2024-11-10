function asyncErrorBoundary(delegate, defaultStatus) {
    return (req, res, next) => {
        Promise.resolved()
            .then(() => delegate(res, req, next))
            .catch((error) => {
                if(defaultStatus) {
                    error.status = defaultStatus;
                }
                next(error);
            });
    };
}

module.exports = asyncErrorBoundary;