const router = require("express")
const orientationRouter = router()
const {getOrientations} = require("../../../controllers/orientationsController")

orientationRouter.get("/getOrientations",getOrientations)


module.exports = orientationRouter