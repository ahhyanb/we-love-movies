const reviewsService = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next){
    const data = await reviewsService.list();
    res.json({ data });
}

async function listReviewsByMovie(req, res, next){
    const { movieId } = req.params;
    const data = await reviewsService.listReviewsByMovie(movieId);
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),
    listReviewsByMovie: asyncErrorBoundary(listReviewsByMovie),

}