const router = require("express")
const dataRequired = require("../../../utils/dataRequiredFromClient/dataRequiredSections")
const { editSection } = require("../../../controllers/sectionController")
const middlewares = require("../../../middlewares/exports");

const sectionRouter = router()

sectionRouter.put(
  "/editSection",
  middlewares.jwtVerify,
  middlewares.verifyEntryData(dataRequired.toEdit,"body"),
  editSection
)
module.exports = sectionRouter