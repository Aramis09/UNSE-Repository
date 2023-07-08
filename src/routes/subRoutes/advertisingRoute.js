const { Router } = require("express")
const middlewares = require("../../../middlewares/exports")
const { createdNewAdversiting,getAdversiting } = require("../../../controllers/advertisingController")
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
  middlewares.verifyBodyData(dataRequired.toGetList,"query"),
  getAdversiting)
module.exports = advertisingRouter
