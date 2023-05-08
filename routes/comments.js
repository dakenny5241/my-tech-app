// routes/comment.js
module.exports = (req, res) => {
    // Check if user is logged in
    if (req.session.user) {
      // Save the comment and update the post to display the comment, the comment creator’s username, and the date created
      posts[req.params.id].comments.push({
        user: req.session.user,
        text: req.body.comment,
        date: new Date()
      });
      res.redirect('/post/' + req.params.id);
    } else {
      // Redirect to login page if user is not logged in
      res.redirect('/login');
    }
  };