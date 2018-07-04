const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    const News = sequelize.define('news', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return News;
};
