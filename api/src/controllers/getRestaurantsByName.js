const { Bar } = require("../db");
const { Op } = require('sequelize');

// barRouter.get('/restaurantes/:nombre', async (req, res) => { ---->>>>>>>>>> ESTO ME LO DIO CHATGPT
//   const name = req.params.nombre;

//   try {
//     // Buscar el restaurante por su nombre en la base de datos
//     const restaurante = await Bar.findOne({ where: { name } });

//     if (restaurante) {
//       res.json(restaurante);
//     } else {
//       res.status(404).json({ error: 'Restaurante no encontrado' });
//     }
//   } catch (error) {
//     console.error('Error al buscar el restaurante:', error);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// });

const getRestaurantsByName = async(name)=>{
  const barcito = await Bar.findOne({ where: { name } });
  return barcito;
}

module.exports= getRestaurantsByName;