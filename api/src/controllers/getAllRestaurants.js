const { Bar } = require("../db");

  
  const getAllRestaurants = async (name) => {
    try {
      let dbRestaurants = await Bar.findAll({
        where: {
            active: true
          }
      });
  
      if (name) {
        return await dbRestaurants.filter((bar) =>
          bar.name.trim().toLowerCase().includes(name.trim().toLowerCase())
        );
      }
        return dbRestaurants
  
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  
  module.exports = getAllRestaurants;