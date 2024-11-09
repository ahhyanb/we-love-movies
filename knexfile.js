const path = require("path");
require("dotenv").config();

const { DATABASE_URL } = process.env;


module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL,
      ssl: {
        rejectUnauthorized: false, // Allow insecure SSL if necessary
      },
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

};