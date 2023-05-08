// routes/dashboard.js
module.exports = (req, res) => {
    // Check if user is logged in
    if (req.session.user) {
      // Render the dashboard with any blog posts the user has already created and the option to add a new blog post
      res.render('dashboard', { posts: posts });
    } else {
      // Redirect to login page if user is not logged in
      res.redirect('/login');
    }
  };