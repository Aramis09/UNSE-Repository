const router = require("express");
const { getAbout,createAbout,editAbout } = require("../../../controllers/aboutController");


aboutRouter = router()
aboutRouter.get("/getAbout",getAbout);
aboutRouter.post("/createAbout",createAbout);
aboutRouter.put("/editAbout",editAbout);

module.exports = aboutRouter
