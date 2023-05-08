// routes/post.js
module.exports = (req, res) => {
    // Render the post page with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
    res.render('post', { post: posts[req.params.id] });
  };