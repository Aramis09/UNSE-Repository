require('dotenv').config();
const { Router } = require('express');
const advertisingRouter = require("./subRoutes/advertisingRoute")
const servicesRouter = require("./subRoutes/servicesRouter");
const subServiceRouter = require('./subRoutes/subServicesRoute');
const imageManagerRouter = require("./subRoutes/imagesCloudRouter");
const encryptController = require("../../controllers/encryptController")
const loginController = require('../../controllers/loginController');
const jwtVerify = require("../../middlewares/jwtVerify")
const router = Router();



//!Esta ruta es un peligro
router.post("/encryption",encryptController) //!Esta ruta debe deshabilitarseantes del deploy!!!! 

router.post("/login",loginController)

router.use('/',jwtVerify) //<--- esta ruta mata todo, hay que hacer el guardado de token y reutilizar en todas las request

//todo-----------safe zone----------------//
router.use('/imageManager',imageManagerRouter );
router.use('/advertising',advertisingRouter );
router.use('/services',servicesRouter );
router.use('/subServices',subServiceRouter );




module.exports = router;


