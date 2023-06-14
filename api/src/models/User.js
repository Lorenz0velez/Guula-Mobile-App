const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER, // "id": "GLQvEAAAQBAJ",
        allowNull: false,
        primaryKey: true,
        defaultValue: Math.floor((Math.random() * 1000)),
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      profilePicture:{
        type: DataTypes.STRING,
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    },
    { timestamps: false }
  );
};
