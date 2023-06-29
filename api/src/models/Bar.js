const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Bar",
    {
      id: {
        type: DataTypes.INTEGER, // "id": "GLQvEAAAQBAJ",
        allowNull: false,
        primaryKey: true,
        defaultValue: Math.floor((Math.random() * 1000))
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      image:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating:{
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 2.5,
      },
      capacity:{
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 10,
      },
      zona:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      category:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'restaurante'
      },
      variety:{
        type:DataTypes.STRING,
      },
      typeOfFood:{
        type:DataTypes.STRING,
      },
      webSite:{
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      
    },
    { timestamps: false }
  );
};