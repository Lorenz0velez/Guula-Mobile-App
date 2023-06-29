// const axios = require('axios');
// const { Bar } = require("../db");
// axios.default.timeout = 30000;
// const bar = require('../../../client/bares.json');
// // const { name } = require('../app');

// const getAllBares = async() =>{
//     const bares = await axios.get(bar);
//     try{
//       const mapBares = bares.data?.map((data)=>{
//         return {
//          id:id.data,
//          name:nombre.data,
//          image :imagen.data,
//          address:direccion.data,
//          rating:rating.data,
//         //  capacity:capacity.data,
//          typeOfFood:tipo_comida.data,
//         //  webSite:webSite.data,
//         //  phoneNumber:phoneNumber.data,
//         }
//     });
//     await Bar.bulkCreate(mapBares, { validate: true })
  
//     } catch(e){
//       console.log(e)
//     }
//   }

//   module.exports={
//     getAllBares
//   }
  

const axios = require('axios');
const { Bar } = require("../db");
axios.default.timeout = 30000;
// const jsonFilePath = '../../../client/bares.json'; // Ruta del archivo JSON
// const { name } = require('../app');

const getAllBares = async (jsonFilePath) => {
  try {
    const response = require(jsonFilePath); // Cargar el archivo JSON utilizando la ruta
    const bares = response.data;
    const mapBares = bares?.map((data) => {
      return {
        id: data.id,
        name: data.nombre,
        image: data.imagen,
        address: data.direccion,
        rating: data.rating,
        // capacity: data.capacity,
        typeOfFood: data.tipo_comida,
        // webSite: data.webSite,
        // phoneNumber: data.phoneNumber,
      };
    });

    await Bar.bulkCreate(mapBares, { validate: true });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllBares,
};
