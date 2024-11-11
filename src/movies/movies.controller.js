const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const data = await moviesService.list();
    res.json({ data });
}

async function listMoviesShowing(req, res, next) {
    const data = await moviesService.listMoviesShowing();
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),
    listMoviesShowing: asyncErrorBoundary(listMoviesShowing),
};