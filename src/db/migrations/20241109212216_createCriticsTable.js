/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// The `critics` table represents movie critics who have created reviews for movies. Each critic has the following fields:

// - `critic_id`: (Primary Key) A unique ID for the critic.
// - `preferred_name`: (String) The critic's preferred first name.
// - `surname`: (String) The critic's last name.
// - `organization_name`: (String) The name of the organization the critic works for.

exports.up = function(knex) {
  return knex.schema.createTable("critics", (table) => {
    table.increments("critic_id").primary();
    table.string("preferred_name");
    table.string("surname");
    table.string("organization_name");
    table.timestamps(true, true); // creates "created_at" and "updated_at" timestamps
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("critics"); // drops the whole critics table
  
};
