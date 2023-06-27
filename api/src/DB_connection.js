require('dotenv').config()
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY, DB_PORT, PORT } = process.env;

const BarModel = require('./models/Bar');
const ReviewsModel = require('./models/Reviews');
const UserModel = require('./models/User');
const FavouritesModel = require('./models/Favourites');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
        logging: false,
        alter: true,
        native: false
    }
);
// const sequelize = new Sequelize(DB_DEPLOY, {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   });

BarModel(sequelize);
ReviewsModel(sequelize);
UserModel(sequelize);
FavouritesModel(sequelize);

//Relaciones entidad

const { Bar, Reviews, User, Favourites } = sequelize.models

Bar.hasMany(Reviews);
Reviews.belongsTo(Bar);

User.hasMany(Reviews);
Reviews.belongsTo(User);

User.hasMany(Favourites);
Favourites.belongsTo(User);

User.belongsToMany(Bar, { through: "User_Bar" });
Bar.belongsToMany(User, { through: "User_Bar" });

module.exports = {
    ...sequelize.models,
    conn: sequelize,
}