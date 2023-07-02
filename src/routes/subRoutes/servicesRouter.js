const { Router } = require("express")
const middlewares = require("../../../middlewares/adversitingMiddlewares/exports")
const { createdNewService } = require("../../../controllers/servicesController")
const servicesRouter = Router()


//!No te olvides los middlewares
servicesRouter.post("/createService",createdNewService)


module.exports = servicesRouter