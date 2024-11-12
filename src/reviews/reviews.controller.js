const reviewsService = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next){
    const data = await reviewsService.list();
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),

}