const { Router } = require('express');
const advertisingRoutes = require("./subRoutes/advertisingRoute")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/advertising',advertisingRoutes );


module.exports = router;
