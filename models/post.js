const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection')

class Post extends Model {}

Post.init({
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
    location: {
        type: DataTypes.OBJECT,
        default: getCurrentPosition()
    },
    image: {
        type: DataTypes.STRING,
        //Link to cloudinary
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        }
    },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'post',
        // underscored: true
    }
)
module.exports = Post


//name
//description non-scientific DISCLAIMER
//location
//timestamp

//photo filename

//mushrooms belong to user

