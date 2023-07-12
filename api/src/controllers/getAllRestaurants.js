const { Bar } = require("../db");

const getAllRestaurants = async () => {

    const barcito = await Bar.findAll({
      where: {
        active: true
      }
    });                   
    return barcito;
  };
  
  
  module.exports = getAllRestaurants;