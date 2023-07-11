const { Router } = require('express');
const advertisingRouter = require("./subRoutes/advertisingRoute")
const servicesRouter = require("./subRoutes/servicesRouter");
const subServiceRouter = require('./subRoutes/subServicesRoute');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/advertising',advertisingRouter );
router.use('/services',servicesRouter );
router.use('/subServices',subServiceRouter );




module.exports = router;


