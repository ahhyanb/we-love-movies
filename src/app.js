if (process.env.USER) require("dotenv").config();

const express = require("express");
const app = express();
const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");

const cors = require("cors");

app.use(cors())

app.use("/movies", moviesRouter);

app.use("/reviews", reviewsRouter);

app.use("/theaters", theatersRouter);

module.exports = app;
