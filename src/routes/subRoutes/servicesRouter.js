const { Router } = require("express")
const middlewares = require("../../../middlewares/exports")
const { createdNewService,getServices,getDetailService,  editService, deleteService } = require("../../../controllers/servicesController")
const dataRequired = require("../../../utils/dataRequiredFromClient/dataRequiredServices")

const servicesRouter = Router()

//!No te olvides los middlewares
servicesRouter.post(
  "/createService",
  middlewares.jwtVerify,
  middlewares.verifyEntryData(dataRequired.toCreateNew,"body"),
  createdNewService
)

servicesRouter.put(
  "/editService",
  middlewares.jwtVerify,
  middlewares.verifyEntryData(dataRequired.toEdit,"body"),
  editService
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

servicesRouter.delete(
  "/delete/:id",
  middlewares.verifyEntryData(dataRequired.toDelete,"params"),
  deleteService
)

module.exports = servicesRouter