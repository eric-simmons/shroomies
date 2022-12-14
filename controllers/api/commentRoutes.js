const router = require("express").Router()
const { Comment } = require("../../models");
const withAuth = require('../../utils/auth');

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