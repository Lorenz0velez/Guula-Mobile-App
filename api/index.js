//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const server = require('./src/app.js');
// // const { getAllBares } = require('./src/controllers/ActivityController.js');
// const { conn } = require('./src/db.js');
// // const axios = require('axios');
// require('dotenv').config() ;

 

// // Syncing all the models at once.
// conn.sync({ force: true }).then(async() => {
//   //  await getAllBares();
//   server.listen(process.env.PORT, () => {
//     console.log('%s listening at', process.env.PORT); // eslint-disable-line no-console
//   });
// });

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { getAllBares } = require('./src/controllers/ActivityController.js');
require('dotenv').config();

const jsonFilePath = require('../client/bares.json'); // Ruta del archivo JSON

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  await getAllBares(jsonFilePath); // Pasar la ruta del archivo JSON como argumento
  server.listen(process.env.PORT, () => {
    console.log('%s listening at', process.env.PORT);
  });
});

