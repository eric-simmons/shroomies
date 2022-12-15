const router = require("express").Router()
const { Comment } = require("../../models");
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id
      })
      res.status(200).json(newComment)
    } catch (error) {
      res.status(400).json(error)
    }
  })

router.get('/', async (req, res) => {
    try {
      const commentData = await Comment.findAll()
      res.render(commentData)
    }
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    };
  });

  module.exports = router
 