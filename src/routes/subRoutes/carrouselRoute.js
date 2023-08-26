const router = require("express")
const { createCarrousel,getCarrouselDetail,editCarrousel } = require("../../../controllers/carrouselController")
const middlewares = require("../../../middlewares/exports")
const carrouselRouter = router()


carrouselRouter.post("/create",
  middlewares.jwtVerify,
  middlewares.verifyEntryData(["location","images","idAdvertising"],"query"),
  createCarrousel
)
carrouselRouter.get("/getDetail",
  middlewares.verifyEntryData(["location","idAdvertising"],"query"),
  getCarrouselDetail
)
carrouselRouter.put("/edit",
  middlewares.jwtVerify,
  middlewares.verifyEntryData(["location","images","idAdvertising"],"body"),
  editCarrousel
)

module.exports = carrouselRouter


