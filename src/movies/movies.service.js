const knex = require("../db/connection");

function list() {
    return knex("movies").select("*");
}

function listMoviesShowing() {
    return knex("movies").select("*")
        .where("is_showing",true);
}

module.exports = {
    list,
    listMoviesShowing,
};