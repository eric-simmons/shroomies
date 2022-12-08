//Post location 

router.post('/', async (req, res) => {
    try {
      const postData = await Post.create(req.body);
  res.render(postData)
   
    } catch (err) {
      res.status(400).json(err);
    }
  });