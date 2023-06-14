const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Favourites',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            bares: {
                type: DataTypes.ARRAY(DataTypes.JSONB),
                allowNull: false
            },
            userId: {
                type: DataTypes.STRING,
                allowNull: false
            },
            // total: {
            //     type: DataTypes.FLOAT,
            //     allowNull: false
            // }

        })
}