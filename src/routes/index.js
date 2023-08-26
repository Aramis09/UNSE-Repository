require('dotenv').config();
const { Router } = require('express');
const advertisingRouter = require("./subRoutes/advertisingRoute")
const servicesRouter = require("./subRoutes/servicesRouter");
const subServiceRouter = require('./subRoutes/subServicesRoute');
const imageManagerRouter = require("./subRoutes/imagesCloudRouter");
const encryptController = require("../../controllers/encryptController")
const loginController = require('../../controllers/loginController');
const orientationRouter = require('./subRoutes/orientationRoute.js')
const jwtVerify = require('../../middlewares/jwtVerify');
const { keySecretVerify } = require('../../middlewares/keySecretVerify');
const carrouselRouter = require('./subRoutes/carrouselRoute');
const verificationToken = require('./subRoutes/verificationToken');
const sectionRouter = require('./subRoutes/sectionRoute');

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
router.use('/orientation',orientationRouter );
router.use('/sections',sectionRouter );







module.exports = router;


