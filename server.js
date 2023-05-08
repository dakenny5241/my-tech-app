const express = require('express');
const exphbs = require('express-handlebars');
const Sequelize = require('sequelize');
const session = require('express-session');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const sequelize = new Sequelize('database', 'username', 'password');
app.use(session({ secret: 'keyboard cat' }));

// Set up routes
app.get('/', require('./routes/home'));
app.get('/dashboard', require('./routes/dashboard'));
app.get('/post/:id', require('./routes/post'));
app.post('/post/:id/comment', require('./routes/comment'));
app.get('/login', require('./routes/login'));
app.post('/login', require('./routes/login'));
app.get('/signup', require('./routes/signup'));
app.post('/signup', require('./routes/signup'));
app.get('/logout', require('./routes/logout'));

// Set up a session timeout
app.use((req, res, next) => {
  // Check if the user has been idle for more than a set time
  if (Date.now() - req.session.lastActivity > 1000 * 60 * 5) {
    // Destroy the session if the user has been idle for more than a set time
    req.session.destroy();
  } else {
    // Update the session last activity time
    req.session.lastActivity = Date.now();
  }
  next();
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});