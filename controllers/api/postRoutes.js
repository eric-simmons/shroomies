const router = require(".");
const { Post } = require("../../models");

router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll()
      res.render(postData)
    }
      catch(err) {
          console.log(err);
          res.status(500).json(err);
      };
});

router.post('/', async (req, res) => {
    try {
      const postData = await Post.create(req.body);
  res.render(postData)
   
    } catch (err) {
      res.status(400).json(err);
    };
  });

  module.exports = router

  //  router.get
//   router.delete

