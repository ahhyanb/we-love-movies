const knex = require("../db/connection");

function list() {
    return knex("movies").select("*");
}

function listMoviesShowing() {
    return knex("movies").select("*")
        .where("is_showing",true);
}

function listMovieById(movieId) {
    return knex('movies').select("*")
        .where({ movie_id: movieId });
}

module.exports = {
    list,
    listMoviesShowing,
    listMovieById,

};