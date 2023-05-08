// routes/logout.js
module.exports = (req, res) => {
    // Destroy the session
    req.session.destroy();
    // Redirect to the homepage
    res.redirect('/');
  };