const knex = require("../db/connection");

function list() {
    return knex("reviews").select("*");
}

function listReviewsByMovie(movieId) {
    return knex("reviews").select("*")
        .where("movie_id", movieId);
}

module.exports = { 
    list,
    listReviewsByMovie,

}