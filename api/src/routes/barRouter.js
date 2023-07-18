const { Router } = require('express');
const getAllRestaurants = require('../controllers/getAllRestaurants');
const getRestaurantsById = require('../controllers/getRestaurantsByID');


const barRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// ESTA RUTA TRAE TODOS LOS ELEMENTOS ACTIVOS DE LA BASE DE DATOS Y SI HAY UN NOMBRE POR QUERY TRAE ESE ELEMENTO.
  barRouter.get('/bares', async(req, res, next)=>{
    const { name } = req.query;
    try {
      const barsList = await getAllRestaurants(name);
      res.status(200).json(barsList);
    } catch (error) {
      next(error);
    }
});


//ESTA RUTA ME TRAE EL ELEMENTO QUE COINCIDA CON ID PASADO POR PARAMS
barRouter.get('/:id', async (req, res, next) =>{
    const {id} = req.params;
    try {
      const bar = await getRestaurantsById(id);
      res.status(200).json(bar)
    } catch (error) {
      next(error)
    }
  })


module.exports = barRouter;
