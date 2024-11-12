const theatersService = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function listTheaters(req, res, next) {
    const data = await theatersService.list();
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(listTheaters),

}