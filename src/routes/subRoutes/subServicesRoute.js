const express = require("express")
const { createNewSubService,getSubService } = require("../../../controllers/subServicesController")
const middlewares = require("../../../middlewares/exports")
const dataRequired = require("../../../utils/dataRequiredFromClient/dataRequiredSubServices")
const subServiceRouter = express()

//!Falta los middleware
subServiceRouter.post(
  "/createSubService",
  middlewares.verifyEntryData(dataRequired.toCreateNew,"body"),
  createNewSubService
)

subServiceRouter.get(
  "/getSubServices",
  middlewares.verifyEntryData(dataRequired.toGetList,"query"),
  getSubService
)

module.exports = subServiceRouter