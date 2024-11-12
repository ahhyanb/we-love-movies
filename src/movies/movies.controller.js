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


module.exports = {
    list: asyncErrorBoundary(list),
    listMoviesShowing: asyncErrorBoundary(listMoviesShowing),
};