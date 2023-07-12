const { Bar } = require("../db");
const { Op } = require('sequelize');

// const getRestaurantsByName = async (barName) => {
//   const restaurants = await Bar.findAll({
//     where: {
//       name: {
//         // [Op.iLike]: `%${barName}%`, // Utiliza Op.iLike para hacer una búsqueda sin distinguir mayúsculas y minúsculas
//         [Op.like]: `%${barName}%`,
//       },
//       active: true,
//     },
//   });
//   if (restaurants.length === 0) {throw new Error('No matches found');}
//   return restaurants;
// };
// module.exports = getRestaurantsByName;


// const getRestaurantsByName = async (barName) =>{
//     //
//     let search = barName.toLowerCase().split(" ")
//     for (let i = 0; i < search.length; i++) {
//         search[i] = search[i][0].toUpperCase() + search[i].substr(1);
//     }
//     let searchBar = search.join(" ");
//     const restaurants = await Bar.findAll({
//         where: {
//             title : {
//             [Op.like] : `%${searchBar}%`
//             },
//             active: true
//         }
//     })
//     //

//     if(!restaurants) throw new Error ('No matches found')

//     return restaurants;
// }
const getRestaurantsByName = async (barName) =>{
    
    const restaurants = await Bar.findAll({})
    //
    if (barName) {
    return await restaurants.filter((dog) =>
      dog.name.trim().toLowerCase().includes(barName.trim().toLowerCase())
    );
  }

    if(!restaurants) throw new Error ('No matches found')

    // return restaurants;
    return console.log('el nombre buscado es: ', barName)
}

module.exports = getRestaurantsByName;

// if (name) {
//     return await dbDogs.filter((dog) =>
//       dog.name.trim().toLowerCase().includes(name.trim().toLowerCase())
//     );
//   }