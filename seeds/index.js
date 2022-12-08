const sequelize = require('../config/connection')
const { User, Comment, Post } = require('../models')

const userData = require('./userData.json')
const postData = require('./postData.json')
const commentData = require('./commentData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true })

    const users = await User.bulkCreate(userData, {
        individualHooks: true, 
        returning: true,
    })


    const posts = await Post.bulkCreate(postData, {
        individualHooks: true, 
        returning: true,
    })

    const comments = await Comment.bulkCreate(commentData, {
        individualHooks: true, 
        returning: true,
    })
console.log(users, posts, comments)
    process.exit(0)
}

seedDatabase()