const express = require('express');
const exphbs = require('express-handlebars');
const Sequelize = require('sequelize');
const session = require('express-session');
const commentRoute = require('./routes/comments');
const helpers = require('./utils/helpers');
const app = express();
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


const sequelize = require('./config/connection');

const sess = {
    secret: 'keyboard cat',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
app.use(session(sess));

// Set up routes
app.get('/', require('./routes/home'));
app.get('/dashboard', require('./routes/dashboard'));
app.get('/post/:id', require('./routes/post'));
app.post('/post/:id/comment', require('./routes/comments'));
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
app.listen(3001, () => {
  console.log('Server listening on port 3001');
  sequelize.sync({ force: false });
});