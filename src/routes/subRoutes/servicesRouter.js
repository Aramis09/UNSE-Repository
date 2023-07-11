const { Router } = require("express")
const middlewares = require("../../../middlewares/exports")
const { createdNewService,getServices } = require("../../../controllers/servicesController")
const dataRequired = require("../../../utils/dataRequiredFromClient/dataRequiredServices")

const servicesRouter = Router()

//!No te olvides los middlewares
servicesRouter.post(
  "/createService",
  middlewares.verifyEntryData(dataRequired.toCreateNew,"body"),
  createdNewService)


servicesRouter.get(
  "/getServices",
  middlewares.verifyBodyData(dataRequired.toGetList,"query"),
  getServices)



module.exports = servicesRouter