require('dotenv').config();
const { Router } = require('express');
const advertisingRouter = require("./subRoutes/advertisingRoute")
const servicesRouter = require("./subRoutes/servicesRouter");
const subServiceRouter = require('./subRoutes/subServicesRoute');
const imageManagerRouter = require("./subRoutes/imagesCloudRouter");
const encryptController = require("../../controllers/encryptController")
const loginController = require('../../controllers/loginController');
const jwtVerify = require('../../middlewares/jwtVerify');
const { keySecretVerify } = require('../../middlewares/keySecretVerify');
const carrouselRouter = require('./subRoutes/carrouselRoute');
const verificationToken = require('./subRoutes/verificationToken');

const router = Router();

////////////////////////////////////////////////////////////////////////////////////////////////

//!Esta ruta es un peligro
router.post("/encryption",keySecretVerify,encryptController) //!Esta ruta debe deshabilitarseantes del deploy!!!! 
router.post("/verificationToken",jwtVerify,verificationToken)

router.post("/login",keySecretVerify,loginController)

router.use('/',keySecretVerify)
//todo-----------safe zone----------------//
router.use('/imageManager',imageManagerRouter );
router.use('/advertising',advertisingRouter );
router.use('/services',servicesRouter );
router.use('/subServices',subServiceRouter );
router.use('/carrousel',carrouselRouter );





module.exports = router;


