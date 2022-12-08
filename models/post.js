const { Model, Datatypes } = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection')

class Post extends Model {
   
}


Post.init({
    id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Datatypes.STRING,
        allowNull: false
    },
    description: {
        type: Datatypes.TEXT
        
    },
    location: {
        //Might actually be an Integer
        type: Datatypes.STRING,
        //Figure out how to add user location
    },
    image: {
        type: Datatypes.STRING,
        //Link to cloudinary
    },
    user_id: {
        type: Datatypes.INTEGER,
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

