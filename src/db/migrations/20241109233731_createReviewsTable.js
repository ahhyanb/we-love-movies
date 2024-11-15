/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/* 
The `reviews` table represents a review done by a critic of a single movie. It references both a critic and a movie.

- `review_id`: (Primary Key) A unique ID for the review.
- `content`: (Text) The content of the review, written in markdown.
- `score`: (Integer) A numerical representation of the score given to the movie by the critic.
- `critic_id`: (Foreign Key) A reference ID to a particular critic.
- `movie_id`: (Foreign Key) A reference ID to a particular movie.
*/
exports.up = function(knex) {
  return knex.schema.createTable("reviews", (table) => { 
    table.increments("review_id").primary();
    table.text("content");
    table.integer("score");

    table
        .integer("critic_id")
        .unsigned()
        .notNullable()
        .references("critic_id")
        .inTable("critics")
        .onDelete("CASCADE");

    table
        .integer("movie_id")
        .unsigned()
        .notNullable()
        .references("movie_id")
        .inTable("movies")
        .onDelete("CASCADE");
        
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return  knex.schema.dropTable("reviews");
  
};
