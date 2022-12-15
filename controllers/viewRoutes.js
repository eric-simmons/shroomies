const router = require('express').Router()
// const { response } = require('express')
const { Post, User, Comment } = require('../models')


// router.get('/', async (req,res) => {
//     try{
//         let comment = await Comment.findAll({
//             where: {
//                 post_Id : 1
//             }
//         })
//         console.log(comment)

//     }
//     catch(error){
//         res.status(500).json(error)
//     }
// })


//serve up posts on home page join with comments

router.get('/', async (req, res) => {
    try {
        let posts = await Post.findAll({
            include: [{ model: Comment }],
            order: [['createdAt', 'DESC']],
        })
        //serialize post data
        posts = posts.map(post => {
            const postData = post.get({ plain: true })
            //   console.log(postData.comments)
            return {
                ...postData,
                commentCount: postData.comments.length,
                commentContent: postData.comments.map(comment =>{
                    return comment.content
                }),
                belongsToUser: req.session.user_id === postData.user_id
            }
        })
        //pass posts data and session flag into home template
        res.render('home', {
            posts,
            user_id: req.session.user_id,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// router.get('/', async (req, res) => {
//     try {
//         let comments = await Comment.findAll()
//         comments = comments.map(comment => {
//             const commentData = comment.get({plain:true})
//             console.log(commentData)
//         })
//         res.render('home', {
//             comments,
//             logged_in: req.session.logged_in
//         })
//     }
//     catch (error) {
//         res.status(500).json(error)
//     }
// })
// serve up post by id join with user?
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {

            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        })

        const post = postData.get({ plain: true })
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {
    res.render('login')
})



module.exports = router