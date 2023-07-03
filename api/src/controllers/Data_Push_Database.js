const axios = require('axios');
const { Bar } = require("../db");
axios.default.timeout = 30000;


const getAllBares = async () => {
  try {
    const response = require('../../../client/bares.json'); // Cargar el archivo JSON utilizando la ruta
      const mapBares = response?.map((data) => {
      return {
        id: data.id,
        name: data.nombre,
        image: data.imagen,
        address: data.direccion,
        rating: data.rating,
        capacity: data.capacity,
        typeOfFood: data.tipo_comida,
        webSite: data.webSite,
        phoneNumber: data.phoneNumber,
        zona: data.zona
      };
    });

    await Bar.bulkCreate(mapBares, { validate: true });
    console.log('bares creados')
  } catch (e) {
    console.log('hubo un error')
    console.log(e);
  }
};

module.exports = {
  getAllBares,
};
