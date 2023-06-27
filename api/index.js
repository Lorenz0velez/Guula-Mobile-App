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
const server = require('./src/app');
const { conn } = require('./src/DB_connection');
const { getAllBares } = require('./src/controllers/DataRequest');
// const axios = require('axios');
// require('dotenv').config() ;
require('dotenv').config()

 

// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  await getAllBares();
  server.listen(80, () => {
    console.log('%s listening at 80'); // eslint-disable-line no-console
  });
});
