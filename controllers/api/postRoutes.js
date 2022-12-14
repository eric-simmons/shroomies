const router = require("express").Router()
const { Post } = require("../../models");
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll()
    res.render(postData)
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});

router.post('/', withAuth, async (req, res) => {
  try {console.log(req.body)
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id
    })
    res.status(200).json(newPost)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router

  //  router.get
//   router.delete

