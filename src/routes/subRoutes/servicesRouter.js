const { Router } = require("express")
const middlewares = require("../../../middlewares/exports")
const { createdNewService,getServices,getDetailService } = require("../../../controllers/servicesController")
const dataRequired = require("../../../utils/dataRequiredFromClient/dataRequiredServices")

const servicesRouter = Router()

//!No te olvides los middlewares
servicesRouter.post(
  "/createService",
  middlewares.verifyEntryData(dataRequired.toCreateNew,"body"),
  createdNewService
)


servicesRouter.get(
  "/getServices",
  middlewares.verifyEntryData(dataRequired.toGetList,"query"),
  getServices
)

servicesRouter.get(
  "/getServices/detail",
  middlewares.verifyEntryData(dataRequired.toGetDetail,"query"),
  getDetailService
)

module.exports = servicesRouter