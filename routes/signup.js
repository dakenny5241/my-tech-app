// routes/signup.js
module.exports = (req, res) => {
    // Save the user credentials
    users.push({
      username: req.body.username,
      password: req.body.password
    });
    // Set the user in the session
    req.session.user = req.body.username;
    // Redirect to the dashboard
    res.redirect('/dashboard');
  };