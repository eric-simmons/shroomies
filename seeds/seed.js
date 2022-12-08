const sequelize = require('../config/connection')
const { User, Comment, Mushroom } = require('../models')

const userData = require('./userData.json')
const mushroomData = require('./mushroomData.json')
const commentData = require('./commentData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true })

    const users = await User.bulkCreate(userData, {
        individualHooks: true, 
        returning: true,
    })


    const mushrooms = await Mushroom.bulkCreate(mushroomData, {
        individualHooks: true, 
        returning: true,
    })

    const comments = await Comment.bulkCreate(commentData, {
        individualHooks: true, 
        returning: true,
    })
console.log(users, blogs, comments)
    process.exit(0)
}

seedDatabase()