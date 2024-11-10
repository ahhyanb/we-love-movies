const path = require("path");
require("dotenv").config(); // Load environment variables from .env file

module.exports = {
  development: {
    client: "pg", // Use "pg" for PostgreSQL
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // SSL settings
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"), // Path to migrations
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"), // Path to seeds
    },
  },
};
