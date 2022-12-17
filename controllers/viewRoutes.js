const router = require('express').Router()
// const { response } = require('express')
const { Post, User, Comment } = require('../models')

//serve up posts on home page join with comments

router.get('/', (req, res) => {
    res.render('landingpage', {
        logged_in: req.session.logged_in
    })
})

//finding post data from database and include comment and user data
router.get('/posts', async (req, res) => {
    try {
        let posts = await Post.findAll({
            include: [
                {
                    //nested include to get username for each comment
                    model: Comment,
                    include: [{ model: User }]
                },
                { model: User }],
            order: [['createdAt', 'DESC']],
        })

        //serialize post data
        posts = posts.map(post => {
            const postData = post.get({ plain: true })
            // console.log(postData)
            return {
                ...postData,
                // commentUser: postData.comments.user_id,
                commentCount: postData.comments.length,
                commentContent: postData.comments.map(comment => {
                    return comment.content
                }),
                //boolean to check if the post belongs to the logged in user
                belongsToUser: req.session.user_id === postData.user_id
            }
        })
        // console.log(JSON.stringify(posts, null, 2))

        //pass posts/comments data and session flag into home template
        res.render('home', {
            posts,
            // comments,
            user_id: req.session.user_id,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})





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