const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

    // Render the homepage with existing blog posts if any have been posted
    router.get('/', async (req, res) => {
      console.log ("home");
        try {
          const postData = await Post.findAll({
            include: [User],
          });
      
          const posts = postData.map((post) => post.get({ plain: true }));
      
          res.render('home', { posts });
        } catch (err) {
          console.log("error= ",err);
          res.status(500).json(err);
        }
      });
      module.exports = router;
