const knex = require("../db/connection");

function list() {
  return knex("movies").select("*");
}

function listMoviesShowing() {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select("m.*")
    .where({ "mt.is_showing": true });
}

function listMovieById(movieId) {
  return knex("movies").select("*").where({ movie_id: movieId });
}

module.exports = {
  list,
  listMoviesShowing,
  listMovieById,
};
