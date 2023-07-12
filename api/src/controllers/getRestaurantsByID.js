const getAllRestaurants = require("./getAllRestaurants");


const getRestaurantsById = async (id) => {
    const allCountries = await getAllRestaurants();
    const apiCountry = allCountries.find((pais) => pais.id == id);
    if (!apiCountry) {
      throw new Error(`Country id not found`);
    }
    return apiCountry;
  };

  module.exports=getRestaurantsById;
  