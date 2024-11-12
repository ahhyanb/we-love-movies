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

async function destroyReview(req, res, next) {
    const { reviewId } = req.params;
    const rowsDeleted = await reviewsService.destroyReview(reviewId);
  
    rowsDeleted
      ? res.status(204).end() // If rows were deleted, send a 204 response
      : next({ status: 404, message: "Review cannot be found." }); // If no rows were deleted, handle the error
  }

module.exports = {
    list: asyncErrorBoundary(list),
    listReviewsByMovie: asyncErrorBoundary(listReviewsByMovie),
    delete: asyncErrorBoundary(destroyReview),

}