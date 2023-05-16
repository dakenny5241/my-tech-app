// routes/login.js
module.exports = (req, res) => {
    // Check if the username and password match
    if (req.body.username === 'username' && req.body.password === 'password') {
      // Set the user in the session
      req.session.user = req.body.username;
      // Redirect to the dashboard
      res.redirect('/dashboard');
    } else if (req.body.username === 'username' && req.body.password !== 'password') {
      
      // Redirect to the login page if the username and password don't match
      res.redirect('/login');
    }
  };