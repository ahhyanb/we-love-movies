const knex = require("../db/connection");

function list() {
    return knex("reviews").select("*");
}

function listReviewsByMovie(movieId) {
    return knex("reviews").select("*")
        .where("movie_id", movieId);
}

function destroyReview(reviewId) {
    return knex("reviews").select("*")
        .where("review_id", reviewId)
        .del();
}

module.exports = { 
    list,
    listReviewsByMovie,
    destroyReview,

}