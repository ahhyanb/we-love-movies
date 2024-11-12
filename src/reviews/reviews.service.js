const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

// Configuration for mapping critic properties into a nested object
const addCritic = mapProperties({
    critic_id: "critic.critic_id",
    preferred_name: "critic.preferred_name",
    surname: "critic.surname",
    organization_name: "critic.organization_name",
    created_at: "critic.created_at", // Critic's created_at
    updated_at: "critic.updated_at",  // Critic's updated_at
  });
  

// Function to update a review
function updateReview(updatedReview) {
    return knex("reviews")
      .where({ review_id: updatedReview.review_id })
      .update(updatedReview, "*")
      .then((updatedRecords) => updatedRecords[0]); // Return the first updated record
}
  
  // Function to get a review with critic information using map-properties
function readReviewWithCritic(reviewId) {
    return knex("reviews as r")
      .join("critics as c", "r.critic_id", "c.critic_id")
      .select("r.*", "c.*")
      .where({ "r.review_id": reviewId })
      .first()
      .then(addCritic); // Use mapProperties to format the data
}

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
    updateReview,
    readReviewWithCritic,

}