const router = require("express");
const { getAbout,createAbout,editAbout } = require("../../../controllers/aboutController");
const middlewares = require("../../../middlewares/exports")


aboutRouter = router()
aboutRouter.get("/getAbout" ,getAbout); 
aboutRouter.post("/createAbout",middlewares.jwtVerify,createAbout); //!falta verificar los datos del cliente
aboutRouter.put("/editAbout",middlewares.jwtVerify,editAbout);//!falta verificar los datos del cliente

module.exports = aboutRouter
