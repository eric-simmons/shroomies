const router = require('express').Router()
const { Post, User } = require('../models')

router.get('/', async (req, res) => {
    try {
        let posts = await Post.findAll()
    
        posts = posts.map(post => post.get({ plain: true }))
    
        res.render('home', { 
            posts,
            logged_in: req.session.logged_in
         })
    } catch(err) {
        res.status(500).json(err)
    }
  
})

router.get('/post/:id', async (req, res) => {
    try {
    let post = await Post.findByPk(req.params.id)
    post = post.get({ plain: true })

    res.render('post', { 
        post,
        logged_in: req.session.logged_in
     })
} catch(err) {
    res.status(500).json(err)
}
})

router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router