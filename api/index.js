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
const server = require('./app');
const { conn } = require('./DB_connection');
const { getAllBares } = require('./src/controllers/DataRequest');
// const axios = require('axios');
require('dotenv').config() ;

 

// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  await getAllBares();
  server.listen(process.env.PORT, () => {
    console.log('%s listening at', process.env.PORT); // eslint-disable-line no-console
  });
});