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

async function reviewExists(req, res, next) {
    const { reviewId } = req.params;
    const review = await service.read(reviewId);
  
    return review
      ? (res.locals.review = review, next())
      : res.status(404).json({ error: "Review cannot be found." });
}

async function destroyReview(req, res, next) {
    const { reviewId } = req.params;
    const rowsDeleted = await reviewsService.destroyReview(reviewId);
  
    rowsDeleted
      ? res.status(204).end() // If rows were deleted, send a 204 response
      : next({ status: 404, message: "Review cannot be found." }); // If no rows were deleted, handle the error
}


async function updateReview(req, res, next) {
    // Merge the existing review data with the new data from the request
    const updatedReview = {
      ...res.locals.review,
      ...req.body.data,
      review_id: res.locals.review.review_id, // Ensure review_id is preserved
    };
    // Update the review in the database
    await service.update(updatedReview);
    // Fetch the updated review along with critic information
    const data = await service.readWithCritic(updatedReview.review_id);
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),
    listReviewsByMovie: asyncErrorBoundary(listReviewsByMovie),
    delete: asyncErrorBoundary(destroyReview),
    update:[ asyncErrorBoundary(reviewExists), asyncErrorBoundary(updateReview) ],

}