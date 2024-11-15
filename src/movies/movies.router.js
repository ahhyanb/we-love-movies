const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const reviewsRouter = require("../reviews/reviews.router");
const theatersRouter = require("../theaters/theaters.router");

router.route("/")
    .get(controller.list)
    .all(methodNotAllowed);

router.route("/:movieId")
    .get(controller.listMovieById)
    .all(methodNotAllowed);

router.use("/:movieId/reviews", reviewsRouter);

router.use("/:movieId/theaters", theatersRouter);

module.exports = router;
