const { Router } = require("express")
const middlewares = require("../../../middlewares/adversitingMiddlewares/exports")
const { createdNewAdversiting,getAdversiting } = require("../../../controllers/advertisingController")
const advertisingRouter = Router()


advertisingRouter.post("/createAdvertising",middlewares.verifyBodyData,createdNewAdversiting)

//!Falta el middleware
advertisingRouter.get ("/getAdversiting",getAdversiting)
module.exports = advertisingRouter
