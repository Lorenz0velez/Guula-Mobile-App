const axios = require('axios');
const { Bar } = require('../../DB_connection');
const bar = require('../../../client/bares');
axios.default.timeout = 30000;


const getAllBares = async() =>{
    const bares = await axios.get(bar);
    try {
        const mapBares = bares.data?.map((data)=>{
            return{
                id: data.id,
                name:data.nombre,
                image:data.imagen,
                address:data.direccion,
                rating:data.puntaje,
                capacity:data.capacidad,
                typeOfFood:data.tipo_comida,
                webSite:data.sitioWeb,
                phoneNumber:data.numeroDeTelefono,
            }
        });
        await Bar.bulkCreate(mapCountries, { validate: true })
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    getAllBares
}