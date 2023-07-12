const { Router } = require('express');
const getAllRestaurants = require('../controllers/getAllRestaurants');
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
})

// barRouter.get('/', async (req, res) => {
//     const { barName } = req.query;

    // if (barName) {
    //     try {
    //         const barcito = await getRestaurantsByName(barName)
    //         return res.status(200).json(barcito) 
    //     } catch (error) {
    //         return res.status(400).json({error:error.message}) 
    //     }
    // }

    // try {
    //     const allRestaurants = await getAllRestaurants();
    //     return res.status(200).json(allRestaurants);
    // } catch (error) {
    //     console.log('error:', error);
    //     return res.status(400).json({error:error.message})
    // } 

// });

module.exports = barRouter;
