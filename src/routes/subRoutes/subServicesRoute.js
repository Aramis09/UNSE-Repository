const express = require("express")
const { createNewSubService,getSubService,getDetailSubService,editSubService, deleteSubService } = require("../../../controllers/subServicesController")
const middlewares = require("../../../middlewares/exports")
const dataRequired = require("../../../utils/dataRequiredFromClient/dataRequiredSubServices")
const subServiceRouter = express()

//!Falta los middleware
subServiceRouter.post(
  "/createSubService",
  middlewares.jwtVerify,
  middlewares.verifyEntryData(dataRequired.toCreateNew,"body"),
  createNewSubService
)

subServiceRouter.put(
  "/editSubService",
  middlewares.jwtVerify,
  middlewares.verifyEntryData(dataRequired.toEdit,"body"),
  editSubService
)

subServiceRouter.get(
  "/getSubServices",
  middlewares.verifyEntryData(dataRequired.toGetList,"query"),
  getSubService
)

subServiceRouter.get(
  "/getSubServices/:id",
  middlewares.verifyEntryData(dataRequired.toGetDetail,"params"),
  getDetailSubService
)
subServiceRouter.delete(
  "/delete/:id",
  middlewares.verifyEntryData(dataRequired.toDelete,"params"),
  deleteSubService
)

module.exports = subServiceRouter