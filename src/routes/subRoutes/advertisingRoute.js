const { Router } = require("express")
const middlewares = require("../../../middlewares/exports")
const { createdNewAdversiting,getAdversiting, getDetailAdvertise,editAdvertising,deleteAdvertising } = require("../../../controllers/advertisingController")
const dataRequired = require("../../../utils/dataRequiredFromClient/dataRequiredAdversiting")

const advertisingRouter = Router()

advertisingRouter.post(
  "/createAdvertising",
  middlewares.jwtVerify,
  middlewares.verifyEntryData(dataRequired.toCreateNew,"body"),
  createdNewAdversiting
)
advertisingRouter.put(
  "/editAdvertising",
  middlewares.jwtVerify,
  middlewares.verifyEntryData(dataRequired.toEdit,"body"),
  editAdvertising
)
//!Falta el middleware
advertisingRouter.get (
  "/getAdversiting",
  middlewares.verifyEntryData(dataRequired.toGetList,"query"),
  getAdversiting
)

advertisingRouter.get(
  "/getAdversiting/:id",
  middlewares.verifyEntryData(dataRequired.toGetDetail,"params"),
  getDetailAdvertise
)
advertisingRouter.delete(
  "/delete/:id",
  middlewares.verifyEntryData(dataRequired.toDelete,"params"),
  deleteAdvertising
)

module.exports = advertisingRouter
