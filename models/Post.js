const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
// const location = require()

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        lat: {
            type: DataTypes.DOUBLE(9,7),
        },
        lon: {
            type: DataTypes.DOUBLE(9,7)
        },
        image: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            }
        },
    },

    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'post',
    }

)
module.exports = Post

