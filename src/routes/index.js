const { Router } = require('express');
const advertisingRouter = require("./subRoutes/advertisingRoute")
const servicesRouter = require("./subRoutes/servicesRouter");
const subServiceRouter = require('./subRoutes/subServicesRoute');



const router = Router();
// http://localhost:3001/advertising/getAdversiting?page=1
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/advertising',advertisingRouter );
router.use('/services',servicesRouter );
router.use('/subServices',subServiceRouter );




module.exports = router;


