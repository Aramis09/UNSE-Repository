const { Router } = require("express")
const middlewares = require("../../../middlewares/adversitingMiddlewares/exports")
const { createdNewAdversiting,getAdversiting } = require("../../../controllers/advertisingController")
const advertisingRouter = Router()


advertisingRouter.post("/createAdvertising",middlewares.verifyBodyData,createdNewAdversiting)
advertisingRouter.get ("/getAdversiting",)
module.exports = advertisingRouter
