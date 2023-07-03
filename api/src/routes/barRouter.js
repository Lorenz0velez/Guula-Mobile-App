const { Router } = require('express');
const getAllBooks = require('../controllers/BarController');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/bares', async (req, res, next)=>{

    try {
        const allBooks = await getAllBooks();
        console.log('allBooks:', allBooks);
        return res.status(200).json(allBooks);
    } catch (error) {
        console.log('error:', error);
        return res.status(400).json({error:error.message})
    } 
})

module.exports = router;
