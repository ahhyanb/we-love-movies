const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function list(req, res, next) {
    const data = await moviesService.list();
    res.json({ data });
}

async function listMoviesShowing(req, res, next) {
    const isShowing = req.query.is_showing === "true";
    const data = isShowing
        ? await moviesService.listMoviesShowing() // ternary operator
        : await moviesService.list();
    res.json({ data });
}

async function listMovieById(req, res, next) {
    const { movieId } = req.params;
    const data = await moviesService.listMovieById(movieId);
    const result = data[0]; // access the first item in the array since the rersponse will be an array
    return data.length
        ? res.json({ data: result }) // If the movie exists, respond with the data
        : next({ status: 404, message: `Movie with ID ${movieId} not found.` }); // Otherwise, pass an error to the next handler
}


module.exports = {
    list: asyncErrorBoundary(list),
    listMoviesShowing: asyncErrorBoundary(listMoviesShowing),
    listMovieById: asyncErrorBoundary(listMovieById),
};