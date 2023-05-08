// routes/home.js
module.exports = (req, res) => {
    // Render the homepage with existing blog posts if any have been posted
    res.render('homepage', { posts: posts });
  };