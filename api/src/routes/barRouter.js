const { Router } = require('express');
const getAllRestaurants = require('../controllers/getAllRestaurants');
// const getRestaurantsByName = require('../controllers/getRestaurantsByName');
const { Bar } = require("../db");
const getRestaurantsByName = require('../controllers/getRestaurantsByName');



const barRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


barRouter.get('/bares', async(req,res,next)=>{
    try {
        const allBares = await getAllRestaurants();
        
        return res.status(200).json(allBares);
    } catch (error) {
        console.log(error)
        return res.status(400).json({error:error.message})
    } 
});

barRouter.get('/restaurantes/:nombre', async (req, res) => {
    const name = req.params.nombre;
  
    try {
      // Buscar el restaurante por su nombre en la base de datos
      const restaurante = await getRestaurantsByName(name);
  
      if (restaurante) {
        res.json(restaurante);
      } else {
        res.status(404).json({ error: 'Restaurante no encontrado' });
      }
    } catch (error) {
      console.error('Error al buscar el restaurante:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });

module.exports = barRouter;
