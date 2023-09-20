const router = require("express")
const dataRequired = require("../../../utils/dataRequiredFromClient/dataRequiredSections")
const { editSection,createSection,deleteSection } = require("../../../controllers/sectionController")
const middlewares = require("../../../middlewares/exports");

const sectionRouter = router()

sectionRouter.put(
  "/editSection",
  middlewares.jwtVerify,
  middlewares.verifyEntryData(dataRequired.toEdit,"body"),
  editSection
)

sectionRouter.post(
  "/create",
  middlewares.jwtVerify,
  middlewares.verifyEntryData(dataRequired.toPost,"body"),
  createSection
)

sectionRouter.delete(
  "/delete/:id",
  middlewares.jwtVerify,
  middlewares.verifyEntryData(dataRequired.toDelete,"params"),
  deleteSection
)
module.exports = sectionRouter