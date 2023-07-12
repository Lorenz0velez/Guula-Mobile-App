const { Router } = require('express');
const barRouter = require('./barRouter');

const MainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

MainRouter.use('/bares', barRouter); //De esta forma utitlizo el router de mi archivo barRouter que se llama igual.

module.exports = MainRouter;