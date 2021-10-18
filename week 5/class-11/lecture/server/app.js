var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// environment vars
require('dotenv').config();

// Auth stuff
const { auth } = require('express-openid-connect');

// Get config test hardcoded then refactor with .dotenv https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/
const config = {
  authRequired: false,
  auth0Logout: true,
  // secret: 'm9FCAh80J9dGmuPYVuC2UWrrIRfZ5YWUgW5eO8xdCxChBqvaF6IW12Tpjbad1FiSqPTCwTTPc6EMgcZPnZKkb2qRxGu83cIJ0596',
  // baseURL: 'http://localhost:3001',
  // clientID: 'lK3IBt57WAi7GwVUq5b7vULBuhcWLn69',
  // issuerBaseURL: 'https://dev-c23tlbbe.us.auth0.com'
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
// Endpoint that doesnt require authentication
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// Pull in reference to openid-connect
const { requiresAuth } = require('express-openid-connect');

// secured endpoint requiring authentication
app.get('/content', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// TODO: Use these routes later
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// generic error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
