const { Router } = require("express")
const middlewares = require("../../../middlewares/exports")
const { createdNewAdversiting,getAdversiting, getDetailAdvertise } = require("../../../controllers/advertisingController")
const dataRequired = require("../../../utils/dataRequiredFromClient/dataRequiredAdversiting")

const advertisingRouter = Router()

advertisingRouter.post(
  "/createAdvertising",
  middlewares.verifyEntryData(dataRequired.toCreateNew,"body"),
  createdNewAdversiting
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

module.exports = advertisingRouter
