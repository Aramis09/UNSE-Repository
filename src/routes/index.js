const { Router } = require('express');
const advertisingRoutes = require("./subRoutes/advertisingRoute")
const servicesRouter = require("./subRoutes/servicesRouter")



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/advertising',advertisingRoutes );
router.use('/services',servicesRouter );



module.exports = router;
